import type { APIRoute } from "astro";
import { CONFIG } from "../config";

const robots = `
User-agent: *
Allow: /

Sitemap: ${CONFIG.site_url}/sitemap-index.xml
`.trim();

export const GET: APIRoute = () =>
  new Response(robots, {
    headers: { "Content-Type": "text/plain" },
  });
