import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="relative flex flex-col gap-[56px] md:gap-0 items-center">
      <div className="absolute left-0 right-0 top-0 md:top-[200px] bottom-0 w-full bg-[url('/Gradient.svg')] bg-no-repeat" />
      <div className=" pt-[112px] px-[18px]  md:pt-[144px] md:px-[242px] md:pb-[112px] w-full text-center items-center justify-center flex flex-col gap-[32px] md:gap-[72px]">
        <div className="flex flex-col gap-8 md:gap-[28px] text-center items-center justify-center w-full">
          <span className="bg-gradient-to-b px-7 from-white to-gray-500 bg-clip-text text-transparent flex  text-[32px] font-[600] md:text-[66px] text-[#ECECEE] md:font-[600] w-full text-center leading-[1.25] ">
            Capture, Report, and Resolve Bugs in a Flash
          </span>

          <span className="text-[16px] w-[290px] font-[300] flex md:text-[24px] text-[#ECECEE] md:font-[400] md:w-full md:px-[100px]">
            Transform your bug reporting process, ensuring rapid resolutions and
            a smoother development journey.
          </span>
        </div>
        <Button
          className="text-[#000000] text-[16px] md:text-[24px] font-[600] bg-[#FFFFFF] px-4 py-2 md:py-[14px] rounded-[100px] h-[58px] flex z-10 leading-none md:leading-normal hover:bg-[#FFFFFFCC] "
          variant="outline"
          onClick={() => {
            router.push("https://optimus.quashbugs.com/signup");
          }}
        >
          Get Started for Free
        </Button>
      </div>
      <Image
        src="Hero.svg"
        alt="hero"
        width={1078}
        height={600}
        className="z-10 hidden md:flex"
      />
      <div className="w-full flex justify-end md:hidden">
        <Image
          src="/hero-mob.svg"
          alt="hero"
          width={345}
          height={303}
          className="z-10 flex md:hidden pb-[73px]"
        />
      </div>
    </div>
  );
};

export default Hero;
