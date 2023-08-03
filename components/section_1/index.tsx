import Image from "next/image";
import React from "react";

const SectionOne = () => {
  return (
    <div className="sectionOne-container relative">
      <Image
        src="/save-box.svg"
        alt="save"
        height="323"
        width="326"
        className="md:hidden"
      />
      <Image
        src="/deliver-box.svg"
        alt="deliver"
        height="323"
        width="326"
        className="md:hidden"
      />
      <Image
        src="/beat-box.svg"
        alt="beat"
        height="323"
        width="326"
        className="md:hidden"
      />

      <Image
        src="/sec-one-box.svg"
        alt="sec-one-box"
        height="417"
        width="1188"
        className="hidden md:inline-flex"
      />

      <Image
        src="/sec-one-group.svg"
        alt="sec-one-group"
        height="169"
        width="160"
        className="hidden md:inline-flex absolute top-[16px] right-[27px] -z-10"
      />
    </div>
  );
};

export default SectionOne;
