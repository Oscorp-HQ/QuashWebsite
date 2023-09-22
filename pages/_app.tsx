import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  Plus_Jakarta_Sans,
  Source_Code_Pro,
  Fira_Mono,
} from "@next/font/google";

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
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
