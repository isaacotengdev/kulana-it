/**
 * One-time backfill: sync contact_submissions rows that never reached HubSpot.
 * Run from the project root:
 *   node scripts/backfill-hubspot.mjs
 *
 * Requires .env.local to have DATABASE_URL and HUBSPOT_ACCESS_TOKEN.
 */

import { readFileSync } from "fs";
import { join } from "path";

// ── Load .env.local ──────────────────────────────────────────────────────────
const envPath = join(process.cwd(), ".env.local");
for (const line of readFileSync(envPath, "utf8").split("\n")) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const eq = trimmed.indexOf("=");
  if (eq === -1) continue;
  const key = trimmed.slice(0, eq).trim();
  const val = trimmed.slice(eq + 1).trim();
  if (!process.env[key]) process.env[key] = val;
}

const { neon } = await import("@neondatabase/serverless");

const HS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
const DB_URL   = process.env.DATABASE_URL;

if (!HS_TOKEN || !DB_URL) {
  console.error("❌  DATABASE_URL and HUBSPOT_ACCESS_TOKEN must be set in .env.local");
  process.exit(1);
}

const sql = neon(DB_URL);

const HS_HEADERS = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${HS_TOKEN}`,
};

async function upsertContact(row) {
  const properties = {
    firstname: row.first_name,
    lastname:  row.last_name,
    email:     row.email,
    lifecyclestage: "lead",
  };
  if (row.phone) properties.phone = row.phone;

  const createRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: HS_HEADERS,
    body: JSON.stringify({ properties }),
  });

  if (createRes.ok) {
    const data = await createRes.json();
    return data.id;
  }

  if (createRes.status === 409) {
    const getRes = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(row.email)}?idProperty=email`,
      { headers: HS_HEADERS },
    );
    if (!getRes.ok) throw new Error(`Lookup failed: ${getRes.status} ${await getRes.text()}`);
    const existing = await getRes.json();
    const contactId = existing.id;

    const patchProps = { firstname: row.first_name, lastname: row.last_name, lifecyclestage: "lead" };
    if (row.phone) patchProps.phone = row.phone;

    await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`, {
      method: "PATCH",
      headers: HS_HEADERS,
      body: JSON.stringify({ properties: patchProps }),
    });
    return contactId;
  }

  throw new Error(`Create failed: ${createRes.status} ${await createRes.text()}`);
}

async function patchCustomProps(contactId, message, service) {
  const res = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`, {
    method: "PATCH",
    headers: HS_HEADERS,
    body: JSON.stringify({ properties: { message, service_of_inquiry: service } }),
  });
  if (!res.ok) {
    console.warn(`  ⚠  Custom props patch failed (${res.status}): ${await res.text()}`);
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────
const rows = await sql`
  SELECT id, first_name, last_name, email, phone, service, message
  FROM   contact_submissions
  WHERE  hs_contact_id IS NULL
  ORDER  BY created_at ASC
`;

console.log(`Found ${rows.length} unsynced submission(s).`);
if (rows.length === 0) process.exit(0);

let ok = 0;
let fail = 0;

for (const row of rows) {
  try {
    const contactId = await upsertContact(row);
    await patchCustomProps(contactId, row.message, row.service);
    await sql`UPDATE contact_submissions SET hs_contact_id = ${contactId} WHERE id = ${row.id}`;
    console.log(`  ✓  [${row.id}] ${row.email} → HS contact ${contactId}`);
    ok++;
  } catch (err) {
    console.error(`  ✗  [${row.id}] ${row.email}: ${err.message}`);
    fail++;
  }

  // Respect HubSpot rate limit (100 req/10 s) — wait 120 ms between rows
  await new Promise((r) => setTimeout(r, 120));
}

console.log(`\nDone: ${ok} synced, ${fail} failed.`);
