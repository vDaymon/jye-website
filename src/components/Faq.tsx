import AnimateIn from './AnimateIn'

const faqs = [
  {
    question: 'Que tipo de estructuras metalicas fabrican para empresas?',
    answer:
      'Disenamos y fabricamos naves industriales, plataformas, cerramientos, pasarelas y pergolas corporativas en acero al carbon, inoxidable y aluminio. Integramos calculos estructurales, modelado BIM y trazabilidad de materiales para cumplir con interventoria.',
  },
  {
    question: 'Como gestionan el montaje y la seguridad industrial?',
    answer:
      'Coordinamos transporte, izajes y actividades en campo con personal certificado en SST. Implementamos planes de trabajo seguros, analisis de riesgo, permisos de izaje y liberacion de puntos de anclaje para evitar detenciones en las operaciones del cliente.',
  },
  {
    question: 'Ofrecen mantenimiento y auditorias de estructuras metalicas?',
    answer:
      'Si. Realizamos diagnosticos de patologias, medicion de espesores, ensayos no destructivos, limpieza y pintura industrial. Entregamos bitacoras de hallazgos y planes de mantenimiento programado para plantas industriales y parques empresariales.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="px-6">
      <div className="mx-auto max-w-6xl">
        <AnimateIn>
          <h2 className="text-center text-3xl font-bold text-slate-900">Preguntas frecuentes</h2>
        </AnimateIn>
        <div className="mt-8 grid gap-4">
          {faqs.map((item) => (
            <AnimateIn key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_28px_72px_-36px_rgba(15,23,42,0.45)]">
              <details className="group">
                <summary className="cursor-pointer list-none text-lg font-semibold text-[#2c6334]">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
              </details>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
