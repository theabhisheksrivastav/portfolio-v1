export const prerender = false;

import fs from "fs/promises";
import path from "path";

const filePath = path.resolve("data/testimonials.json");

export async function POST({ request }) {
  try {
    const newTestimonial = await request.json();
    newTestimonial.verified = false; // default

    // Read existing
    const file = await fs.readFile(filePath, "utf-8");
    const testimonials = JSON.parse(file);

    // Add new
    testimonials.push(newTestimonial);

    // Write back
    await fs.writeFile(filePath, JSON.stringify(testimonials, null, 2));

    return new Response(JSON.stringify({ success: true }), {
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
