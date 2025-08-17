# Portfolio Sitemap Implementation

This implementation provides a dynamic sitemap for your Remix portfolio that automatically generates XML sitemaps for search engines.

## Features

- ✅ Dynamic XML sitemap generation
- ✅ Automatic environment detection (dev/prod URLs)
- ✅ Robots.txt with sitemap reference
- ✅ Configurable priorities and change frequencies
- ✅ Proper caching headers
- ✅ SEO-optimized metadata

## Files Added

### Core Files
- `app/utils/sitemap.ts` - Sitemap utilities and configuration
- `app/routes/sitemap[.]xml.tsx` - Dynamic sitemap.xml route
- `app/routes/robots[.]txt.tsx` - Dynamic robots.txt route

## Configuration

### Base URL
Update the `baseUrl` in `app/utils/sitemap.ts`:
```typescript
export const sitemapConfig: SitemapConfig = {
  baseUrl: 'https://yourdomain.com', // Update with your actual domain
  // ...
};
```

### Routes Configuration
Each route can be configured with:
- `path` - The route path
- `changefreq` - How often the page changes
- `priority` - Page importance (0.0 to 1.0)

```typescript
routes: [
  {
    path: '/',
    changefreq: 'monthly',
    priority: 1.0,
  },
  // Add more routes as needed
]
```

## Current Routes Included

- `/` (Home) - Priority: 1.0, Monthly updates
- `/about` - Priority: 0.8, Monthly updates  
- `/projects` - Priority: 0.9, Weekly updates
- `/experiences` - Priority: 0.8, Monthly updates
- `/skills` - Priority: 0.7, Monthly updates
- `/blog` - Priority: 0.8, Weekly updates
- `/contact` - Priority: 0.6, Yearly updates

## Usage

### Access Sitemap
- Production: `https://yourdomain.com/sitemap.xml`
- Development: `http://localhost:3000/sitemap.xml`

### Access Robots.txt
- Production: `https://yourdomain.com/robots.txt`
- Development: `http://localhost:3000/robots.txt`

## Testing

Test your sitemap locally:

```bash
# Start development server
pnpm run dev

# Test sitemap
curl http://localhost:3000/sitemap.xml

# Test robots.txt
curl http://localhost:3000/robots.txt
```

## Search Engine Submission

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Go to "Sitemaps" in the left sidebar
4. Submit: `https://yourdomain.com/sitemap.xml`

### Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Go to "Sitemaps"
4. Submit: `https://yourdomain.com/sitemap.xml`

## Customization

### Adding New Routes
1. Add new routes to your `app/routes/` folder
2. Update the `routes` array in `app/utils/sitemap.ts`
3. Deploy - the sitemap will automatically include the new routes

### Dynamic Content
For dynamic content (like blog posts), extend the sitemap utilities:

```typescript
// Example: Add dynamic blog posts
export async function getDynamicRoutes(): Promise<SitemapEntry[]> {
  const blogPosts = await getBlogPosts(); // Your data fetching logic
  
  return blogPosts.map(post => createSitemapEntry(
    baseUrl,
    `/blog/${post.slug}`,
    {
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: post.updatedAt,
    }
  ));
}
```

## Caching

- Sitemap: Cached for 1 hour (`max-age=3600`)
- Robots.txt: Cached for 24 hours (`max-age=86400`)

Adjust caching in the respective route files as needed.

## SEO Benefits

This sitemap implementation helps with:
- Search engine discovery of all your pages
- Proper indexing priority hints
- Update frequency signals to crawlers
- Faster discovery of new content
- Better SEO ranking potential

## Deployment Notes

The sitemap automatically detects the current environment and uses the appropriate base URL, so it works in both development and production without configuration changes.

## Troubleshooting

### Sitemap Not Working
1. Check that the routes exist in `app/routes/`
2. Verify the base URL is correct in `app/utils/sitemap.ts`
3. Test locally with `curl http://localhost:3000/sitemap.xml`

### Search Engines Not Finding Sitemap
1. Verify robots.txt is accessible: `curl https://yourdomain.com/robots.txt`
2. Submit sitemap manually in Google Search Console
3. Check for any crawl errors in webmaster tools
