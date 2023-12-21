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
          <meta property="og:image" content="https://quashbugs.com/shake.svg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://quashbugs.com" />
        </Head>
        <Component {...pageProps} />
        <GoogleTagManager gtmId="G-QX5GGKZ7SJ" />
      </main>
    </Layout>
  );
}
