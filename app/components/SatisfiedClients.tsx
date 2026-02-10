"use client"

import { useEffect, useRef, useState } from "react"
import AnimateIn from "./AnimateIn"

const TARGET = 500
const DURATION = 1600

export default function SatisfiedClients() {
	const [count, setCount] = useState(0)
	const [started, setStarted] = useState(false)
	const sectionRef = useRef<HTMLElement | null>(null)

	useEffect(() => {
		if (!sectionRef.current || started) return

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setStarted(true)
						observer.disconnect()
					}
				})
			},
			{ threshold: 0.4 }
		)

		observer.observe(sectionRef.current)

		return () => observer.disconnect()
	}, [started])

	useEffect(() => {
		if (!started) return

		let frameId: number
		const start = performance.now()

		const animate = (timestamp: number) => {
			const progress = Math.min((timestamp - start) / DURATION, 1)
			const eased = 1 - Math.pow(1 - progress, 3)
			const nextValue = Math.floor(1 + eased * (TARGET - 1))
			setCount(nextValue)

			if (progress < 1) {
				frameId = requestAnimationFrame(animate)
			}
		}

		frameId = requestAnimationFrame(animate)
		return () => cancelAnimationFrame(frameId)
	}, [started])

	return (
		<section ref={sectionRef} className="px-6">
			<div className="mx-auto flex max-w-5xl flex-col items-center rounded-3xl bg-[#f3f6f4] px-8 py-12 text-center shadow-[0_32px_96px_-48px_rgba(15,23,42,0.6)]">
				<AnimateIn>
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2c6334]">Clientes satisfechos</p>
					<div className="mt-4 text-6xl font-black text-slate-900 sm:text-7xl">
						{(started ? count : 1).toLocaleString("es-CO")}+
					</div>
					<p className="mt-3 text-base text-slate-600">
						Más de {TARGET.toLocaleString("es-CO")} clientes confían en estructuras metálicas JyE
					</p>
				</AnimateIn>
			</div>
		</section>
	)
}
