export default function Pergola() {
  return (
    <section aria-labelledby="case-study" className="px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center">
        <div className="group relative w-full overflow-hidden rounded-[3rem] border border-white/40 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.65)] lg:w-3/5">
          <img
            src="/imgs/pergola del retiro/PergolaenelRetiro.jpeg"
            alt="Pérgola metálica instalada en terraza residencial en El Retiro"
            className="h-[320px] w-full transform-gpu object-cover transition-transform duration-700 [transform:scale(1)] group-hover:[transform:scale(1.05)] sm:h-[420px]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-6 rounded-[3rem] border border-white/20 opacity-0 transition duration-700 group-hover:opacity-100 group-hover:[filter:blur(2px)]" />
        </div>
        <div className="flex flex-1 flex-col gap-4 text-slate-700">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2c6334]">Caso destacado</span>
          <h2 id="case-study" className="text-3xl font-bold text-slate-900">Pérgola residencial en acero a la medida</h2>
          <p>
            Fabricamos esta pérgola para una vivienda campestre en El Retiro. La solución combina estructura liviana en acero, policarbonato con filtro UV y canalizaciones ocultas para disfrutar de la terraza sin sacrificar diseño.
          </p>
          <ul className="grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
            <li className="rounded-xl border border-slate-200 px-4 py-3">
              Ingeniería estructural y memorias de cálculo ajustadas al terreno en ladera.
            </li>
            <li className="rounded-xl border border-slate-200 px-4 py-3">
              Montaje limpio en sitio habitado, con control de calidad y seguridad residencial.
            </li>
            <li className="rounded-xl border border-slate-200 px-4 py-3">
              Protección climática, iluminación integrada y mantenimiento programado.
            </li>
            <li className="rounded-xl border border-slate-200 px-4 py-3">
              Entrega llave en mano junto a cerramientos, escaleras y puertas metálicas personalizadas.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
