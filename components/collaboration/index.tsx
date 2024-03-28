import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Collaboration = () => {
  return (
    <section
     className="flex px-4 pb-16 md:pb-12  flex-col justify-center items-center">
      <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}  className="relative w-full flex justify-center items-center flex-col overflow-hidden">
        <div className="grad-collaboration h-[150px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
        <div className="w-full h-[48px] md:h-[200px] absolute top-0 bg-black"></div>
        <div className="absolute top-[48px] md:top-[200px] flex flex-col justify-center items-center gap-12 md:gap-[116px]">
          <div className="collaboration-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
          <motion.h1
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}  className="collaboration-gradient-text text-[32px] md:text-[60px] md:font-[600] leadind-normal">
            Collaboration
          </motion.h1>
        </div>
      </motion.div>
      <motion.p
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}  className="text-[#ECECEE] text-[16px] font-[300] md:text-[24px] md:mt-5 md:font-[400] w-[236px] text-center leading-normal pb-20 md:pb-[170px] md:w-full">
        Manage all your testing workflows in a single place
      </motion.p>
      <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}  className="flex justify-center items-center md:pb-[248px]">
        <Image
          src="/track.svg"
          alt="track tickets"
          width={328}
          height={443}
          className="flex md:hidden"
        />
        <Image
          src="/track-desk.svg"
          alt="track tickets"
          width={1106}
          height={554}
          className="md:flex hidden"
        />
      </motion.div>
    </section>
  );
};

export default Collaboration;
