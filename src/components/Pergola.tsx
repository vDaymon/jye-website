export default function Pergola() {
  return (
    <section className="px-0">
      <div className="group relative left-1/2 w-screen -translate-x-1/2 [perspective:1200px]">
        <img
          src="/imgs/P%C3%A9rgola%20en%20el%20Retiro.jpeg"
          alt="Pérgola en el Retiro"
          className="h-[320px] w-full transform-gpu rounded-[3rem] border border-white/40 object-cover shadow-[0_40px_120px_-40px_rgba(15,23,42,0.65)] transition-transform duration-700 [transform:rotateX(0deg)_rotateY(0deg)_scale(1)] [transform-style:preserve-3d] group-hover:[transform:rotateX(6deg)_rotateY(-8deg)_scale(1.04)] sm:h-[420px]"
        />
        <div className="pointer-events-none absolute inset-6 rounded-[3rem] border border-white/20 opacity-0 transition duration-700 group-hover:opacity-100 group-hover:[filter:blur(2px)]" />
      </div>
    </section>
  )
}
