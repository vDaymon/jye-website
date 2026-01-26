import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Faq from './components/Faq'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="flex flex-col gap-20 pt-24 lg:pt-28">
        <Hero />
        <Services />
        <Gallery />
        <Projects />
        <Faq />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
