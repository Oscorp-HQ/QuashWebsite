import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const reportingMedia = [
  { src: "/shake.svg", label: "shake" },
  { src: "/logs.svg", label: "logs" },
  { src: "/notes.svg", label: "notes" },
];

const Agile = () => {
  return (
    <>
     <div className="flex px-4 flex-col justify-center items-center">
      <div className="relative w-full flex justify-center items-center flex-col overflow-hidden">
        <div className="grad-resolution h-[162px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
        <div className="w-full h-[93px] md:h-[132px]  absolute top-0 bg-black"></div>
        <div className="absolute top-[93px]  md:top-[132px]  flex flex-col justify-center items-center gap-12 md:gap-[70px]">
          <div className="resolution-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
          <span className="resolution-gradient-text text-[32px] lg:text-[56px] md:font-[600] leading-normal  text-center">
            Agile, Mobile-First Development
          </span>
        </div>
        <div className="agile-desc-text">
          Double your development agility with Quash&apos;s mobile-first approach.{" "}
          <br /> Deliver low-risk, high-quality mobile apps faster, and boost
          team productivity for standout performance.
        </div>
      </div>
      <div>
      <img
        src="/agile-illustration-mob.svg"
        alt=""
        className="w-full md:hidden" 
      />
      <div className="agile-image-container hidden md:block"> 
        <img
          src="/agile-illustration.svg"
          alt=""
          className="w-full"
          width={1400}
          height={268}
        />
      </div>
    </div>
    </div>
    </>
  );
};

export default Agile;
