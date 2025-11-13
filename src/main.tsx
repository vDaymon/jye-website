import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Lenis from '@studio-freight/lenis'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Initialize Lenis for smooth/inertial scrolling
// Adjust duration/easing to taste
if (typeof window !== 'undefined') {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1 - Math.pow(1 - t, 3)),
  })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}
