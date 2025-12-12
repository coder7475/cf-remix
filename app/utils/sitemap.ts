export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

export interface SitemapConfig {
  baseUrl: string;
  routes: {
    path: string;
    changefreq?: SitemapEntry["changefreq"];
    priority?: number;
  }[];
}

/**
 * Configuration for the portfolio sitemap
 */
export const sitemapConfig: SitemapConfig = {
  baseUrl: "https://robiulhossain.com", // Update with your actual domain
  routes: [
    {
      path: "/",
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      path: "/about",
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      path: "/projects",
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      path: "/experiences",
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      path: "/skills",
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      path: "/blog",
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      path: "/contact",
      changefreq: "yearly",
      priority: 0.6,
    },
  ],
};

/**
 * Generates a complete sitemap entry
 */
export function createSitemapEntry(
  baseUrl: string,
  path: string,
  options: {
    lastmod?: string;
    changefreq?: SitemapEntry["changefreq"];
    priority?: number;
  } = {}
): SitemapEntry {
  const url = `${baseUrl.replace(/\/$/, "")}${path}`;
  const lastmod = options.lastmod || new Date().toISOString().split("T")[0];

  return {
    url,
    lastmod,
    changefreq: options.changefreq || "monthly",
    priority: options.priority || 0.5,
  };
}

/**
 * Generates XML sitemap string from entries
 */
export function generateSitemapXML(entries: SitemapEntry[]): string {
  const urlEntries = entries
    .map(
      (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

/**
 * Generates sitemap entries from configuration
 */
export function generateSitemapEntries(config: SitemapConfig): SitemapEntry[] {
  return config.routes.map((route) =>
    createSitemapEntry(config.baseUrl, route.path, {
      changefreq: route.changefreq,
      priority: route.priority,
    })
  );
}
