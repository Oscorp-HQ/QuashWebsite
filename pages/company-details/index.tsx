import CompanyDetails from "@/components/company-details";
import Head from "next/head";
import React from "react";

const CompanyDetailsPage = () => {
  const canonicalUrl = "https://quashbugs.com/company-details";

  return (
    <div>
      <Head>
        <title>Quash - Company Details</title>
        <meta name="description" content="Details about the company's registered entity, address, and contact details." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Company Details - Quash" />
        <meta property="og:description" content="Details about the company's registered entity, address, and contact details." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Quash",
            "url": canonicalUrl,
            "logo": "https://quashbugs.com/logo.svg",
            "sameAs": [
              "https://www.linkedin.com/company/quash-bugs",
              "https://www.youtube.com/@QuashBugs",
            ],
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+1-555-555-5555",
              "contactType": "customer service"
            }]
          })}
        </script>
      </Head>
      <div className="h-[100vh]">
        <div className="pt-[72px] md:pt-[88px] text-white max-w-5xl m-auto h-full mb-10">
          <CompanyDetails />
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailsPage;
