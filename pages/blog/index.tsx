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
  const [formOpen, setFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <div className="relative flex flex-col items-center">
      <Head>
        <title>🐞 Quash - Streamlining QA Processes 🚀</title>
        <meta
          name="description"
          content="Bug & Crash Reporting for Mobile Developers"
          key="desc"
        />
      </Head>
      <div className="absolute left-0 right-0 top-0 md:top-[300px] bottom-0 w-full bg-[url('/Gradient.svg')] bg-no-repeat hidden md:flex" />
      <div className=" pt-[130px]  md:pt-[236px]   w-full text-center items-center justify-center flex flex-col ">
        <div className="flex flex-col text-center items-center justify-center w-full mb-[43px] lg:mb-[180px] lg:px-[200px] px-[18px]">
          <h1 className="justify-center bg-gradient-to-b  from-white to-gray-500 bg-clip-text text-transparent flex  text-[24px] font-[700] md:text-[66px] text-[#ECECEE] md:font-[600] w-full text-center leading-[1.25] ">
            Blogs show up here.
          </h1>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center lg:gap-10 gap-4 px-4">
            <h1 className="text-white">Hello</h1>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
