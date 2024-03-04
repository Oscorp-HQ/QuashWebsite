import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  Plus_Jakarta_Sans,
  Source_Code_Pro,
  Fira_Mono,
} from "@next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";
import router from "next/router";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});
export const sourceCode = Source_Code_Pro({
  subsets: ["latin"],
  weight: "400",
});

export const fira = Source_Code_Pro({
  subsets: ["latin"],
  weight: "400",
});
export default function App({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <main className={jakarta.className}>
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
        <Component {...pageProps} />
        <GoogleTagManager gtmId="G-QX5GGKZ7SJ" />
      </main>
    </Layout>
  );
}
