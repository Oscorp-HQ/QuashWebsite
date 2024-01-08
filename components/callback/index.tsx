import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import Image from "next/image";


const Callback = () => {
  const router = useRouter();

  return (
    <div className=" relative flex px-5 pt-[96px] md:pt-[20px] sm:pt-[20px] flex-col justify-center items-center">
      <div className="absolute top-0 md:relative  w-full justify-center items-center flex-col overflow-hidden flex">
        <div className="grad-callback h-[192px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%] "></div>
        <div className="w-full h-[48px] md:h-[200px] absolute top-0 bg-black"></div>
        <div className="absolute top-[48px] md:top-[200px] flex flex-col justify-center items-center gap-12 md:gap-[116px]">
          <div className="callback-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px] z-10" />
        </div>
      </div>
      <div className=" w-full text-center items-center flex flex-col gap-[45px] md:gap-[72px] md:mt-[-120px] ">
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
         <div className="flex-grow flex items-center justify-center"> {/* Added */}
          <Image
            src="/newHero.svg" 
            alt="Hero"
            width={1078}
            height={600}
            className="z-10 hidden md:flex"
          />

          {/* Mobile Image */}
          <div className="w-full flex justify-end md:hidden">
            <Image
              src="/newHero.svg" 
              alt="Hero Mobile"
              width={345}
              height={303}
              className="z-10 flex md:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callback;
