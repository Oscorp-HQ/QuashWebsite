const fs = require("fs");
const globby = require("globby");
function addPage(page) {
  const path = page
    .replace("pages", "")
    .replace("/index.tsx", "")
    .replace(".tsx", "")
    .replace(".ts", "")
    .replace(".mdx", "");

  // Handle dynamic routes (e.g., /pages/blog/[slug].tsx)
  const dynamicRouteMatch = path.match(/\[([^/]+)\]/);
  if (dynamicRouteMatch) {
    // Replace [slug] with a sample value (you can replace this logic based on your data)
    const sampleValue =
      "the-hidden-costs-of-inefficient-bug-reporting-in-mobile-app-development";
    const dynamicPath = path.replace(/\[([^/]+)\]/, sampleValue);

    return `  <url>
    <loc>${`${process.env.WEBSITE_URL}${dynamicPath}`}</loc>
    <changefreq>hourly</changefreq>
  </url>`;
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

  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join("\n")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
