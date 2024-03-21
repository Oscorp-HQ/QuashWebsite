import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, X } from "lucide-react";
import Head from "next/head";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { EarlyAccessForm } from "@/components/early-access-form";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  useEffect(() => {
    // Function to dynamically load the form script
    const loadFormScript = () => {
      const script = document.createElement("script");
      script.src = "https://server.fillout.com/embed/v1/";
      script.async = true;
      document.body.appendChild(script);
    };
    if (formOpen) loadFormScript();
  }, [formOpen]);

  return (
    <section className="relative flex flex-col md:gap-0 items-center overflow-hidden ">
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

      <div className="watson-hero-background pt-[50px] px-[18px]  md:pt-[120px] lg:px-[120px]  w-full text-center items-center justify-center flex flex-col gap-[32px] md:gap-[40px]  ">
        <div className="mt-10 md:mt-0">
          <p className=" text-center text-[20px] md:text-[40px]">
            <span className="text-white opacity-70 font-[800]">
              SAY HELLO TO
            </span>{" "}
            <span className="watson-text text-white">Watson.</span>
          </p>
        </div>
        <div className="flex flex-col gap-8 md:gap-[28px] text-center items-center justify-center w-full">
          <h1 className="justify-center max-w-[332px] md:max-w-[1212px] text-white bg-clip-text text-transparent flex  text-[32px] font-[700] md:text-[56px]  md:font-[600] w-full text-center leading-[1.25] ">
            Supercharge Your Mobile App Development with AI-Driven Testing
          </h1>

          <p className="justify-center text-[16px] w-full font-[300] flex md:text-[28px] text-[#ECECEE] md:font-[400] lg:w-[888px]  md:pb-[40px] pb-[6px]">
            Empower your team to deliver exceptional apps faster, while reducing
            costs and time to market.
          </p>
          <Button
            className="join-the-waitlist text-[#000000] text-[16px] md:text-[20px] font-[600] bg-[#FFFFFF] px-6 py-2 md:py-[14px] rounded-[100px] lg:h-[58px] flex z-10 leading-none md:leading-normal hover:bg-[#FFFFFFCC] text-center"
            variant="outline"
            aria-label="Get Early Access To Watson"
            onClick={() => {
              setFormOpen(true);
            }}
          >
            <a
              href="https://forms.fillout.com/t/as917en3Caus"
              target="_blank"
              aria-label="join the waitlist form"
            >
              Join the Waitlist
            </a>
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
      <div className="md:h-[264px] w-full justify-center items-center flex h-[100px] mt-5 md:mt-0">
        <p className="max-w-[870px] text-white text-[16px] md:text-[24px]  lg:text-[40px] font-[400] lg:mx-0 mx-4 md:mx-8 text-center lg:text-start ">
          Test your app&apos;s functionality, APIs, processes, user interface,
          and beyond using Watson AI.
        </p>
      </div>
      <div className="md:hidden flex md:h-[200px] h-[100px] w-full relative mt-5">
        <Image
          src="/agile-illustration-mob.svg"
          alt="Illustration of agile development process"
          // className="w-full pt-[32px] md:hidden"
          // width={1400}
          // height={268}
          layout="fill"
          objectFit="fill"
          className="flex"
        />
      </div>
      <div className="h-[260px] w-full hidden md:flex relative mb-[70px]">
        <Image
          src="/agile-illustration.svg"
          alt="Illustration of agile development process"
          layout="fill"
          objectFit="cover"
          className="flex"
        />
      </div>

      <div className="h-full w-full overflow-hidden relative flex px-4 flex-col justify-center items-center pb-[46px] md:pb-[75px]">
        <div className="relative w-full flex justify-center items-center flex-col overflow-hidden">
          <div className="grad-report h-[250px] w-[192px] md:h-[290px] md:w-[400px] opacity-[30%] md:opacity-[20%]"></div>
          <div className="w-full h-[93px] md:h-[83px]  absolute top-0 bg-black"></div>
          <div className="absolute top-[93px]  md:top-[79px]  flex flex-col justify-center items-center gap-12 md:gap-[70px]">
            <div className="report-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
            <h3 className="watson-gradient-text-test text-[32px] md:text-[40px] lg:text-[60px] font-[600] leading-normal  text-center">
              Test everything, automatically
            </h3>
          </div>
          <p className="text-center text text-[16px] md:text-[24px] lg:text-[32px] text-white md:max-w-[808px] max-w-[300px]">
            Watson can take over all your testing requirements, leveraging
            specially trained AI-models to automate the whole process.
          </p>
        </div>

        <div className="md:pt-[149px] pt-[53px] ">
          <div className="grid grid-cols-1">
            <div className="flex lg:flex-row flex-col lg:gap-[150px] gap-[32px]">
              {/* Field 1 */}
              <div className="flex flex-col max-w-[400px] md:max-w-[479px] gap-3 ">
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
              <div className="flex flex-col max-w-[400px]  md:max-w-[518px] gap-3 lg:ml-10 ml-0">
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
                  Watson smartly imports your design files to check for UI bugs
                  and design inconsistencies in your app.
                </p>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col lg:gap-[150px] gap-[32px] lg:pt-[81px] pt-[32px]">
              {/* Field 3 */}
              <div className="flex flex-col max-w-[400px]  md:max-w-[518px] gap-3">
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
              <div className="flex flex-col max-w-[400px]  md:max-w-[518px] gap-3">
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

      <div className="md:w-full w-[359px] px-[24px]  md:pb-[18px] pt-[48px] md:pt-[75px]">
        <div className="flex flex-col w-full md:gap-12 gap-[32px] text-center justify-center items-center">
          <h3 className="lg:text-[42px] md:text-[34px] text-[20px] text-[#FFFFFF] font-[500] leading-normal">
            All you need is Watson
          </h3>
          <Image
            src="/comparision-watson.svg"
            alt="Image for comparision"
            width={889}
            height={100}
            className="bg-transparent"
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

        <div className="md:pt-[119px] pt-[53px] pb-[18px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
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
          {/* <Carousel
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
          </Carousel> */}
          <Carousel className="w-full max-w-xs md:hidden">
            <CarouselContent>
              {lessResourcesMediaMobile.map((media, index) => (
                <CarouselItem
                  key={index}
                  className="w-full justify-center flex"
                >
                  {/* <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div> */}
                  {/* <div key={index}> */}
                  <Image
                    src={media.src}
                    alt={`Detailed view of ${media.label} feature`}
                    width={272}
                    height={348}
                    className=""
                  />
                  {/* </div> */}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 border-white" />
            <CarouselNext className="-right-4 border-white" />
          </Carousel>
        </div>
      </div>

      <div className="h-full w-full overflow-hidden relative flex  flex-col justify-center items-center">
        <div className="relative w-full flex justify-center items-center flex-col overflow-hidden">
          <div className="grad-resolution-watson w-[192px] md:h-[310px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
          <div className="w-full h-[93px] md:h-[132px]  absolute top-0 bg-black"></div>
          <div className="absolute top-[93px]  md:top-[132px]  flex flex-col justify-center items-center gap-12 md:gap-[70px]">
            <div className="resolution-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
            <h3 className="watson-gradient-text text-[32px] md:text-[40px] lg:text-[60px] font-[600] leading-normal max-w-[338px] md:max-w-[1082px]  text-center">
              3 simple steps to test your app with AI
            </h3>
          </div>
          <p className="text-center text text-[16px] md:text-[24px] lg:text-[32px] text-white md:max-w-[938px] max-w-[307px]">
            Watson’s AI models interact with each other in a structured manner,
            ensuring that the testing is accurate and efficient.
          </p>

          <div className="w-full flex flex-col px-6 justify-center items-center md:gap-36 gap-[60px] md:pt-[150px] pt-[32px] md:pb-[0px] pb-[45px] ">
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
          <div className=" w-full h-[48px] md:h-[150px] absolute top-0 bg-black"></div>
          <div className="absolute top-[48px] md:top-[150px] flex flex-col justify-center items-center gap-12 md:gap-[116px]">
            <div className="report-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px] z-10" />
          </div>
        </div>
        <div className=" w-full text-center items-center flex flex-col gap-[45px] md:gap-[72px] md:mt-[-120px] ">
          <div className="flex flex-col gap-5 md:gap-[28px] text-center items-center md:max-w-[1109px]">
            <h3 className="watson-gradient-text-test bg-clip-text text-transparent text-[32px] md:text-[40px] lg:text-[60px] font-[600] w-full text-center leading-normal">
              All your app metrics in a single place
            </h3>

            <p className="text-[16px] max-w-[294px] font-[300] md:text-[32px] text-[#ECECEE] md:font-[400] md:max-w-full md:pb-[42px] pb-[28px]">
              Track everything from testing progress to production analytics.
            </p>
            <div className="md:pt-[105px] pt-[53px] md:pb-[18px] pb-[0px] ">
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
          <div className="grad-resolution-watson w-[192px] md:h-[310px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
          <div className="w-full h-[93px] md:h-[132px]  absolute top-0 bg-black"></div>
          <div className="absolute top-[93px]  md:top-[132px]  flex flex-col justify-center items-center gap-12 md:gap-[70px]">
            <div className="resolution-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
            <h3 className="watson-gradient-text-agile text-[32px] md:text-[40px] lg:text-[60px] font-[600] leading-normal max-w-[338px] md:max-w-[1082px]  text-center">
              Agile, Mobile-First Development
            </h3>
          </div>
          <p className="text-center text text-[16px] md:text-[24px] lg:text-[32px] text-white lg:max-w-[1064px] md:max-w-[653px] max-w-[352px]">
            Double your development agility with Watson&apos;s mobile-first
            AI-driven testing approach. Deliver low-risk, high-quality mobile
            apps faster, and boost team productivity for standout performance.
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
        <div className="flex md:hidden mb-10">
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
          <div className="-z-20 w-full h-[48px] md:h-[150px] absolute top-0 bg-black"></div>
          <div className="absolute top-[48px] md:top-[150px] flex flex-col justify-center items-center gap-12 md:gap-[116px]">
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
              className="join-the-waitlist text-[#000000] text-[16px] md:text-[20px] font-[600] bg-[#FFFFFF] px-6 py-2 md:py-[14px] rounded-[100px] lg:h-[58px] flex z-10 leading-none md:leading-normal hover:bg-[#FFFFFFCC] text-center"
              variant="outline"
              aria-label="Get Early Access To Watson"
              onClick={() => {
                setFormOpen(true);
              }}
            >
              <a
                href="https://forms.fillout.com/t/as917en3Caus"
                target="_blank"
                aria-label="join the waitlist form"
              >
                Join the Waitlist
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* {formOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50">
          <div
            data-fillout-id="as917en3Caus"
            data-fillout-embed-type="fullscreen"
            className="w-full h-full"
            data-fillout-inherit-parameters
          ></div>
        </div>
      )} */}
    </section>
  );
};

export default Watson;
