import Benefits from "@/components/benefits";
import Callback from "@/components/callback";
import CodeSection from "@/components/code";
import Collaboration from "@/components/collaboration";
import Integration from "@/components/integration";
import Reporting from "@/components/reporting";
import Resolution from "@/components/resolution";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import React from "react";

const Product = () => {
  const canonicalUrl = "https://quashbugs.com/product";
  return (
    <section>
      <Head>
        <title>Quash - Bug Reporting Features 🐞</title>
        <meta
          name="description"
          content="Quash automates bug reporting with a simple shake. It also assists in bug resolution by auto-capturing data points and giving AI-generated solutions."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Quash - Bug Reporting Features 🐞" />
        <meta
          property="og:description"
          content="Quash automates bug reporting with a simple shake. It also assists in bug resolution by auto-capturing data points and giving AI-generated solutions."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Quash_Website_Blurb.jpg" />
        <meta
          name="keywords"
          content="bug reporting in software testing, bug reporting tools, bug reporting tool, bug reporting, bug reporting template, jira bug reporting, bug reporting in Jira, iphone bug reporting, bug reporting tools in software testing, bug reporting software, Performance monitoring, bug report in software testing"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org/",
              "@type": "Product",
              "name": "Quash",
              "image": "https://quashbugs.com/_next/static/images/product-page-landing-image.svg",
              "description": "Quash is a comprehensive mobile testing solution designed to streamline your testing workflow, improve app quality, and speed up release cycles.",
              "brand": {
                "@type": "Brand",
                "name": "Quash"
              }
            }
          `}
        </script>
      </Head>
      <div className="h-full w-full overflow-hidden relative">
        <div className="flex md:px-[88px] mx-[18px] md:w-full pb-[112px]  md:pt-[230px] md:pb-[143px] flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="product-main-mob flex flex-col pt-[132px] gap-5 md:gap-[28px] text-center items-center justify-center"
          >
            <h1 className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent text-[32px] font-[600] md:text-[60px] text-[#ECECEE] w-full  leading-normal">
              Capture the complete picture <br /> with technical detailing in
              every report.
            </h1>
          </motion.div>
          <div className="product-main w-full text-center items-center flex flex-col gap-[45px] md:gap-[120px] md:mt-[-190px]">
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="relative w-full justify-center items-center flex-col overflow-hidden flex "
            >
              <div className="product-main grad-callback h-[192px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
              <div className="w-full h-[115px] md:h-[134px] absolute top-0 bg-black"></div>
              <div className=" absolute top-[115px] md:top-[134px] flex flex-col justify-center items-center gap-12 md:gap-[66px]">
                <div className="callback-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
                <div className="flex flex-col gap-5 md:gap-[28px] text-center items-center ">
                  <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent text-[32px] font-[600] md:text-[60px] text-[#ECECEE] w-full  leading-normal">
                    Capture the complete picture <br /> with technical detailing
                    in every report.
                  </span>
                </div>
              </div>
            </motion.div>{" "}
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <Image
                src="product-page-landing-image.svg"
                width={1337}
                height={701}
                alt=""
                className=""
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="product-youtube-video relative w-full max-w-6xl mx-auto mb-[48px]"
        >
          <div className="hero-video-frame aspect-w-16 aspect-h-9 ">
            <iframe
              className="hero-video-frame-content"
              style={{ aspectRatio: "16 / 9" }}
              src="https://www.youtube.com/embed/PnwNkHzPGQk?autoplay=1&mute=1&vq=hd1080"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              title="YouTube Video"
            ></iframe>
          </div>
        </motion.div>
        <Benefits />
        <Reporting />
        <Resolution />
        <Collaboration />
        <Integration />
        <CodeSection />
        <Callback />
      </div>
    </section>
  );
};

export default Product;
