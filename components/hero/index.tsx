import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="relative flex flex-col md:gap-5 items-center">
      <div className="absolute left-0 right-0 md:top-[200px] bottom-0 w-full bg-[url('/Gradient.svg')]" />
      <div className=" pt-[132px] px-[18px] pb-[45px] md:pt-[260px] md:px-[242px] md:pb-[109px] w-full text-center items-center flex flex-col gap-[45px] md:gap-[72px]">
        <div className="flex flex-col gap-5 md:gap-[28px] text-center items-center">
          {/* <Image
            src="/hero-image.svg"
            alt="hero-image"
            width={1028}
            height={166}
            className="hidden md:flex"
          /> */}
          <span className="bg-gradient-to-b px-4 from-white to-gray-500 bg-clip-text text-transparent hidden md:flex  text-[32px] font-[600] md:text-[66px] text-[#ECECEE] md:font-[600] w-full text-center leading-normal">
            Mobile Testing should not be slow and tangled
          </span>
          <div>
            <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent  text-[32px] font-[600] md:text-[24px] text-[#ECECEE] md:font-[600] w-full text-center leading-normal md:hidden">
              Mobile Testing
              <br />
              should not be slow
              <br />
              and tangled
            </span>
          </div>

          <span className="text-[16px] w-[252px] font-[300] md:text-[24px] text-[#ECECEE] md:font-[400] md:w-full">
            We’re on a mission to make it smooth and simple
          </span>
        </div>
        <Button
          className="text-[#000000] text-[16px] md:text-[24px] font-[600] bg-[#FFFFFF] px-4 py-3 md:py-[14px] rounded-[100px] h-[58px] flex z-10 leading-5 md:leading-normal hover:bg-[#FFFFFFCC]"
          variant="outline"
          onClick={() => {
            router.push("https://optimus.quashbugs.com/signup");
          }}
        >
          Get Started for Free
        </Button>
      </div>
      <Image
        src="/hero.svg"
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
