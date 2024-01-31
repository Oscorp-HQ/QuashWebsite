import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const reportingMedia = [
  { src: "/shake.svg", label: "shake", width: 400, height: 554 },
  { src: "/logs-new.svg", label: "logs", width: 400, height: 554 },
  { src: "/notes.svg", label: "notes", width: 400, height: 554 },
  { src: "/crash.svg", label: "crash", width: 620, height: 598 },
  { src: "/context.svg", label: "context", width: 620, height: 598 },
];
const reportingMediaMobile = [
  { src: "/shake-mob.svg", label: "shake", width: 400, height: 554 },
  { src: "/logs-new-mob.svg", label: "logs", width: 400, height: 554 },
  { src: "/notes-mob.svg", label: "notes", width: 400, height: 554 },
  { src: "/crash-mob.svg", label: "crash", width: 620, height: 598 },
  { src: "/context-mob.svg", label: "context", width: 620, height: 598 },
];

const Capture = () => {
  const firstRowImages = reportingMedia.slice(0, 3);
  const secondRowImages = reportingMedia.slice(3);
  return (
    <>
      <div className="flex px-4 pb-16 md:pb-0 flex-col justify-center items-center relative">
        <div className="grad-collaboration h-[192px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
        <div className="w-full h-[93px] md:h-[132px] absolute top-0 bg-black"></div>
        <div className="absolute top-[93px] md:top-[132px] flex flex-col justify-center items-center gap-12 md:gap-[66px] z-10">
          <div className="collaboration-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
          <span className="collaboration-gradient-text text-[32px] lg:text-[56px] md:font-[600] leading-normal  text-center">
            Capture the complete picture <br /> with technical detailing in
            every report.
          </span>
        </div>
      </div>

      <div className="capture-image-container pt-[50px] relative">
        <div className="flex flex-col justify-center items-center">
          <div className="hidden justify-center items-center gap-10 md:flex flex-wrap mb-[40px]">
            {/* Render images for the first row */}
            {firstRowImages.map((media, index) => (
              <Image
                key={index}
                src={media.src}
                alt={media.label}
                width={media.width}
                height={media.height}
              />
            ))}
          </div>
          <div className="hidden justify-center items-center gap-10 md:flex flex-wrap mb-[40px]">
            {/* Render images for the second row */}
            {secondRowImages.map((media, index) => (
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
        <Carousel
          // autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          interval={3000}
          centerMode={true}
          className="flex md:hidden pt-10"
        >
          {reportingMediaMobile.map((media, index) => (
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
        <div className="capture-learn-more-button-container">
          <a
            href="https://quash.notion.site/quash/Quash-SDK-Developer-Documentation-534ebd4c995040b2ae536dd139609d47"
            className="capture-learn-more-button"
          >
            Learn more
          </a>
        </div>
      </div>
    </>
  );
};

export default Capture;
