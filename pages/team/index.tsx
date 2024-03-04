import Journey from "@/components/journey";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const mediaFounders = [
  {
    img: "/ayush.png",
    url: "https://www.linkedin.com/in/ayushshrivastavaa",
    label: "Ayush",
  },
  {
    img: "/hamza.png",
    url: "https://www.linkedin.com/in/ameerhamzzza",
    label: "Hamza",
  },
  {
    img: "/prakhar.png",
    url: "https://www.linkedin.com/in/prakharshakya/",
    label: "Prakhar",
  },
];

const mediaTeam = [
  {
    img: "/ashutosh.png",
    url: "https://www.linkedin.com/in/ashutosh-makwana-7028a5137",
    label: "Ashutosh",
  },
  {
    img: "/ira.png",
    url: "https://www.linkedin.com/in/iraakbar",
    label: "Ira",
  },
  {
    img: "/hemanth.png",
    url: "https://www.linkedin.com/in/hemanth-r-23a995175/",
    label: "Hemanth",
  },
  {
    img: "/prem.png",
    url: "https://www.linkedin.com/in/prem-patel-34316174",
    label: "Prem",
  },
  {
    img: "/kirti.png",
    url: "https://www.linkedin.com/in/kirti-v-32504a263",
    label: "Kirti",
  },
  {
    img: "/yash.png",
    url: "https://www.linkedin.com/in/yash-gugaliya-3b45a2153",
    label: "Yash",
  },
  {
    img: "/shivam.png",
    url: "https://www.linkedin.com/in/shivam-singh-1a9316282",
    label: "Shivam",
  },
];

const TeamPage = () => {
  const canonicalUrl = "https://quashbugs.com/team";
  return (
    <div>
       <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div className="overflow-hidden relative overflow-x-hidden h-full w-full">
        <div className="left-ellipse hidden md:flex absolute top-[25rem] -left-[10rem]" />
        <div className="left-sphere hidden md:flex absolute top-[40rem] -left-[2rem]" />
        <div className="right-ellipse hidden md:flex absolute top-[46rem] -right-[25rem]" />
        <div className="right-sphere hidden md:flex absolute top-[44rem] right-[17rem]" />
        <div className="relative h-full w-full mt-[132px] md:mt-[242px] md:px-[170px] px-[18px] flex flex-col justify-center items-center text-white gap-[96px] md:gap-[176px] pb-[61px] md:pb-[115px]">
          <div className="flex flex-col gap-4 md:gap-7 text-center  md:px-[70px]">
            <p className="text-[12px] md:text-[24px] text-[#ECECEE] font-[600]">
              OUR MISSION
            </p>
            <h1 className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent text-[24px] md:text-[66px] leading-normal text-[#ECECEE] font-[700]">
              Perfecting the experience on a device that sits in everyone’s
              pockets
            </h1>
          </div>
          <div className="flex flex-col gap-6 text-start justify-center items-start px-3  md:gap-10 ">
            <span className="text-[12px] md:text-[24px] text-[#ECECEE] font-[600]">
              OUR STORY
            </span>
            <span className="text-[20px] md:text-[42px] leading-normal text-[#FFFFFF] font-[500]">
              Focussed to revolutionise Mobile Testing
            </span>
            <span className="text-[16px] md:text-[24px] leading-normal text-[#ECECEE] font-[300] md:font-[400]">
              We’re a team of dedicated individuals who want to bring a change
              in the way mobile testing functions. Learning from our own
              experiences at different enterprises we wanted eliminate the time
              consuming tasks while keeping the quality at our top priority.
            </span>
          </div>
          <div className="flex flex-col text-start gap-6 w-full ">
            <span className="text-[12px] md:text-[24px] text-[#ECECEE] font-[600] md:text-center w-full">
              FOUNDERS
            </span>
            <div className="grid grid-cols-3 gap-[22px]  md:gap-8 justify-between w-full z-10">
              {mediaFounders.map((media, index) => (
                <Link
                  className="flex flex-col gap-3 md:gap-6 items-start justify-start md:items-center text-start md:text-center"
                  key={index}
                  href={media.url}
                  target="_blank"
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
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col text-start gap-6 w-full">
            <span className="text-[12px] md:text-[24px] text-[#ECECEE] font-[600] w-full md:text-center">
              TEAM
            </span>
            <div className="grid grid-cols-3 gap-y-6 md:gap-x-8 md:gap-y-12 justify-between ">
              {mediaTeam.map((media, index) => (
                <Link
                  className="flex flex-col gap-3 md:gap-6 items-start justify-start md:items-center text-start md:text-center"
                  key={index}
                  href={media.url}
                  target="_blank"
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
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Journey />
      </div>
    </div>
  );
};

export default TeamPage;
