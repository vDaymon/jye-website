'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import AnimateIn from './AnimateIn'

const testimonials = [
  {
    name: 'Arquitecto Leandro Herrera',
    role: '',
    image: '',
    quote:
      'Como arquitecto busco aliados que se acomoden a las necesidades de cada uno de nuestros proyectos, con estructuras JE he tenido un aliado importante que ha sabido llevar la voluntad mía y de los clientes a otro nivel',
  },
  {
    name: 'Ingeniera Alejandra Restrepo',
    role: '',
    image: '',
    quote:
      'Recomiendo a la empresa  estructuras metálicas JyE s.a.s por su cumplimiento, calidad y profesionalismo, no solo realizan un trabajo, brindan asesoría técnica y económica, su personal es capacitado tanto técnicamente con en alturas y una de las cosas más importantes en este sector es que cumplen con los plazos establecidos.',
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
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={`Retrato de ${testimonial.name}`}
                        width={160}
                        height={160}
                        className="mx-auto h-20 w-20 rounded-full object-cover shadow-[0_12px_32px_-12px_rgba(15,23,42,0.65)]"
                        priority={false}
                      />
                    ) : (
                      <div className="mx-auto h-20 w-20 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 text-4xl">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 0115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
                          </svg>
                        </span>
                      </div>
                    )}
                    <p className="mt-5 text-left text-sm leading-6 italic text-slate-700">“{testimonial.quote}”</p>
                    <figcaption className="mt-5 flex flex-col items-center gap-1">
                      <span className="text-base font-semibold text-slate-900">{testimonial.name}</span>
                      {testimonial.role && (
                        <span className="text-[0.65rem] uppercase tracking-wide text-[#2c6334]">{testimonial.role}</span>
                      )}
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
