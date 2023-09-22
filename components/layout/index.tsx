// components/Layout.js
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({ children }: any) {
  return (
    <div className="relative min-h-[100vh]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
