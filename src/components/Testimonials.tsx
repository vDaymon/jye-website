import AnimateIn from './AnimateIn'

const testimonials = [
  { name: 'Cliente 1', quote: 'Excelente trabajo y comunicación.' },
  { name: 'Cliente 2', quote: 'Resultados por encima de lo esperado.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <AnimateIn>
          <h2>Testimonios</h2>
        </AnimateIn>
        <div className="test-list">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} className="testimonial" delay={i * 0.06}>
              <blockquote>
                <p>“{t.quote}”</p>
                <cite>{t.name}</cite>
              </blockquote>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
