import AnimateIn from './AnimateIn'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white px-6 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 text-sm text-slate-500 sm:flex-row sm:items-center">
        <AnimateIn>
          <div className="space-y-1 text-slate-600">
            <strong className="text-base font-semibold text-slate-900">Estructuras Metálicas J y E</strong>
            <p>Soluciones de estructuras • estructurasmetalicasje@gmail.com</p>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.03}>
          <p>© {new Date().getFullYear()} Estructuras Metálicas J y E. Todos los derechos reservados.</p>
        </AnimateIn>
      </div>
    </footer>
  )
}
