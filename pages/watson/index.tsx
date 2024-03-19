import React from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Agile from "@/components/agile";

const Watson = () => {
  const router = useRouter();
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
  return (
    <section className="relative flex flex-col md:gap-0 items-center overflow-hidden ">
      <div className="z-[-1] left-ellipse hidden md:flex  absolute top-[15rem] -left-[10rem]" />
      <div className="z-[-1] left-sphere hidden md:flex absolute top-[30rem] -left-[2rem]" />
      <div className="z-[-1] right-ellipse hidden md:flex  absolute top-[36rem] -right-[25rem]" />
      <div className="z-[-1] right-sphere hidden md:flex absolute top-[34rem] right-[17rem]" />
      <div className=" pt-[112px] px-[18px]  md:pt-[210px] lg:px-[242px]  w-full text-center items-center justify-center flex flex-col gap-[32px] md:gap-[122px] ">
        <div className="">
          <p className="text-[#7B7B7B] text-center font-semibold text-[20px] md:text-[40px]">
            Say hello to <span className="text-white">Watson.</span>
          </p>
        </div>
        <div className="flex flex-col gap-8 md:gap-[28px] text-center items-center justify-center w-full">
          <h1 className="justify-center max-w-[340px] md:max-w-[1212px] bg-gradient-to-b px-7 from-white to-gray-500 bg-clip-text text-transparent flex  text-[32px] font-[600] md:text-[66px] text-[#ECECEE] md:font-[600] w-full text-center leading-[1.25] ">
            Supercharge Your Mobile App Development with AI-Driven Testing
          </h1>

          <p className="justify-center text-[16px] w-[290px] font-[300] flex md:text-[24px] text-[#ECECEE] md:font-[400] md:w-[888px] md:px-[100px] md:pb-[40px]">
            Empower your team to deliver exceptional apps faster, while reducing
            costs and time to market.
          </p>
          <Button
    className="text-[#000000] text-[16px] md:text-[24px] font-[600] bg-[#FFFFFF] px-4 py-2 md:py-[14px] rounded-[100px] lg:h-[58px] flex z-10 leading-none md:leading-normal hover:bg-[#FFFFFFCC] text-center"
    variant="outline"
    aria-label="Sign up for free"
    onClick={() => {
        router.push("/");
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

      <div className="h-full w-full overflow-hidden relative flex px-4 flex-col justify-center items-center">
        <div className="relative w-full flex justify-center items-center flex-col overflow-hidden">
          <div className="grad-report h-[250px] w-[192px] md:h-[290px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
          <div className="w-full h-[93px] md:h-[132px]  absolute top-0 bg-black"></div>
          <div className="absolute top-[93px]  md:top-[132px]  flex flex-col justify-center items-center gap-12 md:gap-[70px]">
            <div className="report-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
            <h3 className="report-gradient-text text-[32px] md:text-[60px] md:font-[600] leading-normal  text-center">
              Test everything, automatically
            </h3>
          </div>
          <p className="text-center text text-[16px] md:text-[32px] text-white md:w-[808px] w-[300px]">
            Watson can take over all your testing requirements, leveraging
            specially trained AI-models to automate the whole process.
          </p>
        </div>

        <div className="md:pt-[149px] pt-[53px] pb-[96px]">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[32px] md:gap-[0px] md:w-full w-[311px]">
            {/* Field 1 */}
            <div className="flex flex-col md:w-[480px] gap-3 md:ml-[150px] md:mb-[81px]">
              <Image
                src={"/test.svg"}
                alt={""}
                width={72}
                height={72}
                className="md:flex hidden"
              />
              <h2 className="flex flex-row items-center gap-2 text-[24px] md:text-[32px] font-bold  text-white">
                <Image
                  src={"/test.svg"}
                  alt={""}
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
            <div className="flex flex-col md:w-[480px] gap-3 md:ml-[150px] md:mb-[81px]">
              <Image
                src={"/intelligent.svg"}
                alt={""}
                width={72}
                height={72}
                className="md:flex hidden"
              />
              <h2 className="flex flex-row items-center gap-2 text-[24px] md:text-[32px] font-bold  text-white">
                <Image
                  src={"/intelligent.svg"}
                  alt={""}
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

            {/* Field 3 */}
            <div className="flex flex-col md:w-[480px] gap-3 md:ml-[150px] md:mb-[81px]">
              <Image
                src={"/automated.svg"}
                alt={""}
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
                  alt={""}
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
            <div className="flex flex-col md:w-[480px] gap-3 md:ml-[150px] md:mb-[81px]">
              <Image
                src={"/ai-frame.svg"}
                alt={""}
                width={72}
                height={72}
                className="md:flex hidden"
              />
              <h2 className="flex flex-row items-center gap-2 text-[24px] md:text-[32px] font-bold  text-white">
                <Image
                  src={"/ai-frame.svg"}
                  alt={""}
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

      <div className="md:w-full w-[359px] px-[24px] pb-[40px]">
        <div className="flex flex-col w-full md:gap-12 gap-[32px] text-center justify-center items-center">
          <h3 className="lg:text-[42px] md:text-[34px] text-[20px] text-[#FFFFFF] font-[500] leading-normal">
            All you need is Watson
          </h3>
          <Image
            src="/comparision-watson.svg"
            alt="comparision"
            width={889}
            height={100}
            className=" bg-transparent"
          />
          <p className=" lg:text-[42px] md:text-[26px] text-[20px] text-[#FFFFFF] font-[500] leading-normal md:w-[1270px] w-[311px]">
            Test your app’s logic, APIs, flows, UI, and more with AI
          </p>
        </div>
      </div>

      <div className="h-full w-full overflow-hidden relative flex px-4 flex-col justify-center items-center">
        <div className="relative w-full flex justify-center items-center flex-col overflow-hidden">
          <div className="grad-collaboration h-[250px] w-[192px] md:h-[290px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
          <div className="w-full h-[93px] md:h-[132px]  absolute top-0 bg-black"></div>
          <div className="absolute top-[93px]  md:top-[132px]  flex flex-col justify-center items-center gap-12 md:gap-[70px]">
            <div className="collaboration-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
            <h3 className="collaboration-gradient-text text-[32px] md:text-[60px] md:font-[600] leading-normal  text-center">
              Less resources, amazing outputs
            </h3>
          </div>
          <p className="text-center text text-[16px] md:text-[32px] text-white md:w-[724px] w-[300px] md:flex hidden">
            With AI-driven automation, Watson will help you cut down your costs
            while delivering exceptional experiences to your users.
          </p>
        </div>

        <div className="md:pt-[119px] pt-[53px] pb-[96px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
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
            <h3 className="resolution-gradient-text text-[32px]  md:text-[60px] md:font-[600] leading-normal w-[338px] md:w-[1082px]  text-center">
              3 simple steps to test your app with AI
            </h3>
          </div>
          <p className="text-center text text-[16px] md:text-[32px]  text-white md:w-[938px] w-[307px]">
            Watson’s AI models interact with each other in a structured manner,
            ensuring that the testing is accurate and efficient.
          </p>

          <div className="w-full flex flex-col px-6 justify-center items-center md:gap-36 gap-[60px] md:pt-[188px] pt-[32px] md:pb-[228px] pb-[62px] ">
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
                  alt={""}
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
                  src={"/first-step.svg"}
                  alt={""}
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
                  src={"/first-step.svg"}
                  alt={""}
                  width={540}
                  height={632}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full overflow-hidden relative flex px-4 flex-col justify-center items-center">
        <div className="relative w-full flex justify-center items-center flex-col overflow-hidden">
          <div className="grad-report h-[250px] w-[192px] md:h-[290px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
          <div className="w-full h-[93px] md:h-[132px]  absolute top-0 bg-black"></div>
          <div className="absolute top-[93px]  md:top-[132px]  flex flex-col justify-center items-center gap-12 md:gap-[70px]">
            <div className="report-gradient-line h-[2px] w-[208px] md:h-[4px] md:max-w-[400px]" />
            <h3 className="report-gradient-text text-[32px] md:text-[60px] md:font-[600] leading-normal  text-center">
              All your app metrics in a single place
            </h3>
          </div>
          <p className="text-center text text-[16px] md:text-[32px] text-white md:w-[808px] w-[300px]">
            Track everything from testing progress to production analytics.
          </p>
        </div>

        <div className="md:pt-[105px] pt-[53px] pb-[96px] ">
          <Image
            src={"/app-metrics.svg"}
            alt={""}
            width={968}
            height={632}
          ></Image>
        </div>
      </div>
      
      <Agile />

      <div className="integration-component px-4 pt-[96px] md:py-[114px] pb-[80px] md:pr-[85px] md:pl-[120px] gap-12 flex flex-col md:grid md:grid-cols-2 md:gap-[26px] justify-center items-center md:items-start">
        <div className="flex text-start gap-6 md:gap-10 flex-col px-3  md:pr-2 md:pl-0 md:mt-[65px] lg:w-[586px]">
          <h3 className="text-[24px] md:text-[42px] text-[#FFFFFF] font-[500]">
            Watson syncs with your <br /> entire tech stack
          </h3>
          <p className="text-[16px] md:text-[24px] text-[#ECECEE] font-[300] md:font-[400] ">
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

      <div className=" relative flex px-5 pt-[96px] md:pt-[20px] flex-col justify-center items-center md:pb-[228px] pb-[162px]">
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
            When we say Watson will take care of everything, we mean everything.
            </h3>

            <p className="text-[16px] w-[252px] font-[300] md:text-[24px] text-[#ECECEE] md:font-[400] md:w-full md:pb-[42px] pb-[28px]">
            Focus of building, and leave the testing to Watson.
            </p>

            <Button
    className="text-[#000000] text-[16px] md:text-[24px] font-[600] bg-[#FFFFFF] px-4 py-2 md:py-[14px] rounded-[100px] lg:h-[58px] flex z-10 leading-none md:leading-normal hover:bg-[#FFFFFFCC] text-center"
    variant="outline"
    aria-label="Sign up for free"
    onClick={() => {
        router.push("/");
    }}
>
    Get Early Access
</Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Watson;
