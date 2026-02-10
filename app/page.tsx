import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SatisfiedClients from "./components/SatisfiedClients";
import GalleryTab from "./components/GalleryTab";
import LogosCarousel from "./components/LogosCarousel";
import Projects from "./components/Projects";
import Faq from "./components/Faq";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="flex flex-col gap-20 pt-24 lg:pt-28">
        <Hero />
        <Services />
        <SatisfiedClients />
        <GalleryTab />
        <LogosCarousel />
        <Projects />
        <Faq />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
