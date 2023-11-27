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
    <div className="h-full">
      <Head>
        <title>🐞 Quash - Streamlining QA Processes 🚀</title>
        <meta
          name="description"
          content="Bug & Crash Reporting for Mobile Developers"
          key="desc"
        />
      </Head>
      <Hero />
      <Comparision />
      <Reporting />
      <Resolution />
      <Collaboration />
      <Integration />
      <CodeSection />
      <Callback />
      <Toaster />
    </div>
  );
}
