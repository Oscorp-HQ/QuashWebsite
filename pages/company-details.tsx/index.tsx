import CompanyDetails from "@/components/company-details";
import React from "react";

const CompanDetailsPage = () => {
  return (
    <div className="pt-[72px] md:pt-[88px] text-white max-w-5xl m-auto h-full mb-10">
      <div className="p-4">
        <CompanyDetails />
      </div>
    </div>
  );
};

export default CompanDetailsPage;
