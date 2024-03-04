import CompanyDetails from "@/components/company-details";
import Head from "next/head";
import React from "react";

const CompanDetailsPage = () => {

  const canonicalUrl = "https://quashbugs.com/company-details";
  return (
    <div>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div className="h-[100vh]">
        <div className="pt-[72px] md:pt-[88px] text-white max-w-5xl m-auto h-full mb-10">
          <CompanyDetails />
        </div>
      </div>
    </div>
  );
};

export default CompanDetailsPage;
