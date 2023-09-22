import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Collaboration = () => {
  return (
    <div className="flex px-4 pb-16 md:pb-0 flex-col justify-center items-center">
      <div className="relative w-full flex justify-center items-center flex-col overflow-hidden">
        {/* <Image
          src="/reporting-gradient.svg"
          alt="reporting-gradient"
          width={192}
          height={192}
          className=""
        /> */}
        <div className="grad-collaboration h-[192px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
        <div className="w-full h-[48px] md:h-[200px] absolute top-0 bg-black"></div>
        <div className="absolute top-[48px] md:top-[200px] flex flex-col justify-center items-center gap-12 md:gap-[116px]">
          <div className="collaboration-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
          <span className="collaboration-gradient-text text-[32px] md:text-[60px] md:font-[600] leadind-normal">
            Collaboration
          </span>
        </div>
      </div>
      <span className="text-[#ECECEE] text-[16px] font-[300] md:text-[24px] md:mt-5 md:font-[400] w-[236px] text-center leading-normal pb-20 md:pb-[170px] md:w-full">
        Manage all your testing workflows in a single place
      </span>
      <div className="flex justify-center items-center md:pb-[248px]">
        <Image
          src="/track.svg"
          alt=""
          width={328}
          height={443}
          className="flex md:hidden"
        />
        <Image
          src="/track-desk.svg"
          alt=""
          width={1106}
          height={554}
          className="md:flex hidden"
        />
      </div>
    </div>
  );
};

export default Collaboration;
