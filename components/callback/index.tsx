import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Callback = () => {
  const router = useRouter();

  return (
    <section className=" relative flex px-5 pt-[96px] md:pt-[20px] flex-col justify-center items-center">
      <div className="absolute top-0 md:relative  w-full justify-center items-center flex-col overflow-hidden flex">
        <div className="grad-callback h-[192px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%] "></div>
        <div className="-z-20 w-full h-[48px] md:h-[200px] absolute top-0 bg-black"></div>
        <div className="absolute top-[48px] md:top-[200px] flex flex-col justify-center items-center gap-12 md:gap-[116px]">
          <div className="callback-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px] z-10" />
        </div>
      </div>
      <div className=" w-full text-center items-center flex flex-col gap-[45px] md:gap-[72px] md:mt-[-120px] ">
        <div className="flex flex-col gap-5 md:gap-[28px] text-center items-center md:max-w-[987px]">
          <h3 className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent text-[32px] font-[600] md:text-[60px] text-[#ECECEE] w-full text-center leading-normal">
            Win the never ending battle of Quality vs Speed
          </h3>

          <p className="text-[16px] w-[252px] font-[300] md:text-[24px] text-[#ECECEE] md:font-[400] md:w-full">
            Accelerate your Mobile Testing Workflow with Quash
          </p>
        </div>
        <Link href="https://optimus.quashbugs.com/signup" aria-label="Get Quash Started for Free" legacyBehavior>
          <a className="mt-6 inline-block text-[#000] bg-[#FFF] py-3 px-4 rounded-[100px] font-semibold text-[16px] md:text-[24px] hover:bg-[#F7F7F7] transition-colors">
            Get Started for Free
          </a>
        </Link>
        <div className="flex-grow flex items-center justify-center">
          <Image
            src="/Hero-cropped.svg"
            alt="Hero"
            width={1078}
            height={600}
            className="z-10 hidden md:flex"
          />
          <div className="w-full flex justify-end md:hidden">
            <Image
              src="/Hero-cropped.svg"
              alt="Hero Mobile"
              width={345}
              height={303}
              className="z-10 flex md:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Callback;
