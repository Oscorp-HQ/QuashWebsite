import Benefits from "@/components/benefits";
import CodeSection from "@/components/code";
import Collaboration from "@/components/collaboration";
import Integration from "@/components/integration";
import Reporting from "@/components/reporting";
import Resolution from "@/components/resolution";
import { Button } from "@/components/ui/button";
import router from "next/router";
import React from "react";

const Product = () => {
  return (
    <div className="h-full w-full overflow-hidden relative">
      <div className="flex px-5 pb-[112px]  md:pt-[20px] md:pb-[143px] flex-col justify-center items-center">
        <div className="relative w-full justify-center items-center flex-col overflow-hidden flex ">
          <div className="product-main grad-callback h-[192px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
          <div className="w-full h-[115px] md:h-[134px] absolute top-0 bg-black"></div>
          <div className=" absolute top-[115px] md:top-[134px] flex flex-col justify-center items-center gap-12 md:gap-[66px]">
            <div className="callback-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
          </div>
        </div>
        <div className="product-main-mob flex flex-col pt-[132px] gap-5 md:gap-[28px] text-center items-center ">
            <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent text-[32px] font-[600] md:text-[60px] text-[#ECECEE] w-full  leading-normal">
              Capture the complete picture <br /> with technical detailing in
              every report.
            </span>
          </div>
        <div className="product-main w-full text-center items-center flex flex-col gap-[45px] md:gap-[120px] md:mt-[-190px]">
          <div className="flex flex-col gap-5 md:gap-[28px] text-center items-center ">
            <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent text-[32px] font-[600] md:text-[60px] text-[#ECECEE] w-full  leading-normal">
              Capture the complete picture <br /> with technical detailing in
              every report.
            </span>
          </div>
          
          <img
            src="product-page-landing-image.svg"
            alt=""
            className=""
          />
        </div>
        
        
      </div>
      <div className="product-youtube-video relative w-full max-w-6xl mx-auto mb-[48px]">
        <div className="hero-video-frame aspect-w-16 aspect-h-9 ">
          <iframe
            className="hero-video-frame-content"
            style={{ aspectRatio: "16 / 9" }}
            src="https://www.youtube.com/embed/PnwNkHzPGQk?autoplay=1&mute=1&vq=hd1080"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            title="YouTube Video"
          ></iframe>
        </div>
      </div>
      <Benefits />
      <Reporting />
      <Resolution />
      <Collaboration />
      <Integration />
      <CodeSection />
      <div className="flex px-5 pb-[112px]  md:pt-[20px] md:pb-[143px] flex-col justify-center items-center">
        <div className="relative w-full justify-center items-center flex-col overflow-hidden flex ">
          <div className="grad-callback h-[192px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
          <div className="w-full h-[115px] md:h-[200px] absolute top-0 bg-black"></div>
          <div className="absolute top-[115px] md:top-[200px] flex flex-col justify-center items-center gap-12 md:gap-[116px]">
            <div className="callback-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
          </div>
        </div>
        <div className=" w-full text-center items-center flex flex-col gap-[45px] md:gap-[72px] md:mt-[-120px]">
          <div className="flex flex-col gap-5 md:gap-[28px] text-center items-center md:max-w-[987px]">
            <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent text-[32px] font-[600] md:text-[60px] text-[#ECECEE] w-full text-center leading-normal">
              Win the never ending battle of Quality vs Speed
            </span>

            <span className="text-[16px] w-[252px] font-[300] md:text-[24px] text-[#ECECEE] md:font-[400] md:w-full">
              Accelerate your Mobile Testing Workflow with Quash
            </span>
          </div>
          <Button
            className="text-[#000000] text-[16px] md:text-[24px] font-[600] bg-[#FFFFFF] px-4 py-3 md:py-[14px] rounded-[100px] lg:h-[58px] flex z-10 leading-5 md:leading-normal hover:bg-[#FFFFFFCC]"
            variant="outline"
            onClick={() => {
              router.push("https://optimus.quashbugs.com/signup");
            }}
          >
            Get Started for Free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
