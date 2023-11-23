const fs = require('fs');
const globby = require('globby');
function addPage(page) {
  const path = page.replace('pages', '').replace('.ts', '').replace('.tsx', '').replace('.mdx', '');
  const route = path === '/index' ? '' : path;

  return `  <url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <changefreq>hourly</changefreq>
  </url>`;
}

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.tsx) and API routes.
  const pages = await globby([
    'pages/**/*{.ts,.tsx,.mdx}',
    '!pages/_*.ts',
    '!pages/_*.tsx',
    '!pages/api',
  ]);

  console.log('Pages:', pages); // Add this line to see the list of matched pages

  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();