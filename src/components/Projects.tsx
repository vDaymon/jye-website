import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimateIn from './AnimateIn'

const pergolaFolder = '/imgs/pergola del retiro'
const pergolaImageNames = ['PERGOLARETIRO.jpeg', 'PergolaenelRetiro.jpeg', 'pergola4.jpeg', 'pergola5.jpeg']

const pergolaImages = pergolaImageNames.map((name) => `${encodeURI(pergolaFolder)}/${encodeURIComponent(name)}`)

const pasamanosFolder = '/imgs/pasamanos vehicular'
const pasamanosImageNames = ['PasamanosenviaSan Luis.jpeg', 'Pasamanosvehiculares.jpeg']

const pasamanosImages = pasamanosImageNames.map((name) => `${encodeURI(pasamanosFolder)}/${encodeURIComponent(name)}`)

const fachadaFolder = '/imgs/fachada crista'
const fachadaImageNames = ['CRISTA.jpeg', 'FACHADA.jpeg', 'FachadaenCRISTA.jpeg']

const fachadaImages = fachadaImageNames.map((name) => `${encodeURI(fachadaFolder)}/${encodeURIComponent(name)}`)

const projects = [
  {
    id: 1,
    title: 'Pérgola Moderna',
    desc: 'Pérgola metálica artesanal para terraza residencial; estructura liviana en acero con policarbonato filtrante y drenajes ocultos.',
    date: '2025-01-10',
    images: [
      ...pergolaImages,
    ],
  },
  {
    id: 2,
    title: 'Pasamanos Vehicular',
    desc: 'Baranda metálica tipo guardarraíl para vía rural; postes y vigas galvanizadas que controlan desvíos y evitan caídas en taludes.',
    date: '2025-02-22',
    images: pasamanosImages,
  },
  {
    id: 3,
    title: 'Fachada en Crista',
    desc: 'Fachada ventilada en edificio Crista: subestructura metálica, vidrio templado y sellos perimetrales para confort y eficiencia.',
    date: '2025-03-05',
    images: fachadaImages,
  },
]

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null)
  const [slideIndex, setSlideIndex] = useState(0)

  const openProject = (id: number) => {
    setSelected(id)
    setSlideIndex(0)
  }
  const closeProject = () => setSelected(null)

  const sel = projects.find((p) => p.id === selected) || null
  const showPrev = () => {
    if (!sel) return
    setSlideIndex((prev) => (prev - 1 + sel.images.length) % sel.images.length)
  }
  const showNext = () => {
    if (!sel) return
    setSlideIndex((prev) => (prev + 1) % sel.images.length)
  }

  return (
    <section id="projects" className="relative px-6 bg-[#4a7c57] py-16 overflow-hidden">
      {/* Logos decorativos solo sobre el fondo, ahora más grandes y rotados */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} aria-hidden="true">
        <img src="/imgs/logos/logo.png" alt="logo decorativo" style={{ position: 'absolute', top: '2%', left: '5%', width: 180, transform: 'rotate(-15deg)' }} />
        <img src="/imgs/logos/logo.png" alt="logo decorativo" style={{ position: 'absolute', top: '55%', left: '12%', width: 220, transform: 'rotate(20deg)' }} />
        <img src="/imgs/logos/logo.png" alt="logo decorativo" style={{ position: 'absolute', top: '18%', right: '8%', width: 200, transform: 'rotate(-30deg)' }} />
        <img src="/imgs/logos/logo.png" alt="logo decorativo" style={{ position: 'absolute', bottom: '6%', left: '38%', width: 150, transform: 'rotate(12deg)' }} />
        <img src="/imgs/logos/logo.png" alt="logo decorativo" style={{ position: 'absolute', bottom: '10%', right: '15%', width: 210, transform: 'rotate(-22deg)' }} />
      </div>
      <div className="relative mx-auto max-w-6xl" style={{ zIndex: 2 }}>
        <AnimateIn>
          <h2 className="text-center text-3xl font-bold text-white">Proyectos destacados</h2>
        </AnimateIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <AnimateIn
              key={p.id}
              className="h-full"
              delay={i * 0.05}
            >
              <motion.article
                className="flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-white/90 shadow-[0_28px_72px_-36px_rgba(15,23,42,0.5)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_36px_96px_-32px_rgba(15,23,42,0.6)]"
                whileHover={{ scale: 1.01 }}
                onClick={() => openProject(p.id)}
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <img
                    src={p.images[0]}
                    alt={`Vista previa del proyecto ${p.title}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <h3 className="text-xl font-semibold text-[#2c6334]">{p.title}</h3>
                  <p className="text-sm text-slate-700">{p.desc}</p>
                </div>
              </motion.article>
            </AnimateIn>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-white/20 bg-white/10 p-6 text-center text-white">
          <h3 className="text-2xl font-semibold text-white">Planifiquemos su proximo proyecto en acero</h3>
          <p className="mt-2 text-sm leading-6">
            Enviamos memorias de calculo, cronogramas de montaje y presupuestos ajustados para parques industriales, sedes corporativas y constructoras.
            Conecte con nuestro equipo para cotizar estructuras metalicas a la medida.
          </p>
          <a
            className="mt-4 inline-flex items-center rounded-xl bg-white/90 px-6 py-3 text-sm font-semibold text-[#2c6334] shadow-lg shadow-white/30 transition hover:bg-white"
            href="#contact"
          >
            Hablar con ingeniería comercial
          </a>
        </div>

        <AnimatePresence>
          {sel && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={(event) => {
                if (event.target === event.currentTarget) closeProject()
              }}
            >
              <motion.div
                className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.18 }}
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  className="absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-xl font-semibold text-white shadow-lg shadow-black/30 backdrop-blur transition hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    closeProject()
                  }}
                  aria-label="Cerrar ventana"
                >
                  ×
                </button>
                <div className="relative flex max-h-[70vh] w-full items-center justify-center bg-slate-900/10">
                  <img
                    src={sel.images[slideIndex]}
                    alt={`Imagen ${slideIndex + 1} del proyecto ${sel.title}`}
                    className="max-h-[70vh] w-full object-contain"
                    loading="lazy"
                  />
                  <button
                    className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-xl text-white shadow-lg shadow-black/40 backdrop-blur-sm transition hover:bg-black/80"
                    type="button"
                    onClick={showPrev}
                    aria-label="Imagen anterior"
                  >
                    ‹
                  </button>
                  <button
                    className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-xl text-white shadow-lg shadow-black/40 backdrop-blur-sm transition hover:bg-black/80"
                    type="button"
                    onClick={showNext}
                    aria-label="Imagen siguiente"
                  >
                    ›
                  </button>
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                    {sel.images.map((_, idx) => (
                      <button
                        key={idx}
                        className={`h-2 w-2 rounded-full ${idx === slideIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'}`}
                        type="button"
                        onClick={() => setSlideIndex(idx)}
                        aria-label={`Ver imagen ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-3 p-6">
                  <h3 className="text-2xl font-semibold text-slate-900">{sel.title}</h3>
                  <p className="text-sm text-slate-500">Fecha: {sel.date}</p>
                  <p className="text-base text-slate-600">{sel.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
