import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { X } from "lucide-react";
import Head from "next/head";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { EarlyAccessForm } from "@/components/early-access-form";

const Watson = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const lessResourcesMedia = [
    {
      src: "/Accelerate.svg",
      label: "Accelerated market delivery",
      width: 400,
      height: 554,
    },
    {
      src: "/Pre-release-Testing-assurance.svg",
      label: "Pre-release Testing assurance",
      width: 400,
      height: 554,
    },
    {
      src: "/Productivity-and-Scalability.svg",
      label: "Productivity and Scalability",
      width: 400,
      height: 554,
    },
    {
      src: "/Reduced-costs-spent-on-testing.svg",
      label: "Reduced costs spent on testing",
      width: 400,
      height: 554,
    },
  ];
  const lessResourcesMediaMobile = [
    {
      src: "/Accelerated-mob.svg",
      label: "Accelerated market delivery",
      width: 400,
      height: 554,
    },
    {
      src: "/Pre-release-Testing-assurance-mob.svg",
      label: "Pre-release Testing assurance",
      width: 400,
      height: 554,
    },
    {
      src: "/Productivity-and-Scalability-mob.svg",
      label: "Productivity and Scalability",
      width: 400,
      height: 554,
    },
    {
      src: "/Reduced-costs-spent-on-testing-mob.svg",
      label: "Reduced costs spent on testing",
      width: 400,
      height: 554,
    },
  ];

  const canonicalUrl = "https://quashbugs.com/watson";

  return (
    <section className="relative flex flex-col md:gap-0 items-center overflow-hidden md:pt-[72px] pt-[56px]">
      <Head>
        <title>Watson by Quash - AI Driven Testing</title>
        <meta
          name="description"
          content="Watson is an AI-driven end-to-end mobile app testing platform. It automates the entire testing process by testing for bugs, crashes, and UI issues."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta
          property="og:title"
          content="Watson by Quash - AI Driven Testing"
        />
        <meta
          property="og:description"
          content="Watson is an AI-driven end-to-end mobile app testing platform. It automates the entire testing process by testing for bugs, crashes, and UI issues."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Blurb_Watson.jpg" />
        <meta
          name="keywords"
          content="watson , watson ai ,bug reporting in software testing, bug reporting tools, bug reporting tool, bug reporting, bug reporting template, jira bug reporting, bug reporting in Jira, iphone bug reporting, bug reporting tools in software testing, bug reporting software, Performance monitoring, bug report in software testing"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Watson by Quash",
            applicationCategory: "DeveloperSoftware",
            operatingSystem: "ANY",
          })}
        </script>
      </Head>
      {/* <div className="z-[-1] left-ellipse hidden md:flex  absolute top-[15rem] -left-[10rem]" />
      <div className="z-[-1] left-sphere hidden md:flex absolute top-[30rem] -left-[2rem]" />
      <div className="z-[-1] right-ellipse hidden md:flex  absolute top-[36rem] -right-[25rem]" />
      <div className="z-[-1] right-sphere hidden md:flex absolute top-[34rem] right-[17rem]" /> */}

      <div className="watson-hero-background pt-[50px] px-[18px]  md:pt-[120px] lg:px-[120px]  w-full text-center items-center justify-center flex flex-col gap-[32px] md:gap-[80px] ">
        <div className="">
          <p className=" text-center text-[20px] md:text-[40px]">
            <span className="text-white opacity-70 font-[800] ">SAY HELLO TO</span><span className="watson-text text-white">Watson.</span>
          </p>
        </div>
        <div className="flex flex-col gap-8 md:gap-[28px] text-center items-center justify-center w-full">
          <h1 className="justify-center max-w-[332px] md:max-w-[1212px] text-white bg-clip-text text-transparent flex  text-[32px] font-[700] md:text-[66px]  md:font-[600] w-full text-center leading-[1.25] ">
            Supercharge Your Mobile App Development with AI-Driven Testing
          </h1>

          <p className="justify-center text-[16px] w-[290px] font-[300] flex md:text-[32px] text-[#ECECEE] md:font-[400] md:w-[888px]  md:pb-[40px]">
            Empower your team to deliver exceptional apps faster, while reducing
            costs and time to market.
          </p>
          <Button
            className="text-[#000000] text-[16px] md:text-[24px] font-[600] bg-[#FFFFFF] px-4 py-2 md:py-[14px] rounded-[100px] lg:h-[58px] flex z-10 leading-none md:leading-normal hover:bg-[#FFFFFFCC] text-center"
            variant="outline"
            aria-label="Get Early Access To Watson"
            onClick={() => {
              setFormOpen(true);
            }}
          >
            Get Early Access
          </Button>
        </div>
        <div>
          <Image
            src="/phone-watson.svg"
            alt="Cover image for Device model for Watson"
            width={600}
            height={1210}
            className="md:flex hidden rounded-[4px] animate-upAndDown"
          />
          <Image
            src="/phone-watson.svg"
            alt="Cover image for Device model for Watson"
            width={162}
            height={327}
            className="flex md:hidden rounded-[4px] animate-upAndDown"
          />
        </div>
      </div>

      <div className="h-full w-full overflow-hidden relative flex px-4 flex-col justify-center items-center pb-[46px] md:pb-[100px]">
        <div className="relative w-full flex justify-center items-center flex-col overflow-hidden">
          <div className="grad-report h-[250px] w-[192px] md:h-[290px] md:w-[400px] opacity-[30%] md:opacity-[20%]"></div>
          <div className="w-full h-[93px] md:h-[83px]  absolute top-0 bg-black"></div>
          <div className="absolute top-[93px]  md:top-[79px]  flex flex-col justify-center items-center gap-12 md:gap-[70px]">
            <div className="report-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
            <h3 className="watson-gradient-text-test text-[32px] md:text-[40px] lg:text-[60px] font-[600] leading-normal  text-center">
              Test everything, automatically
            </h3>
          </div>
          <p className="text-center text text-[16px] md:text-[24px] lg:text-[32px] text-white lg:w-[808px] md:w-[495px]  w-[300px]">
            Watson can take over all your testing requirements, leveraging
            specially trained AI-models to automate the whole process.
          </p>
        </div>

        <div className="md:pt-[149px] pt-[53px] ">
          <div className="grid grid-cols-1">
            <div className="flex lg:flex-row flex-col lg:gap-[150px] gap-[32px]">
              {/* Field 1 */}
              <div className="flex flex-col max-w-[311px] md:max-w-[479px] gap-3 ">
                <Image
                  src={"/test.svg"}
                  alt={
                    "Image for Watson generates extensive test cases by reading your Product Requirements Document "
                  }
                  width={72}
                  height={72}
                  className="md:flex hidden"
                />
                <h2 className="flex flex-row items-center gap-2 text-[24px] md:text-[32px] font-bold  text-white">
                  <Image
                    src={"/test.svg"}
                    alt={
                      "Image for Watson generates extensive test cases by reading your Product Requirements Document "
                    }
                    width={30}
                    height={30}
                    className="flex md:hidden"
                  />
                  Test Case Generation
                </h2>
                <p className="text-[#9B9B9B] text-[16px] md:text-[28px] ">
                  Watson generates extensive test cases by reading your Product
                  Requirements Document (PRD).
                </p>
              </div>

              {/* Field 2 */}
              <div className="flex flex-col max-w-[311px]  md:max-w-[518px] gap-3 lg:ml-10 ml-0">
                <Image
                  src={"/intelligent.svg"}
                  alt={
                    "Image for Watson smartly imports your Figma designs to check for UI bugs and design inconsistencies in your app"
                  }
                  width={72}
                  height={72}
                  className="md:flex hidden"
                />
                <h2 className="flex flex-row items-center gap-2 text-[24px] md:text-[32px] font-bold  text-white">
                  <Image
                    src={"/intelligent.svg"}
                    alt={
                      "Image for Watson smartly imports your Figma designs to check for UI bugs and design inconsistencies in your app"
                    }
                    width={30}
                    height={30}
                    className="flex md:hidden"
                  />
                  Intelligent UI Testing
                </h2>
                <p className="text-[#9B9B9B] text-[16px] md:text-[28px]">
                  Watson smartly imports your Figma designs to check for UI bugs
                  and design inconsistencies in your app.
                </p>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col lg:gap-[150px] gap-[32px] lg:pt-[81px] pt-[32px]">
              {/* Field 3 */}
              <div className="flex flex-col max-w-[311px]  md:max-w-[518px] gap-3">
                <Image
                  src={"/automated.svg"}
                  alt={
                    "Image for Automatically runs all test cases and reports all bugs, ui mismatches, and crashes with zero manual input"
                  }
                  width={72}
                  height={72}
                  className="md:flex hidden"
                />
                <h2 className="md:flex hidden text-[24px] md:text-[32px] font-bold  text-white">
                  Automated Test Execution
                </h2>
                <h2 className="flex flex-row md:hidden items-center gap-2 text-[24px] md:text-[32px] font-bold  text-white">
                  <Image
                    src={"/automated.svg"}
                    alt={
                      "Image for Automatically runs all test cases and reports all bugs, ui mismatches, and crashes with zero manual input"
                    }
                    width={30}
                    height={30}
                    className="flex md:hidden"
                  />
                  Auto Test Execution
                </h2>
                <p className="text-[#9B9B9B] text-[16px] md:text-[28px]">
                  Automatically runs all test cases and reports all bugs, ui
                  mismatches, and crashes with zero manual input.
                </p>
              </div>

              {/* Field 4 */}
              <div className="flex flex-col max-w-[311px]  md:max-w-[518px] gap-3">
                <Image
                  src={"/ai-frame.svg"}
                  alt={
                    "Image for  For every bug, crash, and UI issue found, Watson provides actionable solutions to fix it"
                  }
                  width={72}
                  height={72}
                  className="md:flex hidden"
                />
                <h2 className="flex flex-row items-center gap-2 text-[24px] md:text-[32px] font-bold  text-white">
                  <Image
                    src={"/ai-frame.svg"}
                    alt={
                      "Image for  For every bug, crash, and UI issue found, Watson provides actionable solutions to fix it"
                    }
                    width={30}
                    height={30}
                    className="flex md:hidden"
                  />
                  AI-Powered Resolution
                </h2>
                <p className="text-[#9B9B9B] text-[16px] md:text-[28px]">
                  For every bug, crash, and UI issue found, Watson provides
                  actionable solutions to fix it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-full w-[359px] px-[24px] pb-[40px] md:pb-[123px] pt-[48px] md:pt-[100px]">
        <div className="flex flex-col w-full md:gap-12 gap-[32px] text-center justify-center items-center">
          <h3 className="lg:text-[42px] md:text-[34px] text-[20px] text-[#FFFFFF] font-[500] leading-normal">
            All you need is Watson
          </h3>
          <Image
            src="/comparision-watson.svg"
            alt="Image for comparision"
            width={889}
            height={100}
            className=" bg-transparent"
          />
          <p className=" lg:text-[42px] md:text-[26px] text-[20px] text-[#FFFFFF] font-[500] leading-normal md:w-[1270px] w-[311px]">
            Test your app’s logic, APIs, flows, UI, and more with AI
          </p>
        </div>
      </div>

      <div className="h-full w-full overflow-hidden relative flex md:px-4 px-0  flex-col justify-center items-center">
        <div className="relative w-full flex justify-center items-center flex-col overflow-hidden">
          <div className="grad-collaboration h-[250px] w-[192px] md:h-[290px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
          <div className="w-full h-[93px] md:h-[132px]  absolute top-0 bg-black"></div>
          <div className="absolute top-[93px]  md:top-[132px]  flex flex-col justify-center items-center gap-12 md:gap-[70px]">
            <div className="collaboration-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
            <h3 className="watson-gradient-text-less text-[32px] md:text-[40px] px-4 lg:text-[60px] font-[600] leading-normal  text-center">
              Less resources, amazing outputs
            </h3>
          </div>
          <p className="text-center text text-[16px] md:text-[24px] lg:text-[32px] pt-5 text-white lg:w-[724px] md:w-[560px] w-[300px] md:flex hidden">
            With AI-driven automation, Watson will help you cut down your costs
            while delivering exceptional experiences to your users.
          </p>
        </div>

        <div className="md:pt-[119px] pt-[53px] pb-[55px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
          {lessResourcesMedia.map((media, index) => (
            <Image
              key={index}
              src={media.src}
              alt={`Detailed view of ${media.label} feature`}
              width={612}
              height={348}
              className="md:flex hidden"
            />
          ))}
          <Carousel
            infiniteLoop
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            interval={3000}
            centerMode={true}
            className="flex md:hidden pt-10"
          >
            {lessResourcesMediaMobile.map((media, index) => (
              <div key={index}>
                <Image
                  src={media.src}
                  alt={`Detailed view of ${media.label} feature`}
                  width={272}
                  height={348}
                  className=""
                />
                <br />
                <br />
                <br />
                <br />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="h-full w-full overflow-hidden relative flex  flex-col justify-center items-center">
        <div className="relative w-full flex justify-center items-center flex-col overflow-hidden">
          <div className="grad-resolution-watson w-[192px] md:h-[290px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
          <div className="w-full h-[93px] md:h-[132px]  absolute top-0 bg-black"></div>
          <div className="absolute top-[93px]  md:top-[132px]  flex flex-col justify-center items-center gap-12 md:gap-[70px]">
            <div className="resolution-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
            <h3 className="watson-gradient-text text-[32px] md:text-[40px] lg:text-[60px] font-[600] leading-normal w-[338px] md:w-[1082px]  text-center">
              3 simple steps to test your app with AI
            </h3>
          </div>
          <p className="text-center text text-[16px] md:text-[24px] lg:text-[32px] text-white lg:w-[938px] md:w-[653px] w-[307px]">
            Watson’s AI models interact with each other in a structured manner,
            ensuring that the testing is accurate and efficient.
          </p>

          <div className="w-full flex flex-col px-6 justify-center items-center md:gap-36 gap-[60px] md:pt-[188px] pt-[32px] md:pb-[0px] pb-[62px] ">
            <div className="text-white flex lg:flex-row flex-col md:gap-[77px] gap-[40px]">
              <div className="inline-flex flex-col items-start gap-[12px] md:gap-[40px] md:w-[586px]">
                <div className="flex md:flex-col gap-2 md:gap-0">
                  <h3 className="text-white opacity-20 md:text-[120px] text-[24px] font-medium leading-normal">
                    1.
                  </h3>
                  <h3 className="md:text-[42px] text-[24px] font-medium leading-normal">
                    Generate extensive test cases automatically
                  </h3>
                </div>
                <p className="md:text-[32px] text-[16px] font-normal text-white pl-[26px] md:pl-[0px]">
                  Simply upload your PRD and let Watson generate test cases for
                  all your workflows.
                </p>
              </div>

              <div>
                <Image
                  src={"/first-step.svg"}
                  alt={"Detailed Image for the step of Watson AI"}
                  width={540}
                  height={632}
                ></Image>
              </div>
            </div>

            <div className="text-white flex lg:flex-row flex-col md:gap-[77px] gap-[40px]">
              <div className="inline-flex flex-col items-start gap-[12px] md:gap-[40px] md:w-[586px]">
                <div className="flex md:flex-col gap-2 md:gap-0">
                  <h3 className="text-white opacity-20 md:text-[120px] text-[24px] font-medium leading-normal">
                    2.
                  </h3>
                  <h3 className="md:text-[42px] text-[24px] font-medium leading-normal">
                    Link your Figma handoff project files
                  </h3>
                </div>
                <p className="md:text-[32px] text-[16px] font-normal text-white pl-[26px] md:pl-[0px]">
                  Watson will smartly identify your UI flows in Figma, and test
                  for any inconsistencies.
                </p>
              </div>

              <div>
                <Image
                  src={"/second-step.svg"}
                  alt={"Detailed Image for the step of Watson AI"}
                  width={540}
                  height={632}
                ></Image>
              </div>
            </div>

            <div className="text-white flex lg:flex-row flex-col md:gap-[77px] gap-[40px]">
              <div className="inline-flex flex-col items-start gap-[12px] md:gap-[40px] md:w-[586px]">
                <div className="flex md:flex-col gap-2 md:gap-0">
                  <h3 className="text-white opacity-20 md:text-[120px] text-[24px] font-medium leading-normal">
                    3.
                  </h3>
                  <h3 className="md:text-[42px] text-[24px] font-medium leading-normal">
                    Let Watson do the rest.
                  </h3>
                </div>
                <p className="md:text-[32px] text-[16px] font-normal text-white pl-[26px] md:pl-[0px]">
                  Watson will automatically run all the test cases on your app.
                  For every bug, crash, and UI issue that is reported, Watson
                  provides a solution with it.
                </p>
              </div>

              <div>
                <Image
                  src={"/third-step.svg"}
                  alt={"Detailed Image for the step of Watson AI"}
                  width={540}
                  height={632}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" relative flex px-5 pt-[96px] md:pt-[20px] flex-col justify-center items-center ">
        <div className="absolute top-0 md:relative  w-full justify-center items-center flex-col overflow-hidden flex">
          <div className="grad-report h-[192px] w-[192px] md:h-[400px] md:w-[400px] opacity-[30%] md:opacity-[20%] "></div>
          <div className=" w-full h-[48px] md:h-[200px] absolute top-0 bg-black"></div>
          <div className="absolute top-[48px] md:top-[200px] flex flex-col justify-center items-center gap-12 md:gap-[116px]">
            <div className="report-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px] z-10" />
          </div>
        </div>
        <div className=" w-full text-center items-center flex flex-col gap-[45px] md:gap-[72px] md:mt-[-120px] ">
          <div className="flex flex-col gap-5 md:gap-[28px] text-center items-center md:max-w-[1109px]">
            <h3 className="watson-gradient-text-test bg-clip-text text-transparent text-[32px] md:text-[40px] lg:text-[60px] font-[600] w-full text-center leading-normal">
              All your app metrics in a single place
            </h3>

            <p className="text-[16px] w-[294px] font-[300] md:text-[24px] text-[#ECECEE] md:font-[400] md:w-full md:pb-[42px] pb-[28px]">
              Track everything from testing progress to production analytics.
            </p>
            <div className="md:pt-[105px] pt-[53px] md:pb-[70px] pb-[0px] ">
              <Image
                src={"/app-metrics.svg"}
                alt={
                  "Detailed image for Track everything from testing progress to production analytics."
                }
                width={968}
                height={632}
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full overflow-hidden relative flex px-4  flex-col justify-center items-center">
        <div className="relative w-full flex justify-center items-center flex-col overflow-hidden">
          <div className="grad-resolution-watson w-[192px] md:h-[290px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
          <div className="w-full h-[93px] md:h-[132px]  absolute top-0 bg-black"></div>
          <div className="absolute top-[93px]  md:top-[132px]  flex flex-col justify-center items-center gap-12 md:gap-[70px]">
            <div className="resolution-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
            <h3 className="watson-gradient-text-agile text-[32px] md:text-[40px] lg:text-[60px] font-[600] leading-normal w-[338px] md:w-[1082px]  text-center">
              Agile, Mobile-First Development
            </h3>
          </div>
          <p className="text-center text text-[16px] md:text-[24px] lg:text-[32px] text-white lg:w-[1064px] md:w-[653px] w-[352px]">
            Double your development agility with Watson&apos;s mobile-first AI-driven
            testing approach. Deliver low-risk, high-quality mobile apps faster,
            and boost team productivity for standout performance.
          </p>
        </div>
        <div>
          <Image
            src="/agile-illustration-mob.svg"
            alt="Illustration of agile development process"
            className="w-full pt-[32px] md:hidden"
            width={1400}
            height={268}
          />
        </div>
        <div className="agile-image-container hidden md:block">
          <Image
            src="/agile-illustration.svg"
            alt="Illustration of agile development process"
            className="w-full"
            width={1400}
            height={268}
          />
        </div>
      </div>

      <div className="integration-component px-4 pt-[96px] md:pt-[114px] gap-12 flex flex-col md:grid md:grid-cols-2 md:gap-[26px] justify-center items-center md:items-start">
        <div className="flex text-start gap-6 md:gap-10 flex-col px-3  md:pr-2 md:pl-0 md:mt-[65px] lg:w-[586px]">
          <h3 className="text-[24px] md:text-[42px] text-[#FFFFFF] font-[500]">
            Watson syncs with your <br /> entire tech stack
          </h3>
          <p className="text-[16px] md:text-[24px] text-[#ECECEE] font-[300] md:font-[400]">
            Leverage the power of Integrations to optimise <br /> your dev
            cycles{" "}
          </p>
        </div>
        <div className="flex-grow md:flex hidden">
          <Image
            src="/watson-integration.svg"
            alt="Workflow management tool integration"
            width={694}
            height={673}
          />
        </div>
        <div className="flex md:hidden">
          <Image
            src="/watson-integration.svg"
            alt="Workflow management tool integration"
            width={328}
            height={318}
          />
        </div>
      </div>

      <div className=" relative flex px-5 pt-[96px] md:pt-[20px] flex-col justify-center items-center md:pb-[150px] pb-[90px]">
        <div className="absolute top-0 md:relative  w-full justify-center items-center flex-col overflow-hidden flex">
          <div className="grad-callback h-[192px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%] "></div>
          <div className="-z-20 w-full h-[48px] md:h-[200px] absolute top-0 bg-black"></div>
          <div className="absolute top-[48px] md:top-[200px] flex flex-col justify-center items-center gap-12 md:gap-[116px]">
            <div className="callback-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px] z-10" />
          </div>
        </div>
        <div className=" w-full text-center items-center flex flex-col gap-[45px] md:gap-[72px] md:mt-[-120px] ">
          <div className="flex flex-col gap-5 md:gap-[28px] text-center items-center md:max-w-[1109px]">
            <h3 className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent text-[32px] font-[600] md:text-[60px] text-[#ECECEE] w-full text-center leading-normal">
              When we say Watson will take care of everything, we mean
              everything.
            </h3>

            <p className="text-[16px] w-[252px] font-[300] md:text-[24px] text-[#ECECEE] md:font-[400] md:w-full md:pb-[42px] pb-[28px]">
              Focus of building, and leave the testing to Watson.
            </p>

            <Button
              className="text-[#000000] text-[16px] md:text-[24px] font-[600] bg-[#FFFFFF] px-4 py-2 md:py-[14px] rounded-[100px] lg:h-[58px] flex z-10 leading-none md:leading-normal hover:bg-[#FFFFFFCC] text-center"
              variant="outline"
              aria-label="Get Early Access To Watson"
              onClick={() => {
                setFormOpen(true);
              }}
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
      {(formOpen || formSubmitted) && (
        <AlertDialog open={formOpen}>
          <AlertDialogContent className=" flex justify-center items-center md:p-[100px] p-10 w-full max-w-[960px] h-full">
            <div
              className={`relative border-[2px] border-solid border-gray-500 w-full ${
                !formSubmitted ? "demo-container bg-[#E0EED5]" : "submitted"
              }  `}
            >
              <div className="w-full gap-6 md:gap-[40px]">
                {!formSubmitted && (
                  <div className="watson-title flex justify-between items-center">
                    Get Early Access to Watson
                    <X
                      size={53}
                      className="hover:cursor-pointer md:flex hidden"
                      onClick={() => {
                        setFormOpen(false);
                      }}
                    />
                    <X
                      size={26}
                      className="hover:cursor-pointer md:hidden flex"
                      onClick={() => {
                        setFormOpen(false);
                      }}
                    />
                  </div>
                )}
                <div className="w-full mt-8">
                  {!formSubmitted ? (
                    <EarlyAccessForm setFormSubmitted={setFormSubmitted} />
                  ) : (
                    <div className="">
                      <div className=" flex flex-col items-center gap-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="88"
                          height="88"
                          viewBox="0 0 88 88"
                          fill="none"
                        >
                          <path
                            d="M58.7228 34.7772C58.8507 34.9049 58.9521 35.0565 59.0213 35.2235C59.0905 35.3904 59.1261 35.5693 59.1261 35.75C59.1261 35.9307 59.0905 36.1096 59.0213 36.2765C58.9521 36.4435 58.8507 36.5951 58.7228 36.7228L39.4728 55.9728C39.3451 56.1007 39.1935 56.2021 39.0266 56.2713C38.8596 56.3405 38.6807 56.3761 38.5 56.3761C38.3193 56.3761 38.1404 56.3405 37.9735 56.2713C37.8065 56.2021 37.6549 56.1007 37.5272 55.9728L29.2772 47.7228C29.0192 47.4648 28.8742 47.1149 28.8742 46.75C28.8742 46.3851 29.0192 46.0352 29.2772 45.7772C29.5352 45.5192 29.8851 45.3742 30.25 45.3742C30.6149 45.3742 30.9648 45.5192 31.2228 45.7772L38.5 53.0544L56.7772 34.7772C56.9049 34.6493 57.0565 34.5479 57.2235 34.4787C57.3904 34.4095 57.5693 34.3739 57.75 34.3739C57.9307 34.3739 58.1096 34.4095 58.2766 34.4787C58.4435 34.5479 58.5951 34.6493 58.7228 34.7772ZM78.375 44C78.375 50.7987 76.3589 57.4448 72.5818 63.0977C68.8046 68.7507 63.436 73.1566 57.1548 75.7584C50.8735 78.3601 43.9619 79.0409 37.2938 77.7145C30.6257 76.3881 24.5006 73.1142 19.6932 68.3068C14.8858 63.4994 11.6119 57.3743 10.2855 50.7062C8.95915 44.0381 9.63989 37.1265 12.2417 30.8453C14.8434 24.564 19.2493 19.1954 24.9023 15.4182C30.5552 11.6411 37.2013 9.625 44 9.625C53.1138 9.63501 61.8514 13.2599 68.2958 19.7043C74.7402 26.1487 78.365 34.8863 78.375 44ZM75.625 44C75.625 37.7452 73.7702 31.6308 70.2952 26.4301C66.8202 21.2294 61.8811 17.1759 56.1024 14.7823C50.3237 12.3887 43.9649 11.7624 37.8303 12.9827C31.6956 14.2029 26.0606 17.2149 21.6378 21.6377C17.2149 26.0606 14.2029 31.6956 12.9827 37.8303C11.7624 43.9649 12.3887 50.3236 14.7823 56.1024C17.1759 61.8811 21.2294 66.8202 26.4301 70.2952C31.6308 73.7702 37.7452 75.625 44 75.625C52.3847 75.6159 60.4233 72.2811 66.3522 66.3522C72.2811 60.4233 75.6159 52.3847 75.625 44Z"
                            fill="#E0EED5"
                          />
                        </svg>
                        <div className="flex flex-col text-center gap-3">
                          {/* <span className="req-submitted">Reach out to us</span> */}
                          <span className="req-desc text-white">
                            We’ll get back to you shortly
                          </span>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        className="absolute top-4 right-4  hover:cursor-pointer "
                        onClick={() => {
                          setFormOpen(false);
                          setTimeout(() => {
                            setFormSubmitted(false);
                          }, 500);
                        }}
                      >
                        <path
                          d="M14.9999 13.2325L21.1874 7.04498L22.9549 8.81248L16.7674 15L22.9549 21.1875L21.1874 22.955L14.9999 16.7675L8.81242 22.955L7.04492 21.1875L13.2324 15L7.04492 8.81248L8.81242 7.04498L14.9999 13.2325Z"
                          fill="#E0EED5"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </section>
  );
};

export default Watson;
