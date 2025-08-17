import postgres from 'postgres';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const sql = postgres("postgresql://postgres:rvPP8+qAB8DiiHf@db.ivwxbjviwbjhrqnfjlva.supabase.co:5432/postgres", { ssl: "require" });
async function POST({ request }) {
  try {
    const newTestimonial = await request.json();
    console.log("Adding new testimonial:", newTestimonial);
    const result = await sql`
      insert into testimonials (name, title, testimonial, verified, created_at)
      values (${newTestimonial.name}, ${newTestimonial.title}, ${newTestimonial.testimonial}, FALSE, now())
      returning id
    `;
    return new Response(JSON.stringify({ success: true, id: result[0].id }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Error adding testimonial:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
async function GET() {
  try {
    console.log("Fetching testimonials...");
    const testimonials = await sql`
      select * from testimonials
      where verified = true
      order by created_at desc
    `;
    return new Response(JSON.stringify(testimonials), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Error fetching testimonials:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
