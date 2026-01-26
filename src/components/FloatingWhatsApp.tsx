export default function FloatingWhatsApp() {
  const phone = '+57 310 8210408'
  const whatsappLink = `https://wa.me/${phone.replace(/\D/g, '')}`

  return (
    <a
      className="fixed bottom-6 right-6 z-50 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366] shadow-xl shadow-[#25D366]/30 transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-16 sm:w-16"
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      title="WhatsApp"
    >
      <img src="/imgs/logos/whatsapp.png" alt="WhatsApp" className="h-10 w-10 sm:h-8 sm:w-8" />
    </a>
  )
}
