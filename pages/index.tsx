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
import Streamline from "@/components/streamline";
import Agile from "@/components/agile";
import Capture from "@/components/capture";
import Trusted from "@/components/trusted";
import Benefits from "@/components/benefits";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Quash - Streamlining QA Processes 🚀</title>
        <meta name="description" content=" Quash is a developer tool built to automate the bug reporting process by capturing screenshots, recordings, crash logs, and more." />
        <meta property="og:url" content="https://quashbugs.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Quash - Streamlining QA Processes 🚀" />
        <meta property="og:description" content="Quash is a developer tool built to automate the bug reporting process by capturing screenshots, recordings, crash logs, and more." />
        <meta property="og:image" content="/open-graph.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quash - Streamlining QA Processes 🚀" />
        <meta name="twitter:description" content="Quash is a developer tool built to automate the bug reporting process by capturing screenshots, recordings, crash logs, and more." />
        <meta name="twitter:image" content="/open-graph.png" />
        <link rel="canonical" href="https://quashbugs.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebSite",
            "name": "Quash",
            "description": "Quash is a developer tool built to automate the bug reporting process by capturing screenshots, recordings, crash logs, and more.",
            "url": "https://quashbugs.com",
            "applicationCategory": "Developer Tools",
            "screenshot": "/open-graph.png",
          })}
        </script>
      </Head>
      <div className="h-full w-full overflow-hidden relative">
        <Hero />
        <Trusted />
        <Streamline />
        <Benefits />
        <Agile />
        <Comparision />
        <Capture />
        <Integration />
        <CodeSection />
        <div className="left-ellipse hidden md:flex absolute top-[425rem] -left-[10rem]" />
        <div className="left-sphere hidden md:flex absolute top-[440rem] -left-[2rem]" />
        <div className="right-ellipse hidden md:flex absolute top-[446rem] -right-[25rem] z-40" />
        <div className="right-sphere hidden md:flex absolute top-[444rem] right-[17rem] " />
        <Callback />
        <Toaster />
      </div>
    </div>
  );
}
