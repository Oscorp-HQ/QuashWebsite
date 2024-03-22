import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

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
    <section>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="flex px-4 flex-col justify-center items-center"
      >
        <div className="relative w-full flex justify-center items-center flex-col overflow-hidden">
          <div className="grad-collaboration h-[350px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
          <div className="w-full h-[93px] md:h-[132px]  absolute top-0 bg-black"></div>
          <div className="absolute top-[93px]  md:top-[132px]  flex flex-col justify-center items-center gap-12 md:gap-[70px]">
            <div className="collaboration-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
            <h3 className="collaboration-gradient-text text-[32px] lg:text-[56px] md:font-[600] leading-normal  text-center">
              Capture the complete picture <br /> with technical detailing in
              every report.
            </h3>
          </div>
        </div>

        <div className="capture-image-container relative">
          <div className="flex flex-col justify-center items-center">
            <div className="hidden justify-center items-center gap-10 md:flex flex-wrap mb-[40px]">
              {firstRowImages.map((media, index) => (
                <motion.div
                key={index}
                  initial={{
                    opacity: 0.0,
                    x: index === 0 ? -40 : 0 || index === 2 ? 40 : 0,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    key={index}
                    src={media.src}
                    alt={media.label}
                    width={media.width}
                    height={media.height}
                  />
                </motion.div>
              ))}
            </div>
            <div className="hidden justify-center items-center gap-10 md:flex flex-wrap mb-[40px]">
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
          {/* <Carousel
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
                  alt={`Detailed view of ${media.label} feature`}
                  width={304}
                  height={272}
                  className=""
                />
                <br />
                <br />
              </div>
            ))}
          </Carousel> */}
          <Carousel className="w-full max-w-xs md:hidden">
            <CarouselContent>
              {reportingMediaMobile.map((media, index) => (
                <CarouselItem
                  key={index}
                  className="w-full justify-center flex"
                >
                  {/* <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div> */}
                  {/* <div key={index}> */}
                  <Image
                    src={media.src}
                    alt={`Detailed view of ${media.label} feature`}
                    width={272}
                    height={348}
                    className=""
                  />
                  {/* </div> */}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 border-white" />
            <CarouselNext className="-right-4 border-white" />
          </Carousel>
          <div className="capture-learn-more-button-container">
            <Link
              href="/product"
              className="capture-learn-more-button"
              aria-label="Learn more about Quash Product Features."
              aria-description="Learn more about Quash Product Features."
            >
              Learn more about Quash
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Capture;
