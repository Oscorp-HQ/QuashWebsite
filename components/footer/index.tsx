import { Copyright, MapPin, PaperPlaneTilt, X } from "@/lib/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { DemoRequestForm } from "@/components/contact-form";
import Link from "next/link";

const footerQuash = [
  {
    label: "Home",
    title: "Quash home",
    route: "/",
  },
  {
    label: "Product",
    title: "Product",
    route: "/product",
  },
  {
    label: "Pricing",
    title: "Pricing",
    route: "/pricing",
  },
  {
    label: "Roadmap",
    title: "Roadmap",
    route: "/roadmap",
  },
];

const footerResources = [
  {
    label: "Blog",
    route: "/blog",
  },
  {
    label: "Developer guide",
    route:
      "https://quash.notion.site/Quash-SDK-Developer-Documentation-534ebd4c995040b2ae536dd139609d47?pvs=4",
  },
  {
    label: "Refund & Cancellation",
    route: "/refund-and-cancellation-policy",
  },
  {
    label: "Company details",
    route: "/company-details",
  },
];

const footerSupport = [
  {
    label: "Contact Us",
    route: "",
  },
  {
    label: "hello@quashbugs.com",
    route: "mailto:hello@quashbugs.com",
  },
];

const footerSocialMedia = [
  {
    img: "/linkedIn.svg",
    label: "linkedIn",
    route: "https://www.linkedin.com/company/quash-bugs/",
  },
  {
    img: "/youtube.svg",
    label: "youtube",
    route: "https://www.youtube.com/@QuashBugs",
  },
  {
    img: "/github.svg",
    label: "github",
    route: "https://www.youtube.com/@QuashBugs",
  },
];

const Footer = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const router = useRouter();

  return (
    <>
      <div className="footer-container bottom-0 w-full h-full justify-between  px-[112px] py-[80px] text-[16px] font-[400] text-[#ECECEE] lg:text-[24px] bg-[#0D0D0D] ">
        <div className="footer-logo-container flex flex-col align-center justify-between">
          <div>
            <Image
              src="/Quash_logo_yellow.svg"
              alt="Quash Logo"
              width={95}
              height={24}
              priority
              className="flex md:hidden"
            />
            <Image
              src="/Quash_logo_yellow.svg"
              alt="Quash Logo"
              width={118}
              height={30}
              priority
              className="hidden md:flex"
            />
          </div>
          <p className="text-[#9E9E9E] text-base font-normal leading-7 tracking-wider">
            Built for devs, by devs
          </p>
        </div>
        <div className="footer-link-container flex flex-col md:flex-row md:justify-between md:items-start">
          <div className="footer-link flex flex-col gap-6 md:gap-8 justify-center items-start text-center md:justify-start w-[200px]">
            <p className="text-white font-semibold text-lg">Quash</p>
            {footerQuash.map((nav, index) => (
              <Link
                key={index}
                href={nav.route}
                passHref={true}
                legacyBehavior={true}
              >
                <a
                  className="hover:cursor-pointer text-[#9E9E9E]  text-base font-medium link-hover"
                  title={`Visit ${nav.title} page`}
                >
                  {nav.label}
                </a>
              </Link>
            ))}
          </div>
          <div className="footer-link flex flex-col gap-6 md:gap-8 justify-center md:justify-start items-start text-center w-[200px]">
            <p className="text-white font-semibold text-lg">Resources</p>
            {footerResources.map((nav, index) => {
              return (
                <Link
                  key={index}
                  href={nav.route}
                  passHref={true}
                  legacyBehavior={true}
                >
                  <a
                    className="hover:cursor-pointer text-[#9E9E9E]  text-base font-medium link-hover"
                    title={`Visit ${nav.label} page`}
                  >
                    {nav.label}
                  </a>
                </Link>
              );
            })}
          </div>
          <div className="footer-link flex flex-col gap-6 md:gap-8 justify-center items-start md:justify-start">
            <div className="flex flex-col gap-[22px] justify-start">
              <p className="text-white  font-semibold text-lg">Support</p>

              <Link
                className="text-[#9E9E9E]  text-base font-medium link-hover"
                onClick={() => setFormOpen(true)}
                href={""}
              >
                contact us
              </Link>
              <Link
                href={"mailto:hello@quashbugs.com"}
                className="text-[#9E9E9E]  text-base font-medium link-hover"
              >
                hello@quashbugs.com
              </Link>
              {(formOpen || formSubmitted) && (
                <AlertDialog open={formOpen}>
                  <AlertDialogContent className="flex justify-center items-center md:p-[100px] p-10 w-full max-w-[960px] h-full">
                    <div
                      className={`relative border-[2px] border-solid border-gray-500 w-full ${
                        !formSubmitted
                          ? "demo-container bg-[#E0EED5]"
                          : "submitted"
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
                            <DemoRequestForm
                              setFormSubmitted={setFormSubmitted}
                            />
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
          </div>
        </div>
        <div className="footer-bottom-container flex justify-between align-center border-t border-[#424242]">
          <div className="text-[#747474] flex gap-3  pt-[24px]">
            {footerSocialMedia.map((item, index) => (
              <Link
                key={index}
                href={item.route}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  width={24}
                  height={24}
                  className="h-6 w-6 "
                />
              </Link>
            ))}
          </div>
          <div className="text-[#747474] ">
            <p>
              <Link href="/terms-and-conditions" className="link-hover">Terms</Link>{" "}
              <span className="px-[12px]">|</span>{" "}
              <Link href="/privacy" className="link-hover">Privacy</Link>
            </p>
          </div>
          <div>
            <p className="text-[#747474]">
              &#169; 2024 Brisk Labs, Inc. All rights reserved
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom-container-main px-[48px] flex justify-between align-center border-t border-[#424242]">
        <div className="text-[#747474] flex gap-3 ">
          {footerSocialMedia.map((item, index) => (
            <Link
              key={index}
              href={item.route}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={item.img}
                alt={item.label}
                height={24}
                width={24}
                className="h-6 w-6 link-hover"
              />
            </Link>
          ))}
        </div>
        <div className="text-[#747474]">
          <p></p>
        </div>
        <div>
          <p className="text-[#747474]">
            &#169; 2024 Brisk Labs, Inc. All rights reserved{" "}
            <span className="px-[12px]">|</span>{" "}
            <Link href="/terms-and-conditions " className="link-hover">Terms</Link>{" "}
            <span className="px-[12px]">|</span>{" "}
            <Link href="/privacy" className="link-hover">Privacy</Link>
          </p>
        </div>
      </div>
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
    </>
  );
};

export default Footer;
