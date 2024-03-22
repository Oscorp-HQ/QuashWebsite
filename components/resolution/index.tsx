import Image from "next/image";
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

const resoltionMedia = [
  { src: "context-resolution-mob.svg", label: "context-mob" },
  { src: "crash-resolution-mob.svg", label: "crash-mob" },
  { src: "ai-resolution-mob.svg", label: "ai-mob" },
];

const Resolution = () => {
  return (
    <section className="flex px-4 pb-16 md:pb-12  flex-col justify-center items-center">
      <div className="relative w-full flex justify-center items-center flex-col overflow-hidden">
        <div className="grad-resolution-main h-[150px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
        <div className="w-full h-[48px] md:h-[200px] absolute top-0 bg-black"></div>
        <div className="absolute top-[48px] md:top-[200px] flex flex-col justify-center items-center gap-12 md:gap-[116px]">
          <div className="resolution-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
          <h1 className="resolution-gradient-text text-[32px] md:text-[60px] md:font-[600] leadind-normal">
            Resolution
          </h1>
        </div>
      </div>
      <p className="text-[#ECECEE] text-[16px] font-[300] md:text-[24px] md:mt-5 md:font-[400] w-[236px] text-center leading-normal pb-20 md:pb-[170px] md:w-full">
        Know exactly where the bug is - and how to fix it
      </p>
      <div className="hidden justify-center items-center gap-10  md:flex flex-wrap">
        <Image
          src="/context.svg"
          alt="context"
          width={620}
          height={598}
          className=""
        />
        <Image
          src="/crash.svg"
          alt="crash"
          width={620}
          height={598}
          className=""
        />
        <Image
          src="/ai-new.svg"
          alt="ai"
          width={1270}
          height={326}
          className=""
        />
      </div>
      {/* <Carousel
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={3000}
        centerMode={true}
        className="flex md:hidden"
      >
        {resoltionMedia.map((media, index) => (
          <>
            <Image
              key={index}
              src={media.src}
              alt={media.label}
              width={272}
              height={374}
              className=""
            />
            <br />
            <br />
          </>
        ))}
      </Carousel> */}
      <Carousel className="w-full max-w-xs md:hidden">
            <CarouselContent>
              {resoltionMedia.map((media, index) => (
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
      
    </section>
  );
};

export default Resolution;
