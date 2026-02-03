
import LogoLoop from "./LogoLoop";

const imageLogos = [
  { src: "/public/imgs/imgAliados/Logo+azul+png-640w.png", alt: "Agofer", href: "https://www.agofer.com.co" },
  { src: "/public/imgs/imgAliados/Ternium_Logo.svg.png", alt: "Ternium", href: "https://www.google.com/aclk?sa=L&ai=DChsSEwiClfahlL6SAxUbCgwCHfVuMg8YACICCAEQABoCdnU&co=1&gclid=CjwKCAiA1obMBhAbEiwAsUBbIt23vljW6grLibOo1HQhV1rKA8xleJSwCZoRevHL1EuJbYpD5e7AcBoChVUQAvD_BwE&cid=CAASugHkaPy5qHsi2jIntPmmLnafmk0Sj1kilM3498HuvojJ3g0OmWLEKb-ESo9Lx_AvUxAy2R8bXp5Xj9szyrVVZtaTbjS85zjoFM9nfy1-moKPzVjyfER7g6sgtrabGok1CnXkhREeHb4ODtY3FxD0O-sxXkC6F6cgjFCnFcTw5OH5HRQBR3wjGYQ7JQDiaMiRnbClZZcLk63K-hlWuzGc5vB2URjqAit376K9tfBPX3wuCTM2sEsKeBRjt3g&cce=1&sig=AOD64_2EnqqH2us0f5QsBBBtQHUjsaHM6g&q&adurl&ved=2ahUKEwjXju-hlL6SAxU7kIQIHWBdKCAQ0Qx6BAgXEAE" },
  { src: "/public/imgs/imgAliados/logo-doblamos-lineahome-azul.png.webp", alt: "Doblamos", href: "https://www.doblamos.com" },
  { src: "/public/imgs/imgAliados/logof.png", alt: "Hierros hb", href: "https://www.hierroshb.com" },
  { src: "/public/imgs/imgAliados/WhatsApp Image 2026-01-28 at 9.55.21 AM.jpeg", alt: "Structo", href: "https://structotaller.com" },
  // Agrega más logos aquí si lo deseas
];

export default function LogosCarousel() {
  return (
    <div>
      <h2 className="text-4xl font-extrabold text-center pb-28">Nuestros aliados</h2>
      <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
        <LogoLoop
          logos={imageLogos}
          speed={100}
          direction="left"
          logoHeight={80}
          gap={40}
          scaleOnHover
          fadeOut
          fadeOutColor="#fff"
          ariaLabel="Logos de aliados"
        />
      </div>
    </div>
  );
}
