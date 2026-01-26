import { motion } from 'framer-motion'

const handleScrollToServices = () => {
  const el = document.getElementById('services')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section id="hero" className="relative isolate h-[75vh] overflow-hidden -mt-[68px] mx-6 rounded-2xl">
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover"
        src="/webm/hero.webm"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 z-0 bg-black/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center gap-6 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 text-white"
        >
          <h1 className="text-center text-4xl font-extrabold uppercase tracking-wider text-white sm:text-5xl">
            ESTRUCTURAS METÁLICAS EN ANTIOQUIA
          </h1>
          <h2 className="max-w-3xl text-lg font-medium leading-7 text-white/90 sm:text-xl">
            Ingeniería, fabricación y montaje de estructuras metálicas certificadas para proyectos por contrato: edificios, vías, cerramientos y viviendas en Antioquia y el Área Metropolitana.
          </h2>
          <p className="max-w-2xl text-sm text-white/80 sm:text-base">
            Ejecutamos proyectos en acero estructural, cubiertas, guardarraíles viales, escaleras, cerramientos y puertas metálicas con cálculos avalados, trazabilidad de materiales y planes de mantenimiento.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              className="inline-flex min-w-[160px] items-center justify-center rounded-xl bg-[#2c6334] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#2c6334]/30 transition hover:bg-[#254f2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={handleScrollToServices}
            >
              Ver servicios
            </button>
            <a
              className="inline-flex min-w-[160px] items-center justify-center rounded-xl border border-white/80 bg-white px-6 py-3 text-base font-semibold text-[#2c6334] shadow-lg shadow-white/40 transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2c6334]"
              href="#projects"
            >
              Ver proyectos
            </a>
          </div>
        </motion.div>
      </div>

      {/* Eliminados los rectángulos decorativos de los lados */}
    </section>
  )
}
