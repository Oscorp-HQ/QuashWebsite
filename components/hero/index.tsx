import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[928px] w-full relative overflow-x-hidden">
      <div className="absolute top-[274px] left-[126px] w-[636px] h-[402px] flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <span className="text-7xl font-['Roboto_Serif'] font-semibold italic text-[#418A30]">
              find bugs faster
            </span>
            <span className="text-7xl font-['Roboto_Serif'] font-semibold italic">
              fix them smarter
            </span>
          </div>
          <p
            className="mt-6 font-['Roboto_Serif'] font-thin text-2xl"
            style={{
              fontSize: "24px",
              lineHeight: "100%",
            }}
          >
            Cut down your development costs by 30% with quick and easy bug
            reporting and resolution assistance
          </p>
        </div>

        {/* <Image src="/Copy.svg" alt="request" height="264" width="636" /> */}

        <Image
          src="/request.svg"
          alt="request"
          height="60"
          width="170"
          className="hover:cursor-pointer"
        />
      </div>
      <div className="absolute right-[-364px] top-[130px] -z-10">
        <Image
          src="/Illustration.svg"
          alt="illustration"
          height="773"
          width="1145"
        />
      </div>
    </div>
  );
};

export default Hero;
