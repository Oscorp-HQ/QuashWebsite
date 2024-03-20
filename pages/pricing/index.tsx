import { Button } from "@/components/ui/button";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { DemoRequestForm } from "@/components/contact-form";

import {
  AlertDialog,
  AlertDialogContent,

} from "@/components/ui/alert-dialog";
import { X } from "@/lib/icons";
import Benefits from "@/components/benefits";
import Capture from "@/components/capture";
import Trusted from "@/components/trusted";
const plans = [
  {
    label: "Free",
    cost: "",
    desc: "Test one application with unlimited bug and crash reports",
    includedBenefit: "",
    benefits: [
      "Auto-attached screenshots",
      "Precise crash logs",
      "Add 1 application",
      "Add up to 3 users",
      "1 month data retention",
      "All Integrations",
      "No limit on bug reports",
    ],
    action: "Get Started for Free",
    path: "https://optimus.quashbugs.com/signup",
  },
  {
    label: "Pro",
    annualCost: "160",
    cost: "200",
    desc: "Advanced features for teams shipping regular releases",
    includedBenefit: "All Free features, plus...",
    benefits: [
      "Auto-attached screen replay",
      "On-demand Integrations",
      "Add up to 3 applications",
      "Add up to 20 users",
      "Unlimited data retention",
      "Priority support",
    ],
    action: "Get Quash Pro",
    path: "https://optimus.quashbugs.com/subscription",
  },
  {
    label: "Custom",
    cost: "",
    desc: "Tailored plans and features for larger teams with custom needs",
    includedBenefit: "All Pro features, plus...",
    benefits: [
      "SSO Login",
      "Advanced user configurations",
      "No limit on applications",
      "No limits on users",
    ],
    action: "Contact Us",
    path: "",
  },
];

