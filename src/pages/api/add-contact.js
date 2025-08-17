export const prerender = false;

import postgres from "postgres";

// Securely load from Vercel env
const sql = postgres(import.meta.env.DATABASE_URL, { ssl: { rejectUnauthorized: false } });

export async function POST({ request }) {
  try {
    const newEntry = await request.json();
    // console.log("Adding new contact entry:", newEntry);

    const result = await sql`
      insert into contacts (name, email, message, plan, created_at)
      values (${newEntry.name}, ${newEntry.email}, ${newEntry.message}, ${newEntry.message}, now())
      returning id
    `;

    return new Response(JSON.stringify({ success: true, id: result[0].id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
