import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const resoltionMedia = [
  {src:"context-mob.svg",
   label:"context-mob" }, {src:"crash-mob.svg",
  label:"crash-mob"},
  {src:"ai-new.svg",
  label:"ai-mob"}];

const Resolution = () => {
  return (
    <div className="flex px-4 pb-16 md:pb-12  flex-col justify-center items-center">
    <div className="relative w-full flex justify-center items-center flex-col overflow-hidden">
      <div className="grad-resolution-main h-[150px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
      <div className="w-full h-[48px] md:h-[200px] absolute top-0 bg-black"></div>
      <div className="absolute top-[48px] md:top-[200px] flex flex-col justify-center items-center gap-12 md:gap-[116px]">
          <div className="resolution-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
          <span className="resolution-gradient-text text-[32px] md:text-[60px] md:font-[600] leadind-normal">
            Resolution
          </span>
        </div>
      </div>
      <span className="text-[#ECECEE] text-[16px] font-[300] md:text-[24px] md:mt-5 md:font-[400] w-[236px] text-center leading-normal pb-20 md:pb-[170px] md:w-full">
        Know exactly where the bug is - and how to fix it
      </span>
      <div className="hidden justify-center items-center gap-10  md:flex flex-wrap">
        {/* <div className="flex justify-center items-center gap-8"> */}
        <Image
          src="/context.svg"
          alt="context"
          width={620}
          height={598}
          className=""
        />
        <Image
          src="/crash.svg"
          alt="crash"
          width={620}
          height={598}
          className=""
        />
        <Image src="/ai-new.svg" alt="ai" width={1270} height={326} className="" />
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
        {resoltionMedia.map((media, index) => (
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
    </div>
  );
};

export default Resolution;
