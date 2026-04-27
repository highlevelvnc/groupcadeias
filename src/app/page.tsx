import About from "@/components/About";
import CTA from "@/components/CTA";
import ClientsMarquee from "@/components/ClientsMarquee";
import Contact from "@/components/Contact";
import Differentials from "@/components/Differentials";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import TaglineStrip from "@/components/TaglineStrip";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <TaglineStrip />
        <Services />
        <Differentials />
        <Projects />
        <ClientsMarquee />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
