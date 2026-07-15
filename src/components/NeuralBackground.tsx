"use client"

import { useEffect, useRef } from "react"

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    let mouseX = -1000
    let mouseY = -1000
    const nodes: { x: number; y: number; vx: number; vy: number }[] = []
    const NODE_COUNT = 60
    const CONNECTION_DIST = 150

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.4
            const mx = (nodes[i].x + nodes[j].x) / 2
            const my = (nodes[i].y + nodes[j].y) / 2
            const distToMouse = Math.sqrt(
              (mx - mouseX) ** 2 + (my - mouseY) ** 2
            )
            const glow = Math.max(0, 1 - distToMouse / 400)
            ctx.strokeStyle = `rgba(167, 139, 250, ${alpha + glow * 0.3})`
            ctx.lineWidth = 0.6 + glow * 1.5
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        const distToMouse = Math.sqrt((n.x - mouseX) ** 2 + (n.y - mouseY) ** 2)
        const glow = Math.max(0, 1 - distToMouse / 300)
        const size = 1.5 + glow * 3
        ctx.fillStyle = `rgba(167, 139, 250, ${0.7 + glow * 0.3})`
        ctx.shadowBlur = glow * 20
        ctx.shadowColor = "rgba(167, 139, 250, 0.5)"
        ctx.beginPath()
        ctx.arc(n.x, n.y, size, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }

      animId = requestAnimationFrame(draw)
    }

    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener("mousemove", handleMouse)

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  )
}
