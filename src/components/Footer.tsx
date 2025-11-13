import AnimateIn from './AnimateIn'

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-inner">
        <AnimateIn>
          <div>
            <strong>Estructuras Metálicas J y E</strong>
            <p>Soluciones de estructuras • estructurasmetalicasje@gmail.com</p>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.03}>
          <div>
            <p>© {new Date().getFullYear()} Estructuras Metálicas J y E. Todos los derechos reservados.</p>
          </div>
        </AnimateIn>
      </div>
    </footer>
  )
}