const Pricing = () => {
  const canonicalUrl = "https://quashbugs.com/pricing";
  const router = useRouter();
  const [formOpen, setFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedTab, setSelectedTab] = useState("annually");
  const tabs = ["Monthly", "Annually"];

  return (
    <section>
      <Head>
        <title>Quash - Product Subscriptions and Pricing</title>
        <meta name="description" content="Quash has 3 available subscription tiers: a free plan for testing a single app, a paid plan for product teams, and a customisable enterprise plan." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Quash - Product Subscriptions and Pricing" />
        <meta property="og:description" content="Quash has 3 available subscription tiers: a free plan for testing a single app, a paid plan for product teams, and a customisable enterprise plan." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Quash_Website_Blurb.jpg" />
        <meta name="keywords" content="bug reporting in software testing, bug reporting tools, bug reporting tool, bug reporting, bug reporting template, jira bug reporting, bug reporting in Jira, iphone bug reporting, bug reporting tools in software testing, bug reporting software, Performance monitoring, bug report in software testing" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Pricing",
            "name": "Quash",
            "description": "Quash has 3 available subscription tiers: a free plan for testing a single app, a paid plan for product teams, and a customisable enterprise plan.",
            
          })}
        </script>
      </Head>
      <div className="h-full w-full overflow-hidden relative">
        <div className="relative flex flex-col items-center overflow-hidden pb-[40px]">
          <div className="left-ellipse hidden md:flex absolute top-[25rem] -left-[10rem]" />
          <div className="left-sphere hidden md:flex absolute top-[40rem] -left-[2rem]" />
          <div className="right-ellipse hidden md:flex absolute top-[46rem] -right-[25rem]" />
          <div className="right-sphere hidden md:flex absolute top-[44rem] right-[17rem]" />

          <div className=" pt-[130px]  md:pt-[236px]   w-full text-center items-center justify-center flex flex-col ">
            <div className="flex flex-col text-center items-center justify-center w-full mb-[43px] lg:mb-[180px] lg:px-[200px] px-[18px]">
              <h1 className="justify-center bg-gradient-to-b  from-white to-gray-500 bg-clip-text text-transparent flex  text-[24px] font-[700] md:text-[66px] text-[#ECECEE] md:font-[600] w-full text-center leading-[1.25] ">
                Start testing your apps with Quash for free today
              </h1>
            </div>
            <div className="pricing-main-container  justify-center items-center lg:gap-10 gap-4 px-4">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`z-10 flex flex-col items-center justify-between lg:pl-10 lg:pr-8 px-4 lg:pt-10 pt-6 lg:pb-14 pb-[34px] lg:rounded-[40px] rounded-2xl border-solid ${
                    index === 1 ? "border-[#ffffff80] border" : "border-0"
                  } bg-[#d9d9d90f]  lg:h-[732px] lg:w-[400px] h-[500px] w-[328px]`}
                >
                  <div
                    className={`flex flex-col ${
                      index === 1
                        ? "lg:gap-0 gap-0"
                        : "lg:gap-[77px] gap-[30px]"
                    }`}
                  >
                    <div className="flex flex-col lg:gap-3 gap-2 text-start">
                      <div className="card-heading lg:text-[36px] text-[24px] text-[#ECECEE] font-[600] leading-10 flex text-center">
                        <span className="lg:text-[36px] text-[24px] text-[#ECECEE] font-[600] leading-10">
                          {plan.label}{" "}
                        </span>

                        {index === 1 && (
                          <div className="lg:text-[24px] text-[14px] text-[#FFFFFF] font-[300] leading-[1.2] flex items-center">
                            <span className="pl-[10px] lg:text-[24px] text-[14px] text-[#FFFFFF] font-[600] leading-[1.2] text-4xl">
                              {`($${
                                selectedTab === "annually"
                                  ? plan.annualCost
                                  : plan.cost
                              }/Month)`}
                            </span>

                            {selectedTab === "annually" && (
                              <div className="flex items-center">
                                <span className="discount-annually-plan text-white font-inter text-[12px] font-semibold p-[8px] ml-[12px] leading-[1.2] ">
                                  - 20%
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      <span className="lg:text-[20px] text-[14px] text-[#FFFFFF] font-[300] leading-[1.2]">
                        {plan.desc}
                      </span>
                    </div>
                    {index === 1 && (
                      <div className="tab flex justify-center">
                        <div className="tab-content">
                          {tabs.map((tab, tabIndex) => (
                            <p
                              key={tabIndex}
                              className={`text-white font-inter font-semibold text-[10px] w-[72px] h-[20px] cursor-pointer px-[10px] py-[4px] relative z-10 flex items-center justify-center ${
                                selectedTab === tab.toLowerCase()
                                  ? "active-plan-tab"
                                  : ""
                              }`}
                              onClick={() => setSelectedTab(tab.toLowerCase())}
                            >
                              {tab}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col gap-4 lg:gap-6 justify-start items-start">
                      {plan?.includedBenefit && (
                        <span className="text-[16px] lg:text-[20px] text-[#ECECEE] font-[600]  text-start leading-[1.2]">
                          {plan.includedBenefit}
                        </span>
                      )}
                      {plan.benefits.map((benefit, index) => (
                        <div
                          className="flex gap-2 justify-start items-center text-start"
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

                          <span className="text-[16px] lg:text-[20px] text-[#ECECEE] font-[600]  text-start leading-[1.2]">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button
                    className={` ${
                      index === 1
                        ? "text-[#000000] bg-[#FFFFFF]"
                        : "text-white bg-[#ffffff33]"
                    } text-[16px] lg:text-[24px] font-[600]  hover:bg-[#FFFFFF] hover:text-[#000000] px-3 py-[12px] md:py-[14px] rounded-[100px] lg:h-[58px] flex z-10 leading-5 lg:leading-normal w-[186px] lg:w-[266px] text-center border-none`}
                    variant="outline"
                    onClick={() => {
                      if (index !== 2) {
                        router.push(plan.path);
                      } else {
                        setFormOpen(true);
                      }
                    }}
                  >
                    {plan.action}
                  </Button>
                </div>
              ))}
            </div>
          </div>
          {/* </div> */}

          {(formOpen || formSubmitted) && (
            <AlertDialog open={formOpen}>
              <AlertDialogContent className="flex justify-center items-center md:p-[100px] p-10 w-full max-w-[960px] h-full">
                <div
                  className={`relative border-[2px] border-solid border-gray-500 w-full ${
                    !formSubmitted ? "demo-container bg-[#E0EED5]" : "submitted"
                  }  `}
                >
                  <div className="w-full gap-6 md:gap-[40px]">
                    {!formSubmitted && (
                      <div className="demo-title flex justify-between items-center">
                        Contact Us
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
                        <DemoRequestForm setFormSubmitted={setFormSubmitted} />
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
        </div>
        <Benefits />
        <Capture />
        <div className="pricing-page-gap"></div>
        <Trusted />

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
    </section>
  );
};

export default Pricing;
