import Image from "next/image";
import React from "react";

const SectionSeven = () => {
  return (
    <div className="h-[500px] md:h-[700px] w-full flex justify-center items-center relative">
      <Image
        width="168"
        height="176"
        alt="group-5"
        src="/group-5.svg"
        className="absolute top-0 left-0 -z-10 md:hidden"
      />
      <Image
        width="168"
        height="176"
        alt="group-6"
        src="/group-6.svg"
        className="absolute bottom-0 right-0 -z-10 md:hidden"
      />

      <div className="sec-seven-container">
        <div className="text mb-5 md:mb-[10px] md:flex flex-col">
          <div className="md:flex md:gap-3">
            <p>It takes</p>
            <p className="min text-[#418A30]">less than a minute</p>
            <p>to get started</p>
          </div>

          <p className="sdk mt-3">integrate SDK for iOS & Android</p>
        </div>
        {/* <div className="hidden md:inline-flex gap-5"></div> */}
        <Image
          width="220"
          height="100"
          alt="ios-droid"
          src="/ios-droid.svg"
          className="hidden md:inline-flex"
        />
        <div className="relative">
          <Image
            width="34"
            height="34"
            alt="copy-icon"
            src="/copy-icon.svg"
            className="
          absolute top-2 right-2 md:top-[18px] md:right-[18px]"
          />
          <div className="w-[300px] h-[150px] md:w-[900px] md:h-[194px] rounded-2xl md:rounded-3xl bg-[#262C3E] overflow-x-scroll md:flex md:item-center md:gap-[18px] md:pt-[40px] md:pr-[400px] md:pb-[30px] md:pl-[20px]">
            <div className="numbers hidden md:flex flex-col">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
            </div>
            <div className="code-divider hidden md:inline-block" />

            <div className="my-[28px] mx-[15px] md:my-0 md:mx-0 flex flex-col items-start w-[321px] md:w-auto">
              <p className="quick">{`Quash.start (`}</p>
              <div className="flex flex-col ml-[50px] md:gap-[6px]">
                <div className="flex">
                  <p className="key">{`withToken: `}</p>
                  <p className="value">“YOUR_APP_TOKEN_HERE”</p>
                </div>
                <div className="flex">
                  <p className="key">{`shouldCollectCrashLogs`}</p>
                  <p className="value">=true</p>
                </div>
                <div className="flex">
                  <p className="key">{`invocationType`}</p>
                  <p className="value">=Quash.TRIPLE_TAPS</p>
                </div>
              </div>
              <p className="quick">{`)`}</p>
            </div>
          </div>
        </div>
        <Image
          width="200"
          height="58"
          alt="copy-paste"
          src="/copy-paste.svg"
          className=" md:hidden"
        />
        <Image
          width="318"
          height="90"
          alt="copy-paste"
          src="/copy-paste.svg"
          className="hidden md:inline-flex"
        />
      </div>
    </div>
  );
};

export default SectionSeven;
