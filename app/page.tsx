import SmoothScroll from "@/components/SmoothScroll";
import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <Reveal><Skills /><Experience /><Projects /><Education /></Reveal>
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
