import { motion } from 'framer-motion'
import AnimateIn from './AnimateIn'

const services = [
  {
    title: 'Suministro, fabricación e instalación',
    desc: 'Desarrollamos estructuras metálicas, pérgolas, pasamanos, escaleras y puertas a medida; controlamos toda la cadena de valor para asegurar acabados premium y entregas puntuales.',
    image: '/imgs/Pasamanos vehiculares.jpeg',
    alt: 'Estructura metálica instalada a medida',
  },
  {
    title: 'Mantenimiento de estructuras metálicas',
    desc: 'Realizamos diagnósticos preventivos, correcciones y repintado especializado para prolongar la vida útil de estructuras metálicas en interiores y exteriores.',
    image: '/imgs/EVIDENCIA DE TRABAJO 2.jpeg',
    alt: 'Equipo realizando mantenimiento metálico',
  },
]

const particleClasses = Array.from({ length: 28 }).map((_, idx) =>
  `absolute block rounded-md border border-white/40 bg-white/80 shadow-md shadow-white/30 ${
    idx % 3 === 0 ? 'w-6 h-6 animate-float-slow' : idx % 3 === 1 ? 'w-8 h-8 animate-float-med' : 'w-5 h-5 animate-float-fast'
  }`
)

const particlePositions = [
  'top-4 left-[8%]',
  'top-[12%] left-[24%]',
  'top-[5%] right-[18%]',
  'top-[28%] left-[12%]',
  'top-[32%] right-[10%]',
  'top-[42%] left-[30%]',
  'top-[46%] right-[26%]',
  'top-[58%] left-[18%]',
  'top-[60%] right-[8%]',
  'top-[68%] left-[28%]',
  'top-[75%] right-[22%]',
  'bottom-[12%] left-[14%]',
  'bottom-[18%] right-[16%]',
  'bottom-[8%] left-[32%]',
  'bottom-[6%] right-[28%]',
  'top-[20%] left-[45%]',
  'top-[35%] right-[40%]',
  'top-[55%] left-[46%]',
  'top-[70%] right-[45%]',
  'bottom-[30%] left-[44%]',
  'bottom-[15%] right-[44%]',
  'top-[18%] left-[60%]',
  'top-[28%] right-[60%]',
  'top-[40%] left-[62%]',
  'top-[52%] right-[64%]',
  'top-[65%] left-[58%]',
  'bottom-[25%] right-[58%]',
  'bottom-[10%] left-[55%]',
]

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#2c6334] px-0 py-16 text-white">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-45 bg-gradient-to-br from-white/10 via-transparent to-white/10" />
        {particlePositions.map((pos, idx) => (
          <span key={pos} className={`z-10 ${particleClasses[idx % particleClasses.length]} ${pos}`} />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-black/70 via-black/40 to-transparent blur-md" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-black/60 via-black/35 to-transparent blur-md" />

      <div className="relative z-20 mx-auto max-w-6xl px-6">
        <AnimateIn>
          <h2 className="text-center text-3xl font-bold text-white">Nuestros servicios</h2>
        </AnimateIn>

        <div className="mt-10 grid gap-6">
          {services.map((s, i) => (
            <AnimateIn
              key={s.title}
              className="h-full rounded-3xl border border-white/15 bg-white px-6 py-6 text-left text-slate-700 shadow-[0_28px_72px_-24px_rgba(6,20,12,0.6)] transition hover:-translate-y-2 hover:shadow-[0_36px_96px_-28px_rgba(6,20,12,0.7)]"
              delay={i * 0.08}
            >
              <motion.div whileHover={{ y: -4 }} className="flex h-full flex-col gap-6 overflow-hidden rounded-2xl lg:flex-row lg:items-stretch">
                <div className="lg:w-2/5">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    className="h-56 w-full object-cover transition duration-500 hover:scale-105 lg:h-full"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-3 lg:w-3/5">
                  <h3 className="text-2xl font-semibold text-[#0b2915]">{s.title}</h3>
                  <p className="text-base text-slate-600">{s.desc}</p>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
