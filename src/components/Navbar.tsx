import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { id: 'hero', label: 'Inicio' },
  { id: 'services', label: 'Servicios' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'testimonials', label: 'Testimonios' },
  { id: 'contact', label: 'Contacto' },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-3 py-2 sm:px-6 sm:py-3">
        <button
          type="button"
          className="absolute left-1/2 inline-flex -translate-x-1/2 items-center outline-none transition-transform duration-200 focus-visible:ring-2 focus-visible:ring-[#2c6334] focus-visible:ring-offset-2 focus-visible:ring-offset-white lg:static lg:left-auto lg:translate-x-0"
          aria-label="Ir al inicio"
          onClick={() => scrollToSection('hero')}
        >
          <img src="/imgs/logo.png" alt="Estructuras Metálicas J y E" className="h-12 w-auto" />
        </button>

        <ul className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <li key={`desk-${item.id}`}>
              <button
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2c6334] ${
                  item.id === 'contact'
                    ? 'bg-[#2c6334] text-white hover:bg-[#254f2a]'
                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 text-slate-500 lg:flex">
          <a href="https://www.instagram.com/estructurasmetalicasjye/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 .001 5.001A2.5 2.5 0 0 0 12 7.5zM18.7 6.3a1 1 0 1 1-1.4 1.4 1 1 0 0 1 1.4-1.4z"/></svg>
          </a>

          <a href="https://www.facebook.com/EstructurasMetalicasJyE" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2v-2.9h2.2V9.2c0-2.2 1.3-3.4 3.3-3.4.96 0 1.97.17 1.97.17v2.2h-1.12c-1.1 0-1.45.69-1.45 1.4v1.67h2.47l-.39 2.9h-2.08v7A10 10 0 0 0 22 12z"/></svg>
          </a>

          <a href="mailto:estructurasmetalicasje@gmail.com" aria-label="Email" title="Email">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.5l-8 5-8-5V6h16zM4 18V8.5l7.5 4.69c.2.12.45.12.65 0L20 8.5V18H4z"/></svg>
          </a> 
        </div>

        <button
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#2c6334] transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2c6334] lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>

        {/* nav links placed after inner row so dropdown can appear below the navbar */}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute inset-x-0 top-full z-40 flex origin-top flex-col gap-2 border-b border-slate-200 bg-white/95 px-6 pb-6 pt-4 shadow-xl backdrop-blur lg:hidden"
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeInOut' }}
            onClick={() => setOpen(false)}
          >
            {navItems.map((item, idx) => (
              <div key={item.id}>
                <motion.button
                  className={`w-full rounded-lg px-4 py-2 text-left text-base font-semibold transition ${
                    item.id === 'contact'
                      ? 'bg-[#2c6334] text-white hover:bg-[#254f2a]'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: idx * 0.06, type: 'spring', stiffness: 300, damping: 28 }}
                >
                  {item.label}
                </motion.button>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
