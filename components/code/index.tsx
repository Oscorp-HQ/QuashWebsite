import { ArrowRight } from "@/lib/icons";
import { fira } from "@/pages/_app";
import Link from "next/link";
import React, { useState } from "react";

const codeFira = fira;

const OS = [
  {
    label: "Android",
    value: "android",
  },
  {
    label: "iOS",
    value: "iOS",
  },
  {
    label: "Flutter",
    value: "flutter",
  },
];

const CodeSection = () => {
  const [isOs, setIsOs] = useState("android");

  return (
    <div className="relative px-4 py-[96px] lg:px-[275px] md:py-[128px] flex flex-col gap-8 md:gap-0 justify-center items-center text-center">
      <div className="absolute inset-0  bg-[url('/Gradient.svg')] w-full -z-10 hidden md:flex bg-no-repeat" />

      <span className="w-[282px] text-[18px] md:text-[42px] md:w-full text-[#FFFFFF] font-[500] leading-normal">
        Integrate Quash SDK in less than a minute
      </span>
      <div className="relative w-full md:mt-[72px]">
        <div className="w-full  rounded-2xl md:rounded-3xl bg-[#0D0D0D]">
          <div className="px-4 md:px-8 pt-[6px] md:pt-[10px] gap-3 md:gap-4 flex justify-start items-center border-b border-[#4A4B50] text-[12px] md:text-[24px] font-[400] md:font-[600] hover:cursor-pointer">
            {OS.map((item, index) => (
              <span
                key={index}
                className={`${
                  isOs === item.value
                    ? "text-[#ECECEE] border-b"
                    : "text-[#ECECEE99]"
                }   border-[rgba(255, 255, 255, 0.06)] mb-[-0.2px]`}
              >
                {item.label}
                {index > 0 && "(Coming Soon)"}
              </span>
            ))}
          </div>
          <div
            style={codeFira.style}
            className="w-full text-[10px] leading-[0.05] md:text-[24px] md:leading-[0.116] overflow-x-scroll md:overflow-auto flex md:item-center gap-[12px] p-4 md:px-8 md:pt-10 md:pb-8"
          >
            <div className="numbers md:gap-[3px] text-[10px] leading-[0.05] md:text-[24px] md:leading-[0.129] flex flex-col ">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
            </div>
            <div className="border-l border-[#4A4B50]" />
            {isOs === "android" ? (
              <div className=" md:my-0 md:mx-0 flex flex-col items-start w-[370px] md:w-auto ">
                <p className="quick md:quick-desk">{`Quash.begin (`}</p>
                <div className="flex flex-col ml-[50px] md:gap-[6px]">
                  <div className="flex">
                    <p className="key md:key-desk">{`withToken: `}</p>
                    <p className="value md:value-desk">“YOUR_APP_TOKEN_HERE”</p>
                  </div>
                  <div className="flex">
                    <p className="key md:key-desk">{`shouldCollectCrashLogs`}</p>
                    <p className="value md:value-desk">=true</p>
                  </div>
                  <div className="flex">
                    <p className="key md:key-desk">{`triggerType`}</p>
                    <p className="value md:value-desk">{`=[Quash.FAB, Quash.SHAKE]`}</p>
                  </div>
                </div>
                <p className="quick md:quick-desk">{`)`}</p>
              </div>
            ) : isOs === "ios" ? (
              <div
                className={` flex flex-col items-start ${
                  !isOs ? "w-[321px]" : "w-[365px]"
                } md:w-auto`}
              >
                <p className="quick md:quick-desk">{`Quash.begin (`}</p>
                <div className="flex flex-col ml-[50px] md:gap-[6px]">
                  <div className="flex">
                    <p className="key md:key-desk">{`withKey: `}</p>
                    <p className="value md:value-desk">“YOUR_APP_TOKEN_HERE”</p>
                  </div>
                  <div className="flex">
                    <p className="key md:key-desk">{`shouldCollectCrashLogs`}</p>
                    <p className="value md:value-desk">:true</p>
                  </div>
                  <div className="flex">
                    <p className="key md:key-desk">{`triggerType`}</p>
                    <p className="value md:value-desk">{`:[.floatingAction, .shake]`}</p>
                  </div>
                </div>
                <p className="quick md:quick-desk">{`)`}</p>
              </div>
            ) : (
              isOs === "flutter" && (
                <div
                  className={` flex flex-col items-start ${
                    !isOs ? "w-[321px]" : "w-[365px]"
                  } md:w-auto`}
                >
                  <p className="quick md:quick-desk">{`Quash.begin (`}</p>
                  <div className="flex flex-col ml-[50px] md:gap-[6px]">
                    <div className="flex">
                      <p className="key md:key-desk">{`withKey: `}</p>
                      <p className="value md:value-desk">
                        “YOUR_APP_TOKEN_HERE”
                      </p>
                    </div>
                    <div className="flex">
                      <p className="key md:key-desk">{`shouldCollectCrashLogs`}</p>
                      <p className="value md:value-desk">:true</p>
                    </div>
                    <div className="flex">
                      <p className="key md:key-desk">{`triggerType`}</p>
                      <p className="value md:value-desk">{`:[.floatingAction, .shake]`}</p>
                    </div>
                  </div>
                  <p className="quick md:quick-desk">{`)`}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Link
      href="https://quash.notion.site/Quash-SDK-Developer-Documentation-534ebd4c995040b2ae536dd139609d47?pvs=4"
      className="underline text-[16px] md:text-[24px] md:font-[400] text-center font-[300] text-white flex gap-1 md:gap-2 justify-center items-center md:mt-[40px]"
      title="Explore Quash SDK Developer Documentation"
    >
      <span>Learn more</span>
      <ArrowRight
        className="h-6 w-6 pt-1 md:pt-2 md:h-8 md:w-8"
        color="#ffffff"
      />
    </Link>
    </div>
  );
};

export default CodeSection;
