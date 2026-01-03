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
    desc: 'Estructura metálica con policarbonato para terraza residencial.',
    date: '2025-01-10',
    images: [
      ...pergolaImages,
    ],
  },
  {
    id: 2,
    title: 'Pasamanos Vehicular',
    desc: 'Protección perimetral en acero para área de carga y descarga.',
    date: '2025-02-22',
    images: pasamanosImages,
  },
  {
    id: 3,
    title: 'Fachada en Crista',
    desc: 'Instalación de vidrio templado con perfilería de aluminio anodizado.',
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
    <section id="projects" className="px-6">
      <div className="mx-auto max-w-6xl">
        <AnimateIn>
          <h2 className="text-center text-3xl font-bold text-slate-900">Proyectos destacados</h2>
        </AnimateIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <AnimateIn
              key={p.id}
              className="h-full"
              delay={i * 0.05}
            >
              <motion.article
                className="flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_28px_72px_-36px_rgba(15,23,42,0.5)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_36px_96px_-32px_rgba(15,23,42,0.6)]"
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
                  <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
                  <p className="text-sm text-slate-600">{p.desc}</p>
                </div>
              </motion.article>
            </AnimateIn>
          ))}
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
