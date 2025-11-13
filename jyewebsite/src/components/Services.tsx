import { motion } from 'framer-motion'
import AnimateIn from './AnimateIn'

const services = [
  { title: 'Servicio 1', desc: 'Descripción breve predeterminada. Detalles reales se añadirán más adelante.' },
  { title: 'Servicio 2', desc: 'Descripción breve predeterminada. Detalles reales se añadirán más adelante.' },
  { title: 'Servicio 3', desc: 'Descripción breve predeterminada. Detalles reales se añadirán más adelante.' },
]

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <AnimateIn>
          <h2>Nuestros servicios</h2>
        </AnimateIn>

        <div className="cards">
          {services.map((s, i) => (
            <AnimateIn key={s.title} className="card" delay={i * 0.08}>
              <motion.div whileHover={{ y: -6 }} style={{ height: '100%' }}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
