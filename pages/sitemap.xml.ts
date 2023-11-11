// pages/sitemap.xml.js
import fs from "fs";
import path from "path";

const homepage = "https://quashbugs.com";

function getImagesInPublicFolder() {
  const publicFolderPath = path.join(process.cwd(), "public");
  const imageFiles = fs.readdirSync(publicFolderPath);

  // Filter the files to include only images (you might need a more sophisticated filter based on your file types)
  const imageUrls = imageFiles
    .filter((file) => /\.(jpg|jpeg|png|gif|svg)$/i.test(file))
    .map((file) => `/${file}`);

  return imageUrls;
}

function generateSiteMap() {
  const currentDate = new Date().toISOString();

  // Get image URLs dynamically from the public folder
  const imageUrls = getImagesInPublicFolder();

  // Define your pages with dynamic properties
  const pages = [
    { path: "", changefreq: "daily", priority: 1.0, images: imageUrls },
    {
      path: "/pricing",
      changefreq: "monthly",
      priority: 0.8,
      images: imageUrls,
    },
    {
      path: "/privacy",
      changefreq: "monthly",
      priority: 0.8,
      images: imageUrls,
    },
    {
      path: "/refund-and-cancellation-policy",
      changefreq: "monthly",
      priority: 0.8,
      images: imageUrls,
    },
    { path: "/team", changefreq: "monthly", priority: 0.8, images: imageUrls },
    {
      path: "/terms-and-conditions",
      changefreq: "monthly",
      priority: 0.8,
      images: imageUrls,
    },
    {
      path: "/upcoming",
      changefreq: "weekly",
      priority: 0.9,
      images: imageUrls,
    },
    {
      path: "https://bumpy-point-aa4.notion.site/Quash-SDK-Developer-Documentation-534ebd4c995040b2ae536dd139609d47",
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      path: "https://optimus.quashbugs.com/",
      changefreq: "weekly",
      priority: 0.9,
    },
  ];

  // Generate the sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          ({ path, changefreq, priority }) => `
        <url>
          <loc>${path.startsWith("http") ? path : homepage + path}</loc>
          <lastmod>${currentDate}</lastmod>
          <changefreq>${changefreq || "weekly"}</changefreq>
          <priority>${priority || 0.5}</priority>
        </url>
      `
        )
        .join("")}
    </urlset>
  `;

  return sitemap;
}

export async function getServerSideProps({ res }: any) {
  try {
    const sitemap = generateSiteMap();

    res.setHeader("Content-Type", "application/xml");
    res.write(sitemap);
    res.end();
  } catch (error: any) {
    console.error("Error generating sitemap:", error);
    res.setHeader("Content-Type", "text/plain");
    res.status(500).end(`Internal Server Error: ${error.message}`);
  }

  return {
    props: {},
  };
}

export default function SiteMap() {}
