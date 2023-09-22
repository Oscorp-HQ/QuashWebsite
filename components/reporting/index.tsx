import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const reportingMedia = ["/shake.svg", "/logs.svg", "/notes.svg"];

const Reporting = () => {
  return (
    <div className="flex px-4 pb-16 md:pb-12  flex-col justify-center items-center">
      <div className="relative w-full flex justify-center items-center flex-col overflow-hidden">
        {/* <Image
          src="/reporting-gradient.svg"
          alt="reporting-gradient"
          width={192}
          height={192}
          className=""
        /> */}
        <div className="grad-report h-[192px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
        <div className="w-full h-[48px] md:h-[200px] absolute top-0 bg-black"></div>
        <div className="absolute top-[48px] md:top-[200px] flex flex-col justify-center items-center gap-12 md:gap-[116px]">
          <div className="report-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
          <span className="report-gradient-text text-[32px] md:text-[60px] md:font-[600] leadind-normal">
            Reporting
          </span>
        </div>
      </div>
      <span className="text-[#ECECEE] text-[16px] font-[300] md:text-[24px] md:mt-5 md:font-[400] w-[236px] text-center leading-normal pb-20 md:pb-[170px] md:w-full">
        Raise comprehensive tickets with minimal effort
      </span>
      <div className="hidden justify-center items-center gap-10 px-[116px]   md:flex">
        {reportingMedia.map((media, index) => (
          <Image
            key={index}
            src={media}
            alt={media}
            width={400}
            height={554}
            className=""
          />
        ))}
      </div>
      <Carousel
        // autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={3000}
        centerMode={true}
        className="flex md:hidden"
      >
        {reportingMedia.map((media, index) => (
          <Image
            key={index}
            src={media}
            alt={media}
            width={272}
            height={374}
            className=""
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Reporting;
