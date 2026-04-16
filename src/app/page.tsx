import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Academy from "@/components/Academy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Partners />
        <Academy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
