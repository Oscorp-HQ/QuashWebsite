import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import Link from "next/link";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="relative flex flex-col gap-[56px] md:gap-0 items-center overflow-hidden pb-[41px] md:pb-[150px]">
      <div className="left-ellipse hidden md:flex absolute top-[15rem] -left-[10rem]" />
      <div className="left-sphere hidden md:flex absolute top-[30rem] -left-[2rem]" />
      <div className="right-ellipse hidden md:flex absolute top-[36rem] -right-[25rem]" />
      <div className="right-sphere hidden md:flex absolute top-[34rem] right-[17rem]" />
      <div className="z-49 watson-banner md:min-h-[124px] min-h-[85px] mt-[56px] md:mt-[72px] ">
       <Link href={"/watson"}>
       <div className="watson-banner-content lg:px-[120px] px-4 md:py-[24px] py-4 ">
          <div className="flex flex-row">
            <div>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.984 22.7976C30.9865 23.1979 30.8648 23.5892 30.6358 23.9175C30.4068 24.2458 30.0817 24.4951 29.7052 24.6311L23.3665 26.9629L21.0348 33.2966C20.8967 33.6718 20.6468 33.9955 20.319 34.2242C19.9911 34.4529 19.601 34.5755 19.2013 34.5755C18.8015 34.5755 18.4114 34.4529 18.0835 34.2242C17.7557 33.9955 17.5059 33.6718 17.3678 33.2966L15.0299 26.9702L8.69488 24.6385C8.31975 24.5004 7.996 24.2506 7.76731 23.9227C7.53863 23.5948 7.41602 23.2047 7.41602 22.805C7.41602 22.4052 7.53863 22.0151 7.76731 21.6873C7.996 21.3594 8.31975 21.1096 8.69488 20.9715L15.0336 18.6397L17.3653 12.306C17.5034 11.9308 17.7532 11.6071 18.0811 11.3784C18.409 11.1497 18.7991 11.0271 19.1988 11.0271C19.5986 11.0271 19.9887 11.1497 20.3165 11.3784C20.6444 11.6071 20.8942 11.9308 21.0323 12.306L23.3641 18.6446L29.6978 20.9764C30.0737 21.1104 30.3991 21.3574 30.6293 21.6834C30.8595 22.0094 30.9834 22.3985 30.984 22.7976ZM24.1114 11.0161H26.075V12.9797C26.075 13.2401 26.1785 13.4898 26.3626 13.6739C26.5467 13.8581 26.7964 13.9615 27.0568 13.9615C27.3172 13.9615 27.5669 13.8581 27.751 13.6739C27.9352 13.4898 28.0386 13.2401 28.0386 12.9797V11.0161H30.0022C30.2626 11.0161 30.5123 10.9127 30.6964 10.7286C30.8805 10.5444 30.984 10.2947 30.984 10.0343C30.984 9.77395 30.8805 9.52423 30.6964 9.34011C30.5123 9.15599 30.2626 9.05255 30.0022 9.05255H28.0386V7.08897C28.0386 6.82858 27.9352 6.57886 27.751 6.39474C27.5669 6.21062 27.3172 6.10718 27.0568 6.10718C26.7964 6.10718 26.5467 6.21062 26.3626 6.39474C26.1785 6.57886 26.075 6.82858 26.075 7.08897V9.05255H24.1114C23.8511 9.05255 23.6013 9.15599 23.4172 9.34011C23.2331 9.52423 23.1297 9.77395 23.1297 10.0343C23.1297 10.2947 23.2331 10.5444 23.4172 10.7286C23.6013 10.9127 23.8511 11.0161 24.1114 11.0161ZM34.9111 14.9433H33.9294V13.9615C33.9294 13.7011 33.8259 13.4514 33.6418 13.2673C33.4577 13.0832 33.2079 12.9797 32.9476 12.9797C32.6872 12.9797 32.4375 13.0832 32.2533 13.2673C32.0692 13.4514 31.9658 13.7011 31.9658 13.9615V14.9433H30.984C30.7236 14.9433 30.4739 15.0467 30.2897 15.2309C30.1056 15.415 30.0022 15.6647 30.0022 15.9251C30.0022 16.1855 30.1056 16.4352 30.2897 16.6193C30.4739 16.8034 30.7236 16.9069 30.984 16.9069H31.9658V17.8887C31.9658 18.1491 32.0692 18.3988 32.2533 18.5829C32.4375 18.767 32.6872 18.8705 32.9476 18.8705C33.2079 18.8705 33.4577 18.767 33.6418 18.5829C33.8259 18.3988 33.9294 18.1491 33.9294 17.8887V16.9069H34.9111C35.1715 16.9069 35.4213 16.8034 35.6054 16.6193C35.7895 16.4352 35.8929 16.1855 35.8929 15.9251C35.8929 15.6647 35.7895 15.415 35.6054 15.2309C35.4213 15.0467 35.1715 14.9433 34.9111 14.9433Z"
                  fill="white"
                />
                <path
                  d="M30.984 22.7976C30.9865 23.1979 30.8648 23.5892 30.6358 23.9175C30.4068 24.2458 30.0817 24.4951 29.7052 24.6311L23.3665 26.9629L21.0348 33.2966C20.8967 33.6718 20.6468 33.9955 20.319 34.2242C19.9911 34.4529 19.601 34.5755 19.2013 34.5755C18.8015 34.5755 18.4114 34.4529 18.0835 34.2242C17.7557 33.9955 17.5059 33.6718 17.3678 33.2966L15.0299 26.9702L8.69488 24.6385C8.31975 24.5004 7.996 24.2506 7.76731 23.9227C7.53863 23.5948 7.41602 23.2047 7.41602 22.805C7.41602 22.4052 7.53863 22.0151 7.76731 21.6873C7.996 21.3594 8.31975 21.1096 8.69488 20.9715L15.0336 18.6397L17.3653 12.306C17.5034 11.9308 17.7532 11.6071 18.0811 11.3784C18.409 11.1497 18.7991 11.0271 19.1988 11.0271C19.5986 11.0271 19.9887 11.1497 20.3165 11.3784C20.6444 11.6071 20.8942 11.9308 21.0323 12.306L23.3641 18.6446L29.6978 20.9764C30.0737 21.1104 30.3991 21.3574 30.6293 21.6834C30.8595 22.0094 30.9834 22.3985 30.984 22.7976ZM24.1114 11.0161H26.075V12.9797C26.075 13.2401 26.1785 13.4898 26.3626 13.6739C26.5467 13.8581 26.7964 13.9615 27.0568 13.9615C27.3172 13.9615 27.5669 13.8581 27.751 13.6739C27.9352 13.4898 28.0386 13.2401 28.0386 12.9797V11.0161H30.0022C30.2626 11.0161 30.5123 10.9127 30.6964 10.7286C30.8805 10.5444 30.984 10.2947 30.984 10.0343C30.984 9.77395 30.8805 9.52423 30.6964 9.34011C30.5123 9.15599 30.2626 9.05255 30.0022 9.05255H28.0386V7.08897C28.0386 6.82858 27.9352 6.57886 27.751 6.39474C27.5669 6.21062 27.3172 6.10718 27.0568 6.10718C26.7964 6.10718 26.5467 6.21062 26.3626 6.39474C26.1785 6.57886 26.075 6.82858 26.075 7.08897V9.05255H24.1114C23.8511 9.05255 23.6013 9.15599 23.4172 9.34011C23.2331 9.52423 23.1297 9.77395 23.1297 10.0343C23.1297 10.2947 23.2331 10.5444 23.4172 10.7286C23.6013 10.9127 23.8511 11.0161 24.1114 11.0161ZM34.9111 14.9433H33.9294V13.9615C33.9294 13.7011 33.8259 13.4514 33.6418 13.2673C33.4577 13.0832 33.2079 12.9797 32.9476 12.9797C32.6872 12.9797 32.4375 13.0832 32.2533 13.2673C32.0692 13.4514 31.9658 13.7011 31.9658 13.9615V14.9433H30.984C30.7236 14.9433 30.4739 15.0467 30.2897 15.2309C30.1056 15.415 30.0022 15.6647 30.0022 15.9251C30.0022 16.1855 30.1056 16.4352 30.2897 16.6193C30.4739 16.8034 30.7236 16.9069 30.984 16.9069H31.9658V17.8887C31.9658 18.1491 32.0692 18.3988 32.2533 18.5829C32.4375 18.767 32.6872 18.8705 32.9476 18.8705C33.2079 18.8705 33.4577 18.767 33.6418 18.5829C33.8259 18.3988 33.9294 18.1491 33.9294 17.8887V16.9069H34.9111C35.1715 16.9069 35.4213 16.8034 35.6054 16.6193C35.7895 16.4352 35.8929 16.1855 35.8929 15.9251C35.8929 15.6647 35.7895 15.415 35.6054 15.2309C35.4213 15.0467 35.1715 14.9433 34.9111 14.9433Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <h3 className="watson-heading-text  text-[16px] md:text-[32px]">
                Introducing{" "}
                <span className="watson-heading-text-main  text-[16px] md:text-[32px]">Watson!</span>
              </h3>
              <p className="sub-heading-watson text-[12px] md:text-[24px] md:w-[620px] w-[160px]  ">
                Our upcoming AI-Driven End-to-End Testing Platform.
              </p>
            </div>
          </div>
          <div>
            <svg
              width="70"
              height="42"
              viewBox="0 0 70 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
               className="md:flex hidden"
            >
              <path
                d="M48.9996 1L68.9996 21M68.9996 21L48.9996 41M68.9996 21H1.42383"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="36"
              height="22"
              viewBox="0 0 70 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden flex"
            >
              <path
                d="M48.9996 1L68.9996 21M68.9996 21L48.9996 41M68.9996 21H1.42383"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        </Link>
      </div>
      <div className=" pt-[11px] px-[19px]  md:pt-[144px] lg:px-[242px] md:pb-[112px] w-full text-center items-center justify-center flex flex-col gap-[32px] md:gap-[72px]">
        <div className="flex flex-col gap-8 md:gap-[28px] text-center items-center justify-center w-full">
          <h1 className="justify-center max-w-[323px] md:max-w-[1024px] bg-gradient-to-b px-7 from-white to-gray-500 bg-clip-text text-transparent flex  text-[32px] font-[600] md:text-[66px] text-[#ECECEE] md:font-[600] w-full text-center leading-[1.25] ">
            Mobile Testing should not be slow and tangled
          </h1>

          <p className="justify-center text-[16px] w-[290px] font-[300] flex md:text-[24px] text-[#ECECEE] md:font-[400] md:w-full md:px-[100px]">
            We’re on a mission to make it smooth and simple
          </p>
        </div>
        <Button
          className="text-[#000000] text-[16px] md:text-[24px] font-[600] bg-[#FFFFFF] px-4 py-2 md:py-[14px] rounded-[100px] lg:h-[58px] flex z-10 leading-none md:leading-normal hover:bg-[#FFFFFFCC] "
          variant="outline"
          aria-label="Sign up for free"
          onClick={() => {
            router.push("https://optimus.quashbugs.com/signup");
          }}
        >
          Get Started for Free
        </Button>
      </div>
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="hero-video-frame aspect-w-16 aspect-h-9 ">
          <iframe
            className="hero-video-frame-content"
            style={{ aspectRatio: "16 / 9" }}
            src="https://www.youtube.com/embed/PnwNkHzPGQk?autoplay=1&mute=1&vq=hd1080"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            title="Mobile Testing Overview - Quash"
          ></iframe>
          <p className="sr-only">
            Video description: This video provides an overview of mobile testing
            procedures and best practices, showcasing how Quash can streamline
            these processes for your development team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
