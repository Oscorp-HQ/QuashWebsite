import Image from "next/image";
import React from "react";
// import { Carousel } from "react-responsive-carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const streamlineContent = [
  {
    title: "Accelerated market delivery",
    desc: "Quash empowers your team to accelerate feature releases, bringing innovations to market swiftly. Our tool instills confidence for rapid and frequent updates.",
    Image: "Accelerated-market-delivery-image.svg",
    width: 170,
    height: 170,
  },
  {
    title: "AI powered Bug resolution",
    desc: "Our tools not only pinpoint issues but also propose optimal solutions, streamlining your development process and enhancing code reliability.",
    Image: "ai-powered-bug-resolution.svg",
    width: 680,
    height: 171,
  },
  {
    title: "Prerelease Testing assurance",
    desc: "Ensure every release is up to your high standards. Testing becomes a seamless part of your workflow, guaranteeing consistent quality.",
    Image: "Pre-release-Testing-assurance-streamline.svg",
    width: 270,
    height: 170,
  },
  {
    title: "Detail-oriented success",
    desc: "We know that the little things make a big difference. Quash helps you perfect those small, crucial details that define the quality of your software.",
    Image: "detail-oriented-success.svg",
    width: 142,
    height: 123,
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
  {
    src: "accelerated-market-delivery-card.svg",
    label: "accelerated market delivery card",
  },
  {
    src: "ai-powered-bug-resolution-card.svg",
    label: "ai powered bug resolution card",
  },
  {
    src: "pre-release-testing-assurance-card.svg",
    label: "pre release testing assurance card",
  },
  {
    src: "detail-oriented-success-card.svg",
    label: "detail oriented success card",
  },
  { src: "scalable-performance-card.svg", label: "scalable performance card" },
  {
    src: "developer-centric-design-card.svg",
    label: "developer centric design card",
  },
];

const Streamline = () => {
  return (
    <section className="flex px-4 flex-col justify-center items-center pb-[40px]">
      <div className="relative w-full flex justify-center items-center flex-col overflow-hidden">
        <div className="grad-report h-[240px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="w-full h-[93px] md:h-[132px]  absolute top-0 bg-black"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="absolute top-[93px]  md:top-[132px]  flex flex-col justify-center items-center gap-12 md:gap-[70px]"
        >
          <div className="report-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
          <h3 className="report-gradient-text text-[32px] lg:text-[56px] md:font-[600] leading-normal">
            Streamline your path to flawless app releases
          </h3>
        </motion.div>
        <div className="streamline-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {streamlineContent.map((content, index) => (
            <motion.div
            initial={{ opacity: 0.0, x: index === 0 ? -40 : 0 ||  index === 2 ? 40 : 0 || index === 3 ? -40 : 0 ||  index === 5 ? 40 : 0   }}
          whileInView={{ opacity: 1, x: 0 ,y:0}}
            transition={{
                duration: 0.6,
                ease: "easeInOut",
            }}
            key={index}
            className="text-white stream-line-card"
        >
        
              <h3>{content.title}</h3>
              <p>{content.desc}</p>
              <Image
                src={content.Image}
                width={content.width}
                height={content.height}
                alt={`${content.title} illustration`}
              />
            </motion.div>
          ))}
        </div>
        <div className="relative pt-[20px] pb-[18px] ">
          {/* <Carousel
            infiniteLoop
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            interval={3000}
            centerMode={true}
            className="flex md:hidden pt-[110px] pb-[96px] h-full"
          >
            {streamlineContentmob.map((media, index) => (
              <div key={index} className="h-[272px] w-[374px]">
                <Image
                  key={index}
                  src={media.src}
                  alt={media.label}
                  // width={272}
                  // height={374}
                  objectFit=""
                  layout="fill"
                />
              </div>
            ))}
          </Carousel> */}
        </div>
      </div>
      <Carousel className="w-full max-w-xs md:hidden">
        <CarouselContent>
          {streamlineContentmob.map((media, index) => (
            <CarouselItem key={index} className="w-full justify-center flex">
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

export default Streamline;
