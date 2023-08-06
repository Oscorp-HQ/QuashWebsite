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
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);

  const handleScroll = (targetId: any) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Header
        handleScroll={handleScroll}
        formOpen={formOpen}
        setFormOpen={setFormOpen}
      />
      <main>
        <section id="home">
          <Hero formOpen={formOpen} setFormOpen={setFormOpen} />
        </section>
        <SectionOne />
        <SectionSeven />
        <section id="product">
          <SectionThree />
        </section>

        <SectionFour />
        <SectionFive setFormOpen={setFormOpen} />
      </main>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}
