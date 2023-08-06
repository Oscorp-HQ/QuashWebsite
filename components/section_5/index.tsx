import Image from "next/image";
import React from "react";

const SectionFive = ({ setFormOpen }: any) => {
  return (
    <div className="section-five-container md:w-[1440px]">
      <Image
        width="60"
        height="60"
        alt="logo"
        src="group-100.svg"
        className="md:mb-[40px] md:hidden"
      />
      <Image
        width="100"
        height="100"
        alt="logo"
        src="group-100.svg"
        className="md:mb-[40px] hidden md:inline-flex"
      />
      <div className="flex flex-col gap-3 md:mb-[30px]">
        <p className="header">Move to quick and easy testing </p>
        <p className="text-[#418A30]">with quash today</p>
      </div>
      <Image
        src="/request-button-mob.svg"
        alt="request"
        height="49"
        width="140"
        className="hover:cursor-pointer md:hidden"
        onClick={() => {
          setFormOpen(true);
        }}
      />
      <Image
        src="/request-button-mob.svg"
        alt="request"
        height="89"
        width="252"
        className="hover:cursor-pointer hidden md:inline-flex"
        onClick={() => {
          setFormOpen(true);
        }}
      />
    </div>
  );
};

export default SectionFive;
