import AnimateIn from './AnimateIn'

export default function Contact() {
  const phone = '+57 310 8210408' // número WhatsApp proporcionado
  const whatsappLink = `https://wa.me/${phone.replace(/\D/g, '')}`
  const address = 'Calle 65 #74-105 San German'
  const mapsQuery = encodeURIComponent(address + ' Colombia')
  const mapsSrc = `https://maps.google.com/maps?q=${mapsQuery}&z=15&output=embed`

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <AnimateIn>
          <h2>Contacto y ubicación</h2>
        </AnimateIn>

        {/* Grid: two cards side-by-side; map below (full width) */}
        <div className="contact-grid">
          <AnimateIn className="contact-card">
            <h3>Oficina central</h3>
            <p>{address}<br/>San German</p>
            <p>
              <strong>Tel:</strong> <a href={`tel:${phone}`}>{phone}</a>
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:estructurasmetalicasje@gmail.com">estructurasmetalicasje@gmail.com</a>
            </p>
            <p style={{ marginTop: '0.6rem' }}>
              <a href="https://www.facebook.com/EstructurasMetalicasJyE" target="_blank" rel="noreferrer">Facebook</a> · <a href="https://www.instagram.com/estructurasmetalicasjye/" target="_blank" rel="noreferrer">Instagram</a>
            </p>
          </AnimateIn>

          <AnimateIn className="contact-card right-card" delay={0.04}>
            <h3>Escríbenos</h3>
            <p>Abre WhatsApp para iniciar una conversación con nuestro equipo.</p>
            <p>
              <a className="btn primary" href={whatsappLink} target="_blank" rel="noreferrer">
                <img src="/imgs/whatsapp.png" alt="WhatsApp" className="wa-icon" />
                WhatsApp
              </a>
            </p>
          </AnimateIn>
        </div>

        <div className="map-card" style={{ marginTop: '1.5rem' }}>
          <h3 style={{ visibility: 'hidden', height: 0, margin: 0 }}>Mapa</h3>
          <iframe
            title="Mapa - ConstrucPlus"
            src={mapsSrc}
            className="map-embed"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
