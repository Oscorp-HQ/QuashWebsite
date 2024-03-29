import Callback from "@/components/callback";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const solutions = [
  {
    img: "suggestion",
    title: "AI Powered Bug Resolution",
    description:
      "Quash suggests solutions, predicts bugs, and maintains clean code - letting developers focus on building.",
  },
  {
    img: "testcase",
    title: "Unit Test Case Generation",
    description:
      "Quash creates your test cases for you with zero effort, ensuring your users always get a delightful experience.",
  },
  {
    img: "testops",
    title: "Test Operations",
    description:
      "With Quash, you can manage your debugging versions, testing environments, and deployment pipelines from one extensive control center.",
  },
];

const Roadmap = () => {
  const router = useRouter();
  const canonicalUrl = "https://quashbugs.com/roadmap";
  return (
    <section>
      <Head>
        <title>Quash - Roadmap to the Future of Mobile Testing</title>
        <meta
          name="description"
          content="Explore the roadmap of Quash and how it aims to revolutionize mobile testing with AI-powered solutions, test case generation, and comprehensive test operations."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Quash - Roadmap to the Future of Mobile Testing" />
        <meta property="og:description" content="Explore the roadmap of Quash and how it aims to revolutionize mobile testing with AI-powered solutions, test case generation, and comprehensive test operations." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Quash_Website_Blurb.jpg" />
        <meta name="keywords" content="bug reporting in software testing, bug reporting tools, bug reporting tool, bug reporting, bug reporting template, jira bug reporting, bug reporting in Jira, iphone bug reporting, bug reporting tools in software testing, bug reporting software, Performance monitoring, bug report in software testing" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Roadmap - Quash",
            description:
              "Discover the future of mobile testing with Quash's innovative roadmap. Explore our commitment to AI-powered bug resolution, automated test case generation, and streamlined test operations.",
            url: canonicalUrl,
          })}
        </script>
      </Head>
      <div className=" relative flex flex-col items-center overflow-hidden">
        <div className="left-ellipse hidden md:flex absolute top-[25rem] -left-[10rem]" />
        <div className="left-sphere hidden md:flex absolute top-[40rem] -left-[2rem]" />
        <div className="right-ellipse hidden md:flex absolute top-[46rem] -right-[25rem]" />
        <div className="right-sphere hidden md:flex absolute top-[44rem] right-[17rem]" />
        <div className="roadmap pt-[112px] px-[18px]  md:pt-[220px] lg:px-[200px]  w-full text-center items-center justify-center flex flex-col ">
          <div className="flex flex-col gap-3 md:gap-6 text-center items-center justify-center w-full mb-[106px] lg:mb-[180px]">
            <p className="justify-center text-[16px] items-center  font-[300] flex md:text-[24px] text-[#ECECEE] md:font-[400] ">
              Our vision is to ensure that
            </p>
            <h1 className="justify-center bg-gradient-to-b  from-white to-gray-500 bg-clip-text text-transparent flex  text-[32px] font-[600] md:text-[66px] text-[#ECECEE] md:font-[600] w-full text-center leading-[1.25] ">
              You don’t need to compromise <br /> with Pace to deliver Quality.
            </h1>
          </div>
          <div className="flex flex-col gap-6 lg:gap-10 justify-center items-start text-start px-[6px] lg:px-5 pb-[72px] lg:pb-[180px]">
            <p className="justify-center text-[12px] items-center  font-[600] flex md:text-[24px] text-[#ECECEE]">
              THE PROBLEM
            </p>
            <p className="justify-center text-[20px] items-center  font-[500] flex md:text-[42px] text-white md:font-[600] ">
              Modern mobile businesses are a victim of pace
            </p>
            <p className="justify-center text-[16px] items-center  font-[300] flex md:text-[24px] text-[#ECECEE] md:font-[400] ">
              In today&apos;s dynamic and fast-paced digital landscape, user
              expectations evolve rapidly. This requires swift feature
              development and improvements, within compact deadlines. While
              businesses aspire to meet these user expectations, they often find
              themselves hindered by outdated and inefficient processes.
            </p>
          </div>
          <div className="flex flex-col gap-6 justify-center items-start text-start px-[6px] lg:px-5 pb-[24px] lg:pb-[72px]">
            <p className="justify-center text-[20px] items-start  font-[500] lg:font-[600] flex md:text-[42px] text-white">
              To ensure that you not only meet - but exceed - your user’s
              expectations
            </p>
            <p className="justify-center text-[12px] items-start  font-[600] flex lg:text-[24px] text-white lg:font-[600] ">
              We’re coming up with
            </p>
          </div>
          <div className="flex flex-col gap-14 lg:gap-[72px]">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-8 justify-between items-center"
              >
                <Image
                  src={`${item.img}.svg`}
                  alt={item.title}
                  width={1100}
                  height={600}
                  className="z-10 hidden lg:flex "
                />
                <Image
                  src={`${item.img}-mob.svg`}
                  alt={item.title}
                  width={324}
                  height={346}
                  className="z-10  flex lg:hidden "
                />
                <div className="flex flex-col gap-3 justify-center items-start text-start ">
                  <span className="justify-center text-[20px] items-start  font-[500] lg:font-[600] flex md:text-[42px] text-white">
                    {item.title}
                  </span>
                  <span className="justify-center text-[16px] items-start  font-[400] flex lg:text-[24px] text-white lg:font-[400] ">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex px-5 pb-[112px]  md:pt-[20px] md:pb-[228px] flex-col justify-center items-center">
          <div className="relative w-full justify-center items-center flex-col overflow-hidden flex ">
            <div className="grad-callback h-[192px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
            <div className="w-full h-[115px] md:h-[200px] absolute top-0 bg-black"></div>
            <div className="absolute top-[115px] md:top-[200px] flex flex-col justify-center items-center gap-12 md:gap-[116px]">
              <div className="callback-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
            </div>
          </div>
          <div className=" w-full text-center items-center flex flex-col gap-[45px] md:gap-[72px] md:mt-[-120px]">
            <div className="flex flex-col gap-5 md:gap-[28px] text-center items-center md:max-w-[987px]">
              <h3 className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent text-[32px] font-[600] md:text-[60px] text-[#ECECEE] w-full text-center leading-normal">
                Win the never ending battle of Quality vs Speed
              </h3>

              <p className="text-[16px] w-[252px] font-[300] md:text-[24px] text-[#ECECEE] md:font-[400] md:w-full">
                Accelerate your Mobile Testing Workflow with Quash
              </p>
            </div>
            <Button
              className="text-[#000000] text-[16px] md:text-[24px] font-[600] bg-[#FFFFFF] px-4 py-3 md:py-[14px] rounded-[100px] lg:h-[58px] flex z-10 leading-5 md:leading-normal hover:bg-[#FFFFFFCC]"
              variant="outline"
              onClick={() => {
                router.push("https://optimus.quashbugs.com/signup");
              }}
            >
              Get Started for Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
