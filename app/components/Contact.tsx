import Image from 'next/image'
import AnimateIn from './AnimateIn'

export default function Contact() {
  const phones = [
    { label: 'Celular 1', number: '+57 310 8210408' },
    { label: 'Celular 2', number: '+57 301 722 4104' },
  ] as const
  const whatsappLink = `https://wa.me/${phones[0].number.replace(/\D/g, '')}`
  const address = 'Calle 65 #74-105 San German'
  const mapsQuery = encodeURIComponent(address + ' Colombia')
  const mapsSrc = `https://maps.google.com/maps?q=${mapsQuery}&z=15&output=embed`

  return (
    <section id="contact" className="px-6">
      <div className="mx-auto max-w-6xl">
        <AnimateIn>
          <h2 className="text-center text-3xl font-bold text-slate-900">Contacto y ubicación</h2>
        </AnimateIn>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <AnimateIn className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-slate-100 bg-white px-8 py-10 text-center shadow-[0_28px_72px_-36px_rgba(15,23,42,0.48)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_36px_96px_-32px_rgba(15,23,42,0.58)]">
            <h3 className="text-2xl font-semibold text-slate-900">Oficina central</h3>
            <p className="text-sm text-slate-600">
              {address}
              <br />
              San German
            </p>
            <p className="max-w-xs text-sm text-slate-600">
              Atendemos proyectos de estructuras metálicas en Medellín, Antioquia y el Área Metropolitana.
            </p>
            <div className="space-y-1 text-sm text-slate-600">
              {phones.map(({ label, number }) => (
                <p key={label}>
                  <strong className="font-semibold text-slate-900">{label}:</strong>{' '}
                  <a className="text-[#2c6334] hover:underline" href={`tel:${number.replace(/\s/g, '')}`}>
                    {number}
                  </a>
                </p>
              ))}
            </div>
            <p className="text-sm text-slate-600">
              <strong className="font-semibold text-slate-900">Email:</strong>{' '}
              <a className="text-[#2c6334] hover:underline" href="mailto:estructurasmetalicasje@gmail.com">
                estructurasmetalicasje@gmail.com
              </a>
            </p>
            <p className="text-sm text-slate-600">
              <a className="text-[#2c6334] hover:underline" href="https://www.facebook.com/EstructurasMetalicasJyE" target="_blank" rel="noreferrer">
                Facebook
              </a>{' '}
              ·{' '}
              <a className="text-[#2c6334] hover:underline" href="https://www.instagram.com/estructurasmetalicasjye/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </p>
          </AnimateIn>

          <AnimateIn
            className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-8 py-10 text-center shadow-[0_28px_72px_-36px_rgba(15,23,42,0.48)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_36px_96px_-32px_rgba(15,23,42,0.58)]"
            delay={0.04}
          >
            <h3 className="text-2xl font-semibold text-slate-900">Escríbenos</h3>
            <p className="text-sm text-slate-600">Abre WhatsApp para iniciar una conversación con nuestro equipo.</p>
            <a
              className="inline-flex items-center gap-2 rounded-xl bg-[#2c6334] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#2c6334]/30 transition hover:bg-[#254f2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2c6334]"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/imgs/logos/whatsapp.png" alt="WhatsApp" width={24} height={24} className="h-6 w-6" style={{ filter: 'brightness(0) invert(1)' }} />
              <span className="text-white">WhatsApp</span>
            </a>
          </AnimateIn>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
          <h3 className="sr-only">Mapa</h3>
          <iframe
            title="Mapa - Estructuras Metálicas J y E"
            src={mapsSrc}
            className="h-[720px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
