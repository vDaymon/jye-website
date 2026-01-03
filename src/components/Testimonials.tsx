import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AnimateIn from './AnimateIn'

const testimonials = [
  {
    name: 'Laura Castillo',
    role: 'Arquitecta líder · Estudio Forma',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=160&h=160&q=80',
    quote:
      'Recrearon nuestro diseño de pérgola corporativa con ingeniería precisa y acabados premium; integraron acero y cristal manteniendo la estética que exigía el cliente.',
  },
  {
    name: 'Julián Pérez',
    role: 'Coordinador de mantenimiento · Parque Industrial Nova',
    image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=facearea&w=160&h=160&q=80',
    quote:
      'Su plan de refuerzo y pintura industrial detuvo la corrosión en nuestras naves; entregaron cada estructura metálica lista para operar sin detener la producción.',
  },
  {
    name: 'Carlos Mendes',
    role: 'Director técnico · Inmobiliaria Terracota',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&w=160&h=160&q=80',
    quote:
      'Aportaron cálculos estructurales, memoria de materiales y montaje certificado; la obra metálica quedó lista en el cronograma comprometido y dentro de normas.',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [])

  const goTo = (idx: number) => setIndex(idx)

  const getVisible = (start: number) => {
    const next = (start + 1) % testimonials.length
    return [testimonials[start], testimonials[next]]
  }

  const visibleTestimonials = getVisible(index)

  return (
    <section id="testimonials" className="px-6">
      <div className="mx-auto max-w-6xl">
        <AnimateIn>
          <h2 className="text-center text-3xl font-bold text-slate-900">Testimonios</h2>
        </AnimateIn>
        <div className="mt-10">
          <div className="relative mx-auto max-w-4xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="flex flex-col items-center gap-6 md:flex-row md:justify-center"
              >
                {visibleTestimonials.map((testimonial) => (
                  <figure
                    key={testimonial.name}
                    className="w-full max-w-sm flex-1 rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-[0_32px_88px_-36px_rgba(15,23,42,0.5)]"
                  >
                    <img
                      src={testimonial.image}
                      alt={`Retrato de ${testimonial.name}`}
                      className="mx-auto h-20 w-20 rounded-full object-cover shadow-[0_12px_32px_-12px_rgba(15,23,42,0.65)]"
                      loading="lazy"
                    />
                    <p className="mt-5 text-left text-sm leading-6 italic text-slate-700">“{testimonial.quote}”</p>
                    <figcaption className="mt-5 flex flex-col items-center gap-1">
                      <span className="text-base font-semibold text-slate-900">{testimonial.name}</span>
                      <span className="text-[0.65rem] uppercase tracking-wide text-[#2c6334]">{testimonial.role}</span>
                    </figcaption>
                  </figure>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            {testimonials.map((t, idx) => (
              <button
                key={t.name}
                type="button"
                onClick={() => goTo(idx)}
                className={`h-2.5 w-6 rounded-full transition ${idx === index ? 'bg-[#2c6334]' : 'bg-slate-300 hover:bg-slate-400'}`}
                aria-label={`Ver testimonio de ${t.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
