import React from "react";

const sectionData = [
  {
    title: "Swift Onboarding",
    sub: "With a quick SDK implementation, get Quash running in no time.",
  },
  {
    title: "100% Secure",
    sub: "Your data resides in a secure dedicated server, so you can stay stress-free.",
  },
  {
    title: "Effortless Integrations",
    sub: "Quash gets integrated with your existing systems like Jira easily.",
  },
];

const SectionFour = () => {
  return (
    <div className="section-four-container">
      <div className="flex flex-col items-start gap-[50px] md:w-[1188px] md:flex-row md:justify-between">
        <div className="headers">
          <p className="text-[#418A30]">Walls secured,</p>
          <p>Gates wide open</p>
        </div>
        <div className="flex flex-col items-start gap-10 md:gap-16">
          {sectionData &&
            sectionData.map((section, index) => (
              <div className="flex flex-col gap-3" key={index}>
                <div className="title">{section.title}</div>
                <div className="sub md:w-[480px]">{section.sub}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
