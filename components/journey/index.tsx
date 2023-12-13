import Link from "next/link";
import React from "react";

const Journey = () => {
  return (
    <div className="relative px-[20px] py-[114px] md:px-[262px] md:py-[181px] flex flex-col items-center text-center">
      <div className="journey-right-ellipse hidden md:flex absolute top-[20%] right-[30%] transform translate-y-[-50%]" />
      <div className="journey-right-sphere hidden md:flex absolute top-[40%] right-[60%] transform translate-y-[-50%]" />
      <span className="text-[14px] md:text-[24px] md:font-[400] text-[#ECECEE] font-[300] mb-3 md:mb-10">
        We’re looking for passionate people to join us!
      </span>
      <span className="text-[24px] md:text-[48px] text-[#ECECEE] font-[600] mb-10">
        Want to be a part of this Journey?
      </span>
      <span className="text-[14px] md:text-[24px] text-[#ECECEE] font-[300] md:font-[400] z-20">
        Write to us at{" "}
        <Link href="mailto:hello@quashbugs.com" className="z-20 underline">
          hello@quashbugs.com
        </Link>
      </span>
    </div>
  );
};

export default Journey;
