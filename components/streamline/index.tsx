import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const streamlineContent = [
  {
    title: "Accelerated market delivery",
    desc: "Quash empowers your team to accelerate feature releases, bringing innovations to market swiftly. Our tool instills confidence for rapid and frequent updates.",
    Image: "accelerated-market-delivery.svg"    ,
    width: 170,
    height:170 ,
  },
  {
    title: "AI powered Bug resolution",
    desc: "Our tools not only pinpoint issues but also propose optimal solutions, streamlining your development process and enhancing code reliability.",
    Image: "ai-powered-bug-resolution.svg",
    width: 680,
    height:171 ,
  },
  {
    title: "Prerelease Testing assurance",
    desc: "Ensure every release is up to your high standards. Testing becomes a seamless part of your workflow, guaranteeing consistent quality.",
    Image: "pre-release.svg",
    width: 270 ,
    height: 170,
  },
  {
    title: "Detail-oriented success",
    desc: "We know that the little things make a big difference. Quash helps you perfect those small, crucial details that define the quality of your software.",
    Image: "detail-oriented-success.svg",
    width: 142,
    height:123 ,
  },
  {
    title: "Scalable Performance",
    desc: "As your mobile teams grow, Quash supports you with robust performance and stability tools that adapt to your team's expanding needs.",
    Image: "scalable-performance.svg",
    width: 132,
    height: 135,
  },
  {
    title: "Developer-centric Design",
    desc: "Quash is crafted with developers in mind, enhancing the coding experience with intuitive tools that understand and adapt to your needs.",
    Image: "developer-centric-design.svg",
    width: 270,
    height: 170,
  },
];

const streamlineContentmob = [
  {src:"accelerated-market-delivery-card.svg",label:"accelerated-market-delivery-card"},
  {src:"ai-powered-bug-resolution-card.svg",label:"ai-powered-bug-resolution-card"},
  {src:"pre-release-testing-assurance-card.svg",label:"pre-release-testing-assurance-card"},
  {src:"detail-oriented-success-card.svg",label:"detail-oriented-success-card"},
  {src:"scalable-performance-card.svg",label:"scalable-performance-card"},
  {src:"developer-centric-design-card.svg",label:"developer-centric-design-card"},
]

const Streamline = () => {
  return (
    <div className="flex px-4 flex-col justify-center items-center pb-[40px]">
      <div className="relative w-full flex justify-center items-center flex-col overflow-hidden">
        <div className="grad-report h-[240px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
        <div className="w-full h-[93px] md:h-[132px]  absolute top-0 bg-black"></div>
        <div className="absolute top-[93px]  md:top-[132px]  flex flex-col justify-center items-center gap-12 md:gap-[70px]">
          <div className="report-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
          <span className="report-gradient-text text-[32px] lg:text-[56px] md:font-[600] leading-normal">
            Streamline your path to flawless app releases
          </span>
        </div>
        <div className="streamline-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {streamlineContent.map((content, index) => (
           <div key={index} className="text-white stream-line-card ">
              <h3>{content.title}</h3>
              <p>{content.desc}</p>
              <Image src={content.Image} width={content.width} height={content.height} alt="" />
            </div>
          ))}
        </div>
        <Carousel
          infiniteLoop
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          interval={3000}
          centerMode={true}
          className="flex md:hidden pt-10"
        >
          {streamlineContentmob.map((media, index) => (
            <div key={index}>
              <Image
                src={media.src}
                alt={media.label}
                width={304}
                height={272}
                className=""
              />
              <br />
              <br />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Streamline;
