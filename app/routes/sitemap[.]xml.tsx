import type { LoaderFunction } from "@remix-run/cloudflare";
import { generateSitemapEntries, generateSitemapXML, sitemapConfig } from "~/utils/sitemap";

/**
 * Loader function that generates and returns the XML sitemap
 */
export const loader: LoaderFunction = async ({ request }) => {
  // Get the host from the request to support different environments
  const host = request.headers.get("host") || "robiulhossain.com";
  const protocol = request.headers.get("x-forwarded-proto") || "https";
  const baseUrl = `${protocol}://${host}`;

  // Update the base URL in the config for the current environment
  const currentConfig = {
    ...sitemapConfig,
    baseUrl,
  };

  // Generate sitemap entries
  const entries = generateSitemapEntries(currentConfig);
  
  // Generate XML sitemap
  const xml = generateSitemapXML(entries);

  // Return the XML with proper content type and caching headers
  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      "X-Robots-Tag": "noindex", // Don't index the sitemap itself
    },
  });
};
