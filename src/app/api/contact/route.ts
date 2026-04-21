import { neon, type NeonQueryFunction } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

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
  // Add phone column to existing tables created before it was added
  await sql`
    ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS phone VARCHAR(50)
  `;
}

async function createHubSpotNote(contactId: string, service: string, message: string, source: string) {
  const noteBody = `Service of Inquiry: ${service}\nSource: ${source}\n\n${message}`;
  await fetch("https://api.hubapi.com/crm/v3/objects/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      properties: {
        hs_note_body: noteBody,
        hs_timestamp: Date.now().toString(),
      },
      associations: [
        {
          to: { id: contactId },
          types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 202 }],
        },
      ],
    }),
  });
}

export async function POST(request: NextRequest) {
  const { firstName, lastName, email, phone, service, message, source } =
    await request.json() as {
      firstName: string;
      lastName: string;
      email: string;
      phone?: string;
      service: string;
      message: string;
      source?: string;
    };

  if (!firstName || !lastName || !email || !service || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // ── 1. Save to Neon Postgres ──────────────────────────────────────────────
  const sql = neon(process.env.DATABASE_URL!);
  await ensureTable(sql);

  const [row] = await sql`
    INSERT INTO contact_submissions (first_name, last_name, email, phone, service, message, source)
    VALUES (${firstName}, ${lastName}, ${email}, ${phone ?? null}, ${service}, ${message}, ${source ?? "website"})
    RETURNING id
  `;

  // ── 2. Create / update contact in HubSpot CRM ────────────────────────────
  let hsContactId: string | null = null;
  const resolvedSource = source ?? "website";

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
            phone: phone ?? "",
            lifecyclestage: "lead",
          },
        }),
      });

      if (hsRes.ok) {
        const hsData = await hsRes.json() as { id: string };
        hsContactId = hsData.id;
        await sql`
          UPDATE contact_submissions SET hs_contact_id = ${hsContactId} WHERE id = ${row.id}
        `;
      } else if (hsRes.status === 409) {
        // Contact already exists — fetch by email
        const searchRes = await fetch(
          `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(email)}?idProperty=email`,
          { headers: { Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}` } }
        );
        if (searchRes.ok) {
          const existing = await searchRes.json() as { id: string };
          hsContactId = existing.id;
          await sql`
            UPDATE contact_submissions SET hs_contact_id = ${hsContactId} WHERE id = ${row.id}
          `;
        }
      } else {
        console.error("HubSpot create failed:", hsRes.status, await hsRes.text());
      }

      // ── 3. Create a Note with service of inquiry ─────────────────────────
      if (hsContactId) {
        await createHubSpotNote(hsContactId, service, message, resolvedSource);
      }
    } catch (err) {
      // HubSpot failure must never break the form submission
      console.error("HubSpot sync error:", err);
    }
  }

  return NextResponse.json({ success: true, id: row.id, hsContactId });
}
