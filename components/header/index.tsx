import Image from "next/image";
import React, { useState } from "react";

import { Button } from "../ui/button";
import { List, X } from "@/lib/icons";
import { LoaderDialog, LoaderDialogContent } from "../ui/overlay-loader";
import { useRouter } from "next/router";

const mobileNav = [
  {
    label: "Home",
    path: "/",
    value: "home",
  },
  {
    label: "Upcoming",
    path: "/upcoming",
    value: "upcoming",
  },
  {
    label: "Team",
    path: "/team",
    value: "team",
  },
  {
    label: "Pricing",
    path: "/pricing",
    value: "pricing",
  },
  {
    label: "Sign in",
    path: "https://optimus.quashbugs.com",
    value: "signin",
  },
];

const Header = () => {
  const [selected, setSelected] = useState("Home");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="header fixed top-0 py-[14px] px-4 w-full flex justify-between items-center lg:px-[120px] md:py-3 z-50">
      <Image
        src="/logo-mobile.svg"
        alt="Quash Logo"
        width={63}
        height={16}
        priority
        className="flex md:hidden"
        onClick={() => {
          router.push("/");
        }}
      />
      <div className="flex gap-6 items-center">
        <Image
          src="/logo-mobile.svg"
          alt="Quash Logo"
          width={118}
          height={30}
          priority
          className="hidden md:flex"
          onClick={() => {
            router.push("/");
          }}
        />
        <div className="hidden md:flex gap-6 items-center">
          {mobileNav.map((nav, index) => (
            <Button
              key={index}
              className={`hover:text-gray-200 ${
                index === 4 ? "hidden" : "flex"
              } text-[16px] font-[500] leading-[20.8px] ${
                selected === nav.value ? "text-white" : "text-[#8A8894]"
              }`}
              variant="ghost"
              onClick={() => {
                setSelected(nav.value);
                router.push(nav.path);
              }}
            >
              {nav.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex gap-3 md:gap-6 items-center text-center">
        <span
          className="text-[12px] md:text-[16px] text-[#FFFFFF] font-[600] leading-[15px] md:leading-5 hover:cursor-pointer hover:text-[#FFFFFFCC]"
          onClick={() => {
            router.push("https://optimus.quashbugs.com");
          }}
        >
          Sign in
        </span>
        <Button
          className="text-[#000000] text-[12px] font-[600] leading-[15px] bg-[#FFFFFF] px-2 py-[6px] rounded-[100px] h-[28px] md:hidden hover:bg-[#FFFFFFCC]"
          variant="outline"
          onClick={() => {
            router.push("https://optimus.quashbugs.com/signup");
          }}
        >
          Get Started
        </Button>
        <Button
          className="text-[#000000] text-[16px] font-[600] leading-[20px] bg-[#FFFFFF] hidden px-4 py-[14px] rounded-[100px] h-[48px] md:flex hover:bg-[#FFFFFFCC]"
          variant="outline"
          onClick={() => {
            router.push("https://optimus.quashbugs.com/signup");
          }}
        >
          Get Started for Free
        </Button>
        <List
          size={24}
          color="#F7F8F8"
          className="flex md:hidden"
          onClick={() => {
            setOpen(true);
          }}
        />
      </div>
      {open && (
        <LoaderDialog open={true}>
          <LoaderDialogContent className="flex justify-center items-start p-0 h-full">
            <div className="w-full bg-black p-4 flex flex-col gap-1">
              <div className="flex justify-between items-center p-2">
                <span className="text-[12px] text-[#FFFFFF99] font-[500] leading-5">
                  MENU
                </span>
                <X
                  size={16}
                  color="#FFFFFF99"
                  onClick={() => {
                    setOpen(false);
                  }}
                />
              </div>
              {mobileNav.map((nav, index) => (
                <div
                  className="flex justify-start items-center p-2"
                  key={index}
                >
                  <span
                    className="text-[12px] text-white font-[500] leading-5 hover:cursor-pointer hover:text-[#FFFFFFCC]"
                    onClick={() => {
                      router.push(nav.path);
                      setOpen(false);
                    }}
                  >
                    {nav.label}
                  </span>
                </div>
              ))}
              <div className="flex justify-between items-center p-2">
                <Button
                  className="text-[#000000] text-[12px] font-[600] leading-[15px] bg-[#FFFFFF] px-2 py-[6px] rounded-[100px] h-[28px] md:hidden hover:bg-[#FFFFFFCC]"
                  variant="outline"
                  onClick={() => {
                    router.push("https://optimus.quashbugs.com/signup");
                  }}
                >
                  Get Started for free
                </Button>
              </div>
            </div>
          </LoaderDialogContent>
        </LoaderDialog>
      )}
    </div>
  );
};

export default Header;
