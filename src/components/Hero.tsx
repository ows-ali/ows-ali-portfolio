"use client"

import { motion } from "framer-motion"
import { ArrowDown, Code2, Globe2, Play, Mail } from "lucide-react"
import NeuralBackground from "./NeuralBackground"

const socials = [
  { href: "https://github.com/ows-ali", icon: Code2, label: "GitHub" },
  { href: "https://linkedin.com/in/ows-ali", icon: Globe2, label: "LinkedIn" },
  { href: "https://youtube.com/@owaisali124", icon: Play, label: "YouTube" },
  { href: "mailto:owaisali.cs@gmail.com", icon: Mail, label: "Email" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NeuralBackground />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-sm text-purple-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for collaborations
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight"
        >
          <span className="text-zinc-400">Hi, I&apos;m</span>{" "}
          <span className="bg-gradient-to-r from-white via-purple-300 to-purple-400 bg-clip-text text-transparent">
            Owais Ali
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          AI developer and full stack engineer — building intelligent systems
          and modern web applications. Currently pursuing MSc in AI, open to
          interesting challenges.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-zinc-700/50 text-zinc-400 hover:text-purple-300 hover:border-purple-500/50 transition-all duration-300 hover:scale-110"
              aria-label={s.label}
            >
              <s.icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-purple-400 transition-colors"
          >
            <span>Scroll to explore</span>
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
