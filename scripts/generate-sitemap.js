const fs = require("fs");
const globby = require("globby");
const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function addPage(page) {
  const path = page
    .replace("pages", "")
    .replace("/index.tsx", "")
    .replace(".tsx", "")
    .replace(".ts", "")
    .replace(".mdx", "");

  // Handle dynamic routes (e.g., /pages/blog/[slug].tsx)
  const dynamicRouteMatch = path.match(/\[([^/]+)\]/);
  if (dynamicRouteMatch) {
    // Fetch data from Contentful
    const response = await client.getEntries({
      content_type: "post",
    });

    const contentfulPages = response.items;

    // Generate pages dynamically from Contentful data
    const dynamicPages = contentfulPages.map((contentfulPage) => {
      const sampleValue = contentfulPage.fields.slug;
      const dynamicPath = path.replace(/\[([^/]+)\]/, sampleValue);

      return `  <url>
        <loc>${`${process.env.WEBSITE_URL}${dynamicPath}`}</loc>
        <changefreq>hourly</changefreq>
      </url>`;
    });

    return dynamicPages.join("\n");
  }

  const route = path === "/index" ? "" : path;

  return `  <url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <changefreq>hourly</changefreq>
  </url>`;
}

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.tsx) and API routes.
  const pages = await globby([
    "pages/**/*{.ts,.tsx,.mdx}",
    "!pages/_*.ts",
    "!pages/_*.tsx",
    "!pages/api",
  ]);

  const promises = pages.map(addPage);
  const sitemapContents = await Promise.all(promises);

  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapContents.join("\n")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
