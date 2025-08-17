export const prerender = false;

import fs from "fs/promises";
import path from "path";

const filePath = path.resolve("data/contact.json");

export async function POST({ request }) {
  try {
    const newEntry = await request.json();
    newEntry.verified = false;
    newEntry.timestamp = Date.now();

    // Ensure file exists
    let data = [];
    try {
      const file = await fs.readFile(filePath, "utf-8");
      data = JSON.parse(file);
    } catch {
      data = [];
    }

    // Append
    data.push(newEntry);

    // Save back
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));

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
