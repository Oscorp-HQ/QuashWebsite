import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const reportingMedia = [
  { src: "/shake.svg", label: "shake", width: 400, height: 554 },
  { src: "/logs.svg", label: "logs", width: 400, height: 554 },
  { src: "/notes.svg", label: "notes", width: 400, height: 554 },
  { src: "/crash.svg", label: "crash", width: 620, height: 598 },
  { src: "/context.svg", label: "context", width: 620, height: 598 },
];

const Capture = () => {
  return (
    <>
      <div className="flex px-4 pb-16 md:pb-0 flex-col justify-center items-center relative">
        <div className="grad-collaboration h-[192px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
        <div className="w-full h-[48px] md:h-[200px] absolute top-0 bg-black"></div>
        <div className="absolute top-[48px] md:top-[200px] flex flex-col justify-center items-center gap-12 md:gap-[116px] z-10">
          <div className="collaboration-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
          <span className="collaboration-gradient-text text-[32px] md:text-[60px] md:font-[600] leading-normal  text-center">
            Capture the complete picture <br /> with technical detailing in
            every report.
          </span>
        </div>
      </div>
      <div className="capture-image-container pt-[180px] relative z-20">
        <div className="flex flex-col justify-center items-center ">
          <div className="hidden justify-center items-center gap-10 md:flex flex-wrap mb-[40px]">
            {reportingMedia.map((media, index) => (
              <Image
                key={index}
                src={media.src}
                alt={media.label}
                width={media.width}
                height={media.height}
              />
            ))}
          </div>
        </div>
        {/* <div className="hidden justify-center items-center gap-10  md:flex flex-wrap z-10">
          <Image
            src="/crash.svg"
            alt="crash"
            width={620}
            height={598}
            className=""
          />
          <Image
            src="/context.svg"
            alt="context"
            width={620}
            height={598}
            className=""
          />
        </div> */}
        <Carousel
          // autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          interval={3000}
          centerMode={true}
          className="flex md:hidden"
        >
          {reportingMedia.map((media, index) => (
            <>
              <Image
                key={index}
                src={media.src}
                alt={media.label}
                width={304}
                height={272}
                className=""
              />
              <br />
              <br />
            </>
          ))}
        </Carousel>
        <div className="capture-learn-more-button-container">
          <button className="capture-learn-more-button">Learn more</button>
        </div>
      </div>
    </>
  );
};

export default Capture;
