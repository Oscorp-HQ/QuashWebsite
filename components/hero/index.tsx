import Image from "next/image";
import React, { useState } from "react";


const Hero = ({  setFormOpen }: any) => {
  return (
    <div className="h-[600px] md:h-[928px] w-full relative overflow-x-hidden">
      <div className="flex flex-col gap-[32px] items-center md:items-start mt-[195px] md:mt-0  md:absolute md:top-[274px] md:left-[126px] md:w-[667px] md:h-[402px] md:gap-[78px]">
        <div className="hero-text-container">
          <div className="flex flex-col" id="hero-text">
            <span className="text-[#418A30]">find bugs faster</span>
            <span>fix them smarter</span>
          </div>
          <span id="hero-sub" className="flex font-normal">
            Create tickets directly from mobile device while testing, and get
            all the important information auto-captured.
          </span>
        </div>
        <Image
          src="/request.svg"
          alt="request"
          height="60"
          width="170"
          className="hidden md:inline-flex hover:cursor-pointer"
          onClick={() => {
            setFormOpen(true);
          }}
        />
        <Image
          src="/request-button-mob.svg"
          alt="request"
          height="49"
          width="140"
          className=" md:hidden hover:cursor-pointer"
          onClick={() => {
            setFormOpen(true);
          }}
        />
      </div>

      <Image
        src="/Illustration.svg"
        alt="illustration"
        height="773"
        width="1145"
        className="hidden md:inline-block absolute right-[-364px] top-[130px] -z-10"
      />

      <Image
        src="/group-3.svg"
        alt="group-3"
        height="177"
        width="168"
        className="md:hidden absolute top-[60px] -z-10"
      />
      <Image
        src="/group-4.svg"
        alt="group-4"
        height="176"
        width="168"
        className="md:hidden absolute top-[305px] right-0 -z-10"
      />
      {/* <Image
        src="/group-2.svg"
        alt="group-2"
        height="176"
        width="75"
        className="md:hidden absolute top-[60px] right-[-28px] -z-10"
      /> */}

      <Image
        src="/group-1.svg"
        alt="group-1"
        height="80"
        width="75"
        className="md:hidden absolute top-[301px]  -z-10"
      />
    </div>
  );
};

export default Hero;
