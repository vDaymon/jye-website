import { motion } from 'framer-motion'

const handleScrollToServices = () => {
  const el = document.getElementById('services')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="container hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <h1>TITULAR PRINCIPAL: reemplaza este texto por el título de tu negocio</h1>
          <p>
            DESCRIPCIÓN BREVE: escribe 1–2 frases que expliquen qué hace tu
            empresa y por qué los clientes deben elegirte. Ejemplo: "Proyectos
            de obra civil y remodelaciones con entrega a tiempo y alta calidad."
            Mantén el mensaje claro y orientado al cliente.
          </p>
          <div className="cta-row">
            <button className="btn primary" onClick={handleScrollToServices}>
              Ver servicios
            </button>
            <a className="btn ghost" href="#projects">Ver proyectos</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
