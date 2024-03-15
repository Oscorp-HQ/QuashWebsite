import Image from "next/image";
import React from "react";

const Comparision = () => {
  return (
    <section className="w-full px-[121px] md:flex hidden pt-[116px] pb-[48px]">
      <div className="flex flex-col w-full gap-12 text-center justify-center items-center">
        <h3 className="text-[42px] text-[#FFFFFF] font-[500] leading-normal">
          Enable your team to ship bug-free releases faster
        </h3>
        <Image
          src="/comparision.svg"
          alt="comparision"
          width={889}
          height={100}
          className="hidden md:flex bg-transparent"
        />
      </div>
    </section>
  );
};

export default Comparision;
