import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[600px] md:h-[928px] w-full relative overflow-x-hidden">
      <div className="flex flex-col gap-[32px] items-center md:items-start mt-[195px] md:mt-0  md:absolute md:top-[274px] md:left-[126px] md:w-[667px] md:h-[402px] md:gap-[78px]">
        <div className="hero-text-container">
          <div className="flex flex-col">
            <span className="hero-text text-[#418A30]">find bugs faster</span>
            <span className="hero-text">fix them smarter</span>
          </div>
          <span className="hero-sub">
            Create tickets directly from mobile device while testing, and get
            all the important information auto-captured.
          </span>
        </div>

        <Image
          src="/request.svg"
          alt="request"
          height="60"
          width="170"
          className=" hover:cursor-pointer"
        />
      </div>
      <div className="hidden md:inline-block absolute right-[-364px] top-[130px] -z-10">
        <Image
          src="/Illustration.svg"
          alt="illustration"
          height="773"
          width="1145"
        />
      </div>
    </div>
  );
};

export default Hero;
