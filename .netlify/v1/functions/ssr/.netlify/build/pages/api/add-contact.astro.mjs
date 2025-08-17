import postgres from 'postgres';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const sql = postgres("postgresql://postgres:rvPP8+qAB8DiiHf@db.ivwxbjviwbjhrqnfjlva.supabase.co:5432/postgres", { ssl: { rejectUnauthorized: false } });
async function POST({ request }) {
  try {
    const newEntry = await request.json();
    const result = await sql`
      insert into contacts (name, email, message, plan, created_at)
      values (${newEntry.name}, ${newEntry.email}, ${newEntry.message}, ${newEntry.message}, now())
      returning id
    `;
    return new Response(JSON.stringify({ success: true, id: result[0].id }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
