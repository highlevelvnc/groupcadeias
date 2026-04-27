import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Differentials from "@/components/Differentials";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TaglineStrip from "@/components/TaglineStrip";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <TaglineStrip />
        <Services />
        <Differentials />
        <Projects />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
