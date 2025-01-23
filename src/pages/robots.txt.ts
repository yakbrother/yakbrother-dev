import type { APIRoute } from "astro";

const robots = `
User-agent: *
Allow: /

Sitemap: https://glyptodon.dev/sitemap-index.xml
`.trim();

export const GET: APIRoute = () =>
  new Response(robots, {
    headers: { "Content-Type": "text/plain" },
  });
