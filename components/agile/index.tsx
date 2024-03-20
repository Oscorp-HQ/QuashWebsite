import Image from "next/image";
import React from "react";

const Agile = () => {
  return (
    <section>
      <div className="h-full w-full overflow-hidden relative flex  flex-col justify-center items-center">
        <div className="relative w-full flex justify-center items-center flex-col overflow-hidden">
          <div className="grad-resolution-watson w-[192px] md:h-[290px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
          <div className="w-full h-[93px] md:h-[132px]  absolute top-0 bg-black"></div>
          <div className="absolute top-[93px]  md:top-[132px]  flex flex-col justify-center items-center gap-12 md:gap-[70px]">
            <div className="resolution-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
            <h3 className="resolution-gradient-text text-[32px] md:text-[40px] lg:text-[60px] md:font-[600] leading-normal w-[338px] md:w-[1082px]  text-center">
            Agile, Mobile-First Development
            </h3>
          </div>
          <p className="text-center text text-[16px] md:text-[24px] lg:text-[32px] text-white lg:w-[938px] md:w-[653px] w-[307px]">
  Double your development agility with Quash&apos;s mobile-first approach. Deliver low-risk, high-quality mobile apps faster, and boost team productivity for standout performance.
</p>

        </div>
      <div >
          <Image
            src="/agile-illustration-mob.svg"
            alt="Illustration of agile development process"
            className="w-full pt-[32px] md:hidden"
            width={1400}
          height={268}
          />
        </div>
      <div className="agile-image-container hidden md:block">
        <Image
          src="/agile-illustration.svg"
          alt="Illustration of agile development process"
          className="w-full"
          width={1400}
          height={268}
        />
      </div>
      </div>
    </section>
  );
};

export default Agile;
