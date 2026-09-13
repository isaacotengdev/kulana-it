import { neon, type NeonQueryFunction } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// ── In-memory rate limiter ────────────────────────────────────────────────────
// Per-instance; resets on cold start. For hard guarantees use a shared store
// (e.g. Upstash Redis). Still meaningfully raises the cost of flooding.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60_000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5_000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) hits.delete(k);
    }
  }
  return recent.length > RATE_LIMIT_MAX;
}

// ── Validation ────────────────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = {
  firstName: 100, lastName: 100, email: 254,
  phone: 40, service: 100, message: 5000, source: 50,
} as const;

const clean = (v: unknown): string => (typeof v === "string" ? v.trim() : "");

// ── Table initialisation (once per instance) ──────────────────────────────────
let tableReady = false;

async function ensureTable(sql: NeonQueryFunction<false, false>) {
  if (tableReady) return;
  await sql`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id            SERIAL PRIMARY KEY,
      first_name    VARCHAR(255)  NOT NULL,
      last_name     VARCHAR(255)  NOT NULL,
      email         VARCHAR(255)  NOT NULL,
      phone         VARCHAR(50),
      service       VARCHAR(255)  NOT NULL,
      message       TEXT          NOT NULL,
      source        VARCHAR(100)  NOT NULL DEFAULT 'website',
      hs_contact_id VARCHAR(64),
      created_at    TIMESTAMPTZ   NOT NULL DEFAULT NOW()
    )
  `;
  tableReady = true;
}

// ── HubSpot helpers ───────────────────────────────────────────────────────────
const HS_TOKEN = () => process.env.HUBSPOT_ACCESS_TOKEN;
const HS_HEADERS = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${HS_TOKEN()}`,
});

// Create or locate a HubSpot contact using standard properties only.
// Returns the HubSpot contact ID, or null on failure.
async function upsertHubSpotContact(
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
): Promise<string | null> {
  const properties: Record<string, string> = {
    firstname: firstName,
    lastname: lastName,
    email,
    lifecyclestage: "lead",
  };
  if (phone) properties.phone = phone;

  const createRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: HS_HEADERS(),
    body: JSON.stringify({ properties }),
  });

  if (createRes.ok) {
    const data = await createRes.json() as { id: string };
    return data.id;
  }

  if (createRes.status === 409) {
    // Contact already exists — look them up by email
    const getRes = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(email)}?idProperty=email`,
      { headers: HS_HEADERS() },
    );
    if (!getRes.ok) {
      console.error("HubSpot contact lookup failed:", getRes.status, await getRes.text());
      return null;
    }
    const existing = await getRes.json() as { id: string };
    const contactId = existing.id;

    // Overwrite all submitted fields so the latest data always wins
    const patchProps: Record<string, string> = {
      firstname: firstName,
      lastname: lastName,
      lifecyclestage: "lead",
    };
    if (phone) patchProps.phone = phone;

    const patchRes = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
      {
        method: "PATCH",
        headers: HS_HEADERS(),
        body: JSON.stringify({ properties: patchProps }),
      },
    );
    if (!patchRes.ok) {
      console.error("HubSpot contact patch failed:", patchRes.status, await patchRes.text());
    }
    return contactId;
  }

  console.error("HubSpot contact create failed:", createRes.status, await createRes.text());
  return null;
}

// Patch custom properties as a separate call so that a misconfigured portal
// (missing custom property definitions) doesn't block contact creation.
// Create these two custom properties in your HubSpot portal if not present:
//   - Internal name: message          (single-line or multi-line text)
//   - Internal name: service_of_inquiry (single-line text)
async function patchHubSpotCustomProps(
  contactId: string,
  message: string,
  service: string,
) {
  const res = await fetch(
    `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
    {
      method: "PATCH",
      headers: HS_HEADERS(),
      body: JSON.stringify({
        properties: { message, service_of_inquiry: service },
      }),
    },
  );
  if (!res.ok) {
    // Non-fatal — contact is already created. Log for ops awareness.
    console.warn(
      "HubSpot custom props patch failed (are 'message' and 'service_of_inquiry' defined in your portal?):",
      res.status,
      await res.text(),
    );
  }
}

// ── Route handler ─────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill the hidden field; real users never see it
  if (clean(body.website)) {
    return NextResponse.json({ success: true });
  }

  const firstName = clean(body.firstName);
  const lastName  = clean(body.lastName);
  const email     = clean(body.email);
  const phone     = clean(body.phone);
  const service   = clean(body.service);
  const message   = clean(body.message);
  const source    = clean(body.source) || "website";

  if (!firstName || !lastName || !email || !service || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > LIMITS.email) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }
  if (
    firstName.length > LIMITS.firstName ||
    lastName.length  > LIMITS.lastName  ||
    phone.length     > LIMITS.phone     ||
    service.length   > LIMITS.service   ||
    message.length   > LIMITS.message   ||
    source.length    > LIMITS.source
  ) {
    return NextResponse.json(
      { error: "One or more fields exceed the allowed length." },
      { status: 400 },
    );
  }

  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set");
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }

  // ── 1. Save to Neon Postgres ──────────────────────────────────────────────
  const sql = neon(process.env.DATABASE_URL);
  let rowId: number;
  try {
    await ensureTable(sql);
    const [row] = await sql`
      INSERT INTO contact_submissions (first_name, last_name, email, phone, service, message, source)
      VALUES (${firstName}, ${lastName}, ${email}, ${phone || null}, ${service}, ${message}, ${source})
      RETURNING id
    `;
    rowId = row.id;
  } catch (err) {
    console.error("DB insert error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }

  // ── 2. Sync to HubSpot CRM ────────────────────────────────────────────────
  if (HS_TOKEN()) {
    try {
      // Step A: create/locate the contact using standard fields (always safe)
      const hsContactId = await upsertHubSpotContact(firstName, lastName, email, phone);

      if (hsContactId) {
        // Persist the HubSpot ID back to our DB
        await sql`UPDATE contact_submissions SET hs_contact_id = ${hsContactId} WHERE id = ${rowId}`;

        // Step B: patch custom properties separately — non-fatal if not configured
        await patchHubSpotCustomProps(hsContactId, message, service);
      }
    } catch (err) {
      // HubSpot failure is non-fatal — submission is already saved to Neon
      console.error("HubSpot sync error:", err);
    }
  }

  return NextResponse.json({ success: true });
}
