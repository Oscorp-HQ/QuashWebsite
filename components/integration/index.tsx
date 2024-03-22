import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Integration = () => {
  return (
    <section className="integration-component px-4 pt-[96px] md:py-[114px] pb-[80px] md:pr-[85px] md:pl-[120px] gap-12 flex flex-col md:grid md:grid-cols-2 md:gap-[26px] justify-center items-center md:items-start">
      <motion.div
      initial={{ opacity: 0.0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{

        duration: 0.6,
        ease: "easeInOut",
      }} className="flex text-start gap-6 md:gap-10 flex-col px-3  md:pr-2 md:pl-0 md:mt-[65px]">
        <h3 className="text-[24px] md:text-[42px] text-[#FFFFFF] font-[500]">
          Quash syncs with your <br /> workflow management tools
        </h3>
        <p className="text-[16px] md:text-[24px] text-[#ECECEE] font-[300] md:font-[400] ">
          Leverage the power of Integrations to optimise <br /> your dev cycles{" "}
        </p>
      </motion.div>
      <motion.div
      initial={{ opacity: 0.0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{

        duration: 0.6,
        ease: "easeInOut",
      }}  className="flex-grow md:flex hidden">
        <Image
          src="/integration-mob.svg"
          alt="Workflow management tool integration"
          width={694}
          height={673}
        />
      </motion.div>
      <motion.div
      initial={{ opacity: 0.0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{

        duration: 0.6,
        ease: "easeInOut",
      }} className="flex md:hidden">
        <Image
          src="/integration-mob.svg"
          alt="Workflow management tool integration"
          width={328}
          height={318}
        />
      </motion.div>
    </section>
  );
};

export default Integration;
