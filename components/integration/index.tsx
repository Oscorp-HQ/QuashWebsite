import Image from "next/image";
import React from "react";

const Integration = () => {
  return (
    <div className="px-4 pt-[96px] md:py-[114px] pb-[80px] md:pr-[85px] md:pl-[120px] gap-12 flex flex-col md:grid md:grid-cols-2 md:gap-[26px] justify-center items-center md:items-start">
      <div className="flex text-start gap-6 md:gap-10 flex-col px-3  md:pr-2 md:pl-0 md:mt-[65px]">
        <span className="text-[24px] md:text-[42px] text-[#FFFFFF] font-[500]">
          Quash syncs with your workflow management tools
        </span>
        <span className="text-[16px] md:text-[24px] text-[#ECECEE] font-[300] md:font-[400] ">
          Leverage the power of Integrations to optimise your dev cycles{" "}
        </span>
      </div>
      <Image
        src="/integration-mob.svg"
        alt="integration-mob"
        width={694}
        height={673}
        className="flex-grow md:flex hidden"
      />
      <Image
        src="/integration-mob.svg"
        alt="integration-mob"
        width={328}
        height={318}
        className="flex md:hidden"
      />
    </div>
  );
};

export default Integration;
