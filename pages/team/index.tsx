import Journey from "@/components/journey";
import Image from "next/image";
import React from "react";

const mediaFounders = [
  {
    img: "/ayush.png",
    label: "Ayush",
  },
  {
    img: "/hamza.png",
    label: "Hamza",
  },
  {
    img: "/prakhar.png",
    label: "Prakhar",
  },
];

const mediaTeam = [
  {
    img: "/ashutosh.png",
    label: "Ashutosh",
  },
  {
    img: "/ira.png",
    label: "Ira",
  },
  {
    img: "/hemanth.png",
    label: "Hemanth",
  },
  {
    img: "/prem.png",
    label: "Prem",
  },
  {
    img: "/kirti.png",
    label: "Kirti",
  },
  {
    img: "/yash.png",
    label: "Yash",
  },
  {
    img: "/shivam.png",
    label: "Shivam",
  },
];

const TeamPage = () => {
  return (
    <div>
      <div className="relative h-full mt-[132px] md:mt-[242px] md:px-[170px] px-[18px] flex flex-col justify-center items-center text-white gap-[96px] md:gap-[176px] pb-[61px] md:pb-[115px]">
        <div className="absolute inset-0  bg-[url('/Gradient.svg')] md:h-[1154px] md:w-full md:flex hidden" />
        <div className="flex flex-col gap-4 md:gap-7 text-center  md:px-[70px]">
          <span className="text-[12px] md:text-[24px] text-[#ECECEE] font-[600]">
            OUR MISSION
          </span>
          <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent text-[24px] md:text-[66px] leading-normal text-[#ECECEE] font-[700]">
            Perfecting the experience on a device that sits in everyone’s
            pockets
          </span>
        </div>
        <div className="flex flex-col gap-6 text-start justify-center items-start px-3  md:gap-10 ">
          <span className="text-[12px] md:text-[24px] text-[#ECECEE] font-[600]">
            OUR STORY
          </span>
          <span className="text-[20px] md:text-[42px] leading-normal text-[#FFFFFF] font-[500]">
            Focussed to revolutionise Mobile Testing
          </span>
          <span className="text-[16px] md:text-[24px] leading-normal text-[#ECECEE] font-[300] md:font-[400]">
            We’re a team of dedicated individuals who want to bring a change in
            the way mobile testing functions. Learning from our own experiences
            at different enterprises we wanted eliminate the time consuming
            tasks while keeping the quality at our top priority.
          </span>
        </div>
        <div className="flex flex-col text-start gap-6 w-full ">
          <span className="text-[12px] md:text-[24px] text-[#ECECEE] font-[600] md:text-center w-full">
            FOUNDERS
          </span>
          <div className="grid grid-cols-3 gap-[22px]  md:gap-8 justify-between w-full ">
            {mediaFounders.map((media, index) => (
              <div
                className="flex flex-col gap-3 md:gap-6 items-start justify-start md:items-center text-start md:text-center"
                key={index}
              >
                <Image
                  src={media.img}
                  alt={media.label}
                  width={88}
                  height={98}
                  className="flex md:hidden rounded-[4px]"
                />
                <div className="h-[272px] w-[272px] overflow-hidden rounded-[4px] md:flex hidden">
                  <Image
                    src={media.img}
                    alt={media.label}
                    width={272}
                    height={272}
                    className="md:flex hidden rounded-[4px]"
                  />
                </div>

                <span className="text-[12px] md:text-[24px] text-[#ECECEE] font-[300]">
                  {media.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col text-start gap-6 w-full">
          <span className="text-[12px] md:text-[24px] text-[#ECECEE] font-[600] w-full md:text-center">
            TEAM
          </span>
          <div className="grid grid-cols-3 gap-y-6 md:gap-x-8 md:gap-y-12 justify-between ">
            {mediaTeam.map((media, index) => (
              <div
                className="flex flex-col gap-3 md:gap-6 items-start justify-start md:items-center text-start md:text-center"
                key={index}
              >
                <Image
                  src={media.img}
                  alt={media.label}
                  width={88}
                  height={98}
                  className="flex md:hidden rounded-[4px]"
                />
                <div className="h-[272px] w-[272px] overflow-hidden rounded-[4px] md:flex hidden">
                  <Image
                    src={media.img}
                    alt={media.label}
                    height={272}
                    width={272}
                    className="md:flex hidden rounded-[4px]"
                  />
                </div>

                <span className="text-[12px] md:text-[24px] text-[#ECECEE] font-[300]">
                  {media.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Journey />
    </div>
  );
};

export default TeamPage;
