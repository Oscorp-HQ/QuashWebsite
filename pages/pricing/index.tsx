import { Button } from "@/components/ui/button";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const plans = [
  {
    label: "Free",
    desc: "Test up to 3 applications with unlimited bug reports",
    benefits: [
      "Auto-attached screenshots and session replays",
      "Precise crash logs",
      "Add up to 3 applications",
      "1GB data usage every month",
      "No limits on users",
      "No limit on bug reports",
    ],
    action: "Get Started for Free",
    path: "https://optimus.quashbugs.com/signup",
  },
  {
    label: "Custom",
    desc: "Talk to us for a subscription tailored for your needs",
    benefits: [
      "SSO Login",
      "Advanced user configurations",
      "On-demand Integrations",
      "No limit on applications",
      "No limits on data usage",
    ],
    action: "Contact Us",
    path: "",
  },
];

const Pricing = () => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center">
      <Head>
        <title>🐞 Quash - Streamlining QA Processes 🚀</title>
      </Head>
      <div className="absolute left-0 right-0 top-0 md:top-[300px] bottom-0 w-full bg-[url('/Gradient.svg')] bg-no-repeat hidden md:flex" />
      <div className=" pt-[112px]  md:pt-[236px]   w-full text-center items-center justify-center flex flex-col ">
        <div className="flex flex-col text-center items-center justify-center w-full mb-[43px] lg:mb-[180px] lg:px-[200px] px-[18px]">
          <span className="justify-center bg-gradient-to-b  from-white to-gray-500 bg-clip-text text-transparent flex  text-[24px] font-[700] md:text-[66px] text-[#ECECEE] md:font-[600] w-full text-center leading-[1.25] ">
            Start testing your apps with Quash for free today
          </span>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center gap-10 px-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between lg:px-10 px-4 lg:pt-10 pt-6 lg:pb-14 pb-[34px] lg:rounded-[40px] rounded-2xl border-solid border-[#ffffff1a] bg-[#d9d9d90f] border-[0.4px] lg:h-[732px] lg:w-[534px] h-[473px] w-[328px]"
            >
              <div className="flex flex-col lg:gap-[52px] gap-[30px]">
                <div className="flex flex-col lg:gap-3 gap-2 text-start">
                  <span className="lg:text-[48px] text-[24px] text-[#ECECEE] font-[600] leading-10">
                    {plan.label}
                  </span>
                  <span className="lg:text-[24px] text-[14px] text-[#FFFFFF] font-[300] leading-[1.2]">
                    {plan.desc}
                  </span>
                </div>
                <div className="flex flex-col gap-4 lg:gap-6 justify-start items-start">
                  {plan.benefits.map((benefit, index) => (
                    <div
                      className="flex gap-2 justify-start items-start text-start"
                      key={index}
                    >
                      <div className="h-[32px] w-[24px] p-[3px] justify-center items-center lg:flex hidden">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M1 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM8.003 13L15.073 5.929L13.66 4.515L8.003 10.172L5.174 7.343L3.76 8.757L8.003 13Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className=" p-[5px] flex justify-center items-center lg:hidden ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M0.777778 0H13.2222C13.4285 0 13.6263 0.0819442 13.7722 0.227806C13.9181 0.373667 14 0.571498 14 0.777778V13.2222C14 13.4285 13.9181 13.6263 13.7722 13.7722C13.6263 13.9181 13.4285 14 13.2222 14H0.777778C0.571498 14 0.373667 13.9181 0.227806 13.7722C0.0819442 13.6263 0 13.4285 0 13.2222V0.777778C0 0.571498 0.0819442 0.373667 0.227806 0.227806C0.373667 0.0819442 0.571498 0 0.777778 0ZM6.22456 10.1111L11.7234 4.61144L10.6244 3.51167L6.22456 7.91156L4.02422 5.71122L2.92444 6.811L6.22456 10.1111Z"
                            fill="white"
                          />
                        </svg>
                      </div>

                      <span className="text-[16px] lg:text-[24px] text-[#ECECEE] font-[600]  text-start leading-[1.2]">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                className="text-[#000000] text-[16px] md:text-[24px] font-[600] bg-[#FFFFFF] px-3 py-[12px] md:py-[14px] rounded-[100px] lg:h-[58px] flex z-10 leading-5 md:leading-normal hover:bg-[#FFFFFFCC] w-[186px] lg:w-[266px] text-center"
                variant="outline"
                onClick={() => {
                  router.push(plan.path);
                }}
              >
                {plan.action}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex px-5 pb-[112px]  md:pt-[20px] md:pb-[143px] flex-col justify-center items-center">
        <div className="relative w-full justify-center items-center flex-col overflow-hidden flex ">
          <div className="grad-callback h-[192px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
          <div className="w-full h-[115px] md:h-[200px] absolute top-0 bg-black"></div>
          <div className="absolute top-[115px] md:top-[200px] flex flex-col justify-center items-center gap-12 md:gap-[116px]">
            <div className="callback-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
          </div>
        </div>
        <div className=" w-full text-center items-center flex flex-col gap-[45px] md:gap-[72px] md:mt-[-120px]">
          <div className="flex flex-col gap-5 md:gap-[28px] text-center items-center md:max-w-[987px]">
            <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent text-[32px] font-[600] md:text-[60px] text-[#ECECEE] w-full text-center leading-normal">
              Win the never ending battle of Quality vs Speed
            </span>

            <span className="text-[16px] w-[252px] font-[300] md:text-[24px] text-[#ECECEE] md:font-[400] md:w-full">
              Accelerate your Mobile Testing Workflow with Quash
            </span>
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
  );
};

export default Pricing;
