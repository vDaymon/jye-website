'use client'

import { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";

const data = [
  { label: "Pérgolas", value: "pergolas" },
  { label: "Casas", value: "casas" },
  { label: "Construcción", value: "construccion" },
  { label: "Pasamanos", value: "pasamanos" },
] as const;

type GalleryTabValue = (typeof data)[number]["value"];

const imageCatalog: Record<GalleryTabValue, string[]> = {
  pergolas: [
    "Pérgola en el Retiro 3.jpeg",
    "Pérgola en el Retiro.jpeg",
    "WhatsApp Image 2025-06-17 at 2.08.28 PM (1).jpeg",
  ],
  casas: [
    "evidencia 1.jpg",
  ],
  construccion: [
    "CRISTA.jpeg",
    "EVIDENCIA DE TRABAJO 2.jpeg",
    "Fachada en CRISTA.jpeg",
    "evidencia 2.jpeg",
  ],
  pasamanos: [
    "Pasamanos vehiculares.jpeg",
    "PasamanosenviaSan Luis.jpeg",
  ],
};

function getImages(tab: GalleryTabValue): string[] {
  return imageCatalog[tab]?.map((img) => `/imgs/gallery/${tab}/${img}`) || [];
}

export default function GalleryTab() {
  const [selected, setSelected] = useState<GalleryTabValue>(data[0].value);
  const current = data.find((cat) => cat.value === selected);
  const images = getImages(selected);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const idx = data.findIndex((cat) => cat.value === selected);
    const btn = tabRefs.current[idx];
    if (btn && indicatorRef.current) {
      setIndicatorStyle({
        left: btn.offsetLeft,
        width: btn.offsetWidth,
      });
    }
  }, [selected]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-0">
      <div className="mb-6 space-y-4">
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {data.map(({ label, value }) => (
            <button
              key={`${value}-mobile`}
              className={`rounded-xl border px-3 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2c6334] ${
                selected === value
                  ? 'border-[#2c6334] bg-[#2c6334]/10 text-[#2c6334]'
                  : 'border-slate-200 text-slate-600 hover:border-[#2c6334]/40 hover:text-[#2c6334]'
              }`}
              onClick={() => setSelected(value)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="relative hidden border-b pb-2 md:block">
          <div
            className="relative overflow-x-auto"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="relative inline-flex min-w-max items-center gap-2 px-1" style={{ minHeight: 40 }}>
              {data.map(({ label, value }, idx) => (
                <button
                  key={value}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-200 focus:outline-none ${
                    selected === value
                      ? 'text-green-700'
                      : 'text-gray-700 hover:text-green-700'
                  }`}
                  onClick={() => setSelected(value)}
                  style={{ zIndex: 1 }}
                >
                  {label}
                </button>
              ))}
              <div
                ref={indicatorRef}
                className="absolute bottom-0 h-1 rounded bg-green-700 transition-all duration-300"
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                  zIndex: 0,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((imageLink, idx) => (
          <div key={idx} className="w-full">
            <div className="relative h-40 w-full overflow-hidden rounded-lg shadow">
              <Image
                src={imageLink}
                alt="gallery-img"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
