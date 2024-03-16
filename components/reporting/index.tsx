import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const reportingMedia = [
  {src:"/shake.svg",
   label:"shake" }, {src:"/logs-new.svg",
  label:"logs"},
  {src:"/notes.svg",
  label:"notes"}];

const Reporting = () => {
  return (
    <section className="flex px-4 pb-16 md:pb-12  flex-col justify-center items-center">
      <div className="relative w-full flex justify-center items-center flex-col overflow-hidden">
        <div className="grad-report h-[150px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
        <div className="w-full h-[48px] md:h-[200px] absolute top-0 bg-black"></div>
        <div className="absolute top-[48px] md:top-[200px] flex flex-col justify-center items-center gap-12 md:gap-[116px]">
          <div className="report-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
          <h1 className="report-gradient-text text-[32px] md:text-[60px] md:font-[600] leadind-normal">
            Reporting
          </h1>
        </div>
      </div>
      <p className="text-[#ECECEE] text-[16px] font-[300] md:text-[24px] md:mt-5 md:font-[400] w-[236px] text-center leading-normal pb-20 md:pb-[170px] md:w-full">
        Raise comprehensive tickets with minimal effort
      </p>
      <div className="hidden justify-center items-center gap-10   md:flex flex-wrap">
        {reportingMedia.map((media, index) => (
          <Image
            key={index}
            src={media.src}
            alt={media.label}
            width={400}
            height={554}
            className=""
          />
        ))}
      </div>
      <Carousel
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={3000}
        centerMode={true}
        className="flex md:hidden"
      >
        {reportingMedia.map((media, index) => (
          <>
            <Image
            key={index}
            src={media.src}
            alt={media.label}
            width={272}
            height={374}
            className=""
          />
          <br />
          <br />
          </>
        ))}
      </Carousel>
    </section>
  );
};

export default Reporting;
