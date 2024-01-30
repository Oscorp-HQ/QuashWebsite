import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="relative flex flex-col gap-[56px] md:gap-0 items-center overflow-hidden pb-[41px] md:pb-[150px]">
      <div className="left-ellipse hidden md:flex absolute top-[15rem] -left-[10rem]" />
      <div className="left-sphere hidden md:flex absolute top-[30rem] -left-[2rem]" />
      <div className="right-ellipse hidden md:flex absolute top-[36rem] -right-[25rem]" />
      <div className="right-sphere hidden md:flex absolute top-[34rem] right-[17rem]" />
      <div className=" pt-[112px] px-[18px]  md:pt-[144px] lg:px-[242px] md:pb-[112px] w-full text-center items-center justify-center flex flex-col gap-[32px] md:gap-[72px]">
        <div className="flex flex-col gap-8 md:gap-[28px] text-center items-center justify-center w-full">
          <h1 className="justify-center bg-gradient-to-b px-7 from-white to-gray-500 bg-clip-text text-transparent flex  text-[32px] font-[600] md:text-[66px] text-[#ECECEE] md:font-[600] w-full text-center leading-[1.25] ">
            Mobile Testing should not be <br /> slow and tangled
          </h1>

          <p className="justify-center text-[16px] w-[290px] font-[300] flex md:text-[24px] text-[#ECECEE] md:font-[400] md:w-full md:px-[100px]">
            We’re on a mission to make it smooth and simple
          </p>
        </div>
        <Button
          className="text-[#000000] text-[16px] md:text-[24px] font-[600] bg-[#FFFFFF] px-4 py-2 md:py-[14px] rounded-[100px] lg:h-[58px] flex z-10 leading-none md:leading-normal hover:bg-[#FFFFFFCC] "
          variant="outline"
          onClick={() => {
            router.push("https://optimus.quashbugs.com/signup");
          }}
        >
          Get Started for Free
        </Button>
      </div>
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="hero-video-frame aspect-w-16 aspect-h-9 ">
          <iframe
            className="hero-video-frame-content"
            style={{ aspectRatio: '16 / 9' }}
            src="https://www.youtube.com/embed/PnwNkHzPGQk?autoplay=1&mute=1&vq=hd1080"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            title="YouTube Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Hero;
