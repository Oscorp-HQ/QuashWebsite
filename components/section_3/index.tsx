import Image from "next/image";
import React from "react";

const sectionArray = [
  {
    head: "Report bugs in a shake",
    descr:
      "Automatically create detailed bug tickets directly from your staging app",
    src: "/bugs-shake.svg",
  },
  {
    head: "Manage your tickets seamlessly",
    descr:
      "Track, prioritise, and assign your tickets through customisable dashboards",
    src: "/manage-tickets.svg",
  },
  {
    head: "Resolve bugs faster",
    descr:
      "Get assisted information and root cause for each bug to resolve it faster",
    src: "/resolve-bugs.svg",
  },
  {
    head: "Get an overview",
    descr: "Keep a watch over testing metrics of teams and projects",
    src: "/overview.svg",
  },
];

const SectionThree = () => {
  return (
    <div className="sec-three-container">
      {sectionArray &&
        sectionArray.map((section, index) => (
          <div
          key={index}
            className={`flex flex-col gap-[24px] w-[237px] items-center 
            ${
              index % 2 !== 0 ? "md:flex-row" : "md:flex-row-reverse"
            } md:gap-12 md:justify-center md:w-[1188px]`}
          >
            <div className={`flex flex-col gap-3 md:items-start`}>
              <p className="title">{section.head}</p>
              <p className="description md:w-[565px]">{section.descr}</p>
            </div>
            <Image
              width="170"
              height="170"
              alt="bugs-shake"
              src={section.src}
              className="md:hidden"
            />
            <Image
              width="424"
              height="424"
              alt="bugs-shake"
              src={section.src}
              className="hidden md:inline-block"
            />
          </div>
        ))}
    </div>
  );
};

export default SectionThree;
