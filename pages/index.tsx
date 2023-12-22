import Hero from "@/components/hero";
import Comparision from "@/components/comparision";
import Reporting from "@/components/reporting";
import Resolution from "@/components/resolution";
import Collaboration from "@/components/collaboration";
import Integration from "@/components/integration";
import Callback from "@/components/callback";
import CodeSection from "@/components/code";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

export default function Home() {
  return (
    <div className="h-full w-full overflow-hidden relative">
      <Head>
        <title>🐞 Quash - Streamlining QA Processes 🚀</title>
        <meta
          name="description"
          content="Bug & Crash Reporting for Mobile Developers"
          key="desc"
        />
        <meta property="image" content="/open-graph.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://quashbugs.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="🐞 Quash - Streamlining QA Processes 🚀"
        />
        <meta
          property="og:description"
          content="Bug & Crash Reporting for Mobile Developers"
        />
        <meta property="og:image" content="/open-graph.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="🐞 Quash - Streamlining QA Processes 🚀"
        />
        <meta
          name="twitter:description"
          content="Bug & Crash Reporting for Mobile Developers"
        />
        <meta name="twitter:image" content="/open-graph.png" />
      </Head>
      <Hero />
      <Comparision />
      <Reporting />
      <Resolution />
      <Collaboration />
      <Integration />
      <CodeSection />
      <div className="left-ellipse hidden md:flex absolute top-[425rem] -left-[10rem]" />
      <div className="left-sphere hidden md:flex absolute top-[440rem] -left-[2rem]" />
      <div className="right-ellipse hidden md:flex absolute top-[446rem] -right-[25rem] z-40" />
      <div className="right-sphere hidden md:flex absolute top-[444rem] right-[17rem] " />
      <Callback />
      <Toaster />
    </div>
  );
}
