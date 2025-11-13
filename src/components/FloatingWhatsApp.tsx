export default function FloatingWhatsApp() {
  const phone = '+57 310 8210408'
  const whatsappLink = `https://wa.me/${phone.replace(/\D/g, '')}`

  return (
    <a
      className="floating-wa"
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      title="WhatsApp"
    >
      <img src="/imgs/whatsapp.png" alt="WhatsApp" className="wa-png" />
    </a>
  )
}
