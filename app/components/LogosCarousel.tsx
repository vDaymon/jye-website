
import LogoLoop from "./LogoLoop";

const logoSrc = (file: string) => `/imgs/imgAliados/${encodeURIComponent(file)}`;

const imageLogos = [
  { src: logoSrc("Logo+azul+png-640w.png"), alt: "Agofer", href: "https://www.agofer.com.co" },
  { src: logoSrc("Ternium_Logo.svg.png"), alt: "Ternium", href: "https://www.ternium.com" },
  { src: logoSrc("logo-doblamos-lineahome-azul.png.webp"), alt: "Doblamos", href: "https://www.doblamos.com" },
  { src: logoSrc("logof.png"), alt: "Hierros hb", href: "https://www.hierroshb.com" },
  { src: logoSrc("WhatsApp Image 2026-01-28 at 9.55.21 AM.jpeg"), alt: "Structo", href: "https://structotaller.com" },
];

export default function LogosCarousel() {
  return (
    <div>
      <h2 className="text-4xl font-extrabold text-center pb-28">Nuestros aliados</h2>
      <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
        <LogoLoop
          logos={imageLogos}
          speed={100}
          direction="left"
          logoHeight={60}
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
