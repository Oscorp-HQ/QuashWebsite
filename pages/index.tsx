import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import SectionOne from "@/components/section_1";
import SectionSeven from "@/components/section_7";
import SectionThree from "@/components/section_3";
import SectionFour from "@/components/section_4";
import SectionFive from "@/components/section_5";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionOne />
        <SectionSeven />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </main>
      <Footer />
    </>
  );
}
