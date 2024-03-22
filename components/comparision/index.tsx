import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Comparision = () => {
  return (
    <section className="w-full px-[121px] md:flex hidden pt-[116px] pb-[48px]">
      <motion.div
      initial={{ opacity: 0.0, y:  40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{

        duration: 0.6,
        ease: "easeInOut",
      }} className="flex flex-col w-full gap-12 text-center justify-center items-center">
        <h3 className="text-[42px] text-[#FFFFFF] font-[500] leading-normal">
          Enable your team to ship bug-free releases faster
        </h3>
        <Image
          src="/comparision.svg"
          alt="comparision"
          width={889}
          height={100}
          className="hidden md:flex bg-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Comparision;
