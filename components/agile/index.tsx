import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// const resoltionMedia = [
//   {src:"context-mob.svg",
//    label:"context-mob" }, {src:"crash-mob.svg",
//   label:"crash-mob"},
//   {src:"ai-mob.svg",
//   label:"ai-mob"}];

const reportingMedia = [
  { src: "/shake.svg", label: "shake" },
  { src: "/logs.svg", label: "logs" },
  { src: "/notes.svg", label: "notes" },
];

const Agile = () => {
  return (
    <>
      <div className="flex px-4 pb-4 lg:pb-16 md:pb-0 flex-col justify-center items-center relative">
        <div className="grad-resolution h-[192px] w-[192px] md:h-[340px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
        <div className="w-full h-[93px] md:h-[132px] absolute top-0 bg-black"></div>
        <div className="absolute top-[93px] md:top-[132px] flex flex-col justify-center items-center gap-12 md:gap-[66px] z-10">
          <div className="resolution-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
          <span className="resolution-gradient-text text-[32px] lg:text-[56px] md:font-[600] leading-normal  text-center">
          Agile, Mobile-First Development
          </span>
        </div>
        <div className="agile-desc-text ">
          Double your development agility with Quash's mobile-first approach.{" "}
          <br /> Deliver low-risk, high-quality mobile apps faster, and boost
          team productivity for standout performance.
        </div>
      </div>
      <div className="agile-image-container">
        <img
          src="agile-illustration.svg"
          alt=""
          className="agile-image w-full"
        />
      </div>
    </>
  );
};

export default Agile;
