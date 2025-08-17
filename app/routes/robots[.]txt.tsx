import type { LoaderFunction } from "@remix-run/cloudflare";

/**
 * Loader function that generates and returns the robots.txt file
 */
export const loader: LoaderFunction = async ({ request }) => {
  // Get the host from the request to support different environments
  const host = request.headers.get("host") || "robiulhossain.com";
  const protocol = request.headers.get("x-forwarded-proto") || "https";
  const baseUrl = `${protocol}://${host}`;

  // Generate robots.txt content
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Block access to sensitive areas (optional)
Disallow: /admin/
Disallow: /*.json$
Disallow: /api/private/

# Crawl delay (optional - helps with server load)
Crawl-delay: 1`;

  // Return the robots.txt with proper content type and caching headers
  return new Response(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400", // Cache for 24 hours
    },
  });
};
