import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimateIn from './AnimateIn'

const projects = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `Proyecto ${i + 1}`,
  desc: 'Descripción del proyecto. Información predeterminada que podrá editarse más adelante.',
  date: `2025-0${(i % 9) + 1}-15`,
  // we use a simple background color placeholder; replace with real images later
  color: `hsl(${(i * 55) % 360} 70% 45%)`,
}))

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null)

  const openProject = (id: number) => setSelected(id)
  const closeProject = () => setSelected(null)

  const sel = projects.find((p) => p.id === selected) || null

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <AnimateIn>
          <h2>Proyectos destacados</h2>
        </AnimateIn>
        <div className="grid">
          {projects.map((p, i) => (
            <AnimateIn key={p.id} className="project-card" delay={i * 0.05}>
              <motion.article
                className="project-card-inner"
                whileHover={{ scale: 1.02 }}
                onClick={() => openProject(p.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="thumb" style={{ background: p.color }} />
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </motion.article>
            </AnimateIn>
          ))}
        </div>

        <AnimatePresence>
          {sel && (
            <motion.div
              className="modal-overlay"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <motion.div
                className="modal"
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <button className="modal-close" onClick={closeProject} aria-label="Cerrar ventana">×</button>
                <div className="modal-image" style={{ background: sel.color }} />
                <div className="modal-body">
                  <h3>{sel.title}</h3>
                  <p className="muted">Fecha: {sel.date}</p>
                  <p>{sel.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
