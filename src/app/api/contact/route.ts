import { neon, type NeonQueryFunction } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// ── Basic in-memory rate limiter ──────────────────────────────────────────────
// Best-effort protection against spam/abuse. Note: on serverless this is
// per-instance and resets on cold start — for hard guarantees move to a shared
// store (e.g. Upstash Redis). Still meaningfully raises the cost of flooding.
const RATE_LIMIT_MAX = 5;                 // submissions…
const RATE_LIMIT_WINDOW_MS = 10 * 60_000; // …per 10 minutes, per IP
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  // opportunistic cleanup so the map doesn't grow unbounded
  if (hits.size > 5_000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) hits.delete(k);
    }
  }
  return recent.length > RATE_LIMIT_MAX;
}

// ── Validation ────────────────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { firstName: 100, lastName: 100, email: 254, phone: 40, service: 100, message: 5000, source: 50 } as const;

const clean = (v: unknown): string => (typeof v === "string" ? v.trim() : "");

async function ensureTable(sql: NeonQueryFunction<false, false>) {
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
  await sql`
    ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS phone VARCHAR(50)
  `;
}

export async function POST(request: NextRequest) {
  // ── Rate limit ──────────────────────────────────────────────────────────────
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // ── Honeypot: hidden field only bots fill. Pretend success, drop silently. ──
  if (clean(body.website)) {
    return NextResponse.json({ success: true });
  }

  const firstName = clean(body.firstName);
  const lastName = clean(body.lastName);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const service = clean(body.service);
  const message = clean(body.message);
  const source = clean(body.source) || "website";

  // ── Validation ────────────────────────────────────────────────────────────
  if (!firstName || !lastName || !email || !service || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > LIMITS.email) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }
  if (
    firstName.length > LIMITS.firstName ||
    lastName.length > LIMITS.lastName ||
    phone.length > LIMITS.phone ||
    service.length > LIMITS.service ||
    message.length > LIMITS.message ||
    source.length > LIMITS.source
  ) {
    return NextResponse.json({ error: "One or more fields exceed the allowed length." }, { status: 400 });
  }

  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set");
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 });
  }

  // ── 1. Save to Neon Postgres ──────────────────────────────────────────────
  let rowId: number;
  const sql = neon(process.env.DATABASE_URL);
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
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 });
  }

  // ── 2. Create / update contact in HubSpot CRM ────────────────────────────
  let hsContactId: string | null = null;

  if (process.env.HUBSPOT_ACCESS_TOKEN) {
    try {
      const hsRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
          properties: {
            firstname: firstName,
            lastname: lastName,
            email,
            phone: phone || "",
            message: message,
            service_of_inquiry: service,
            lifecyclestage: "lead",
          },
        }),
      });

      if (hsRes.ok) {
        const hsData = await hsRes.json() as { id: string };
        hsContactId = hsData.id;
        await sql`
          UPDATE contact_submissions SET hs_contact_id = ${hsContactId} WHERE id = ${rowId}
        `;
      } else if (hsRes.status === 409) {
        // Contact already exists — fetch by email then patch
        const searchRes = await fetch(
          `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(email)}?idProperty=email`,
          { headers: { Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}` } }
        );
        if (searchRes.ok) {
          const existing = await searchRes.json() as { id: string };
          hsContactId = existing.id;

          // Patch the existing contact with latest inquiry
          await fetch(
            `https://api.hubapi.com/crm/v3/objects/contacts/${hsContactId}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
              },
              body: JSON.stringify({
                properties: {
                  phone: phone || "",
                  message: message,
                  service_of_inquiry: service,
                  lifecyclestage: "lead",
                },
              }),
            }
          );

          await sql`
            UPDATE contact_submissions SET hs_contact_id = ${hsContactId} WHERE id = ${rowId}
          `;
        }
      } else {
        console.error("HubSpot create failed:", hsRes.status, await hsRes.text());
      }
    } catch (err) {
      console.error("HubSpot sync error:", err);
    }
  }

  return NextResponse.json({ success: true, id: rowId, hsContactId });
}
