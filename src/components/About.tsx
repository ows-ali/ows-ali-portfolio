"use client"

import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"

const highlights = [
  { label: "Years Building", value: "8+" },
  { label: "AI Projects", value: "5+" },
  { label: "Full Stack Projects", value: "10+" },
  { label: "YouTube Tutorials", value: "Series" },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="AI developer by study, full stack engineer by trade"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-zinc-400 leading-relaxed"
          >
            <p>
              I&apos;m currently pursuing my{" "}
              <span className="text-purple-300 font-medium">
                MSc in Artificial Intelligence
              </span>{" "}
              at BTU Cottbus, Germany, with an Erasmus exchange at the
              University of Trieste, Italy. My journey spans full stack
              engineering, AI/ML, and mobile development.
            </p>
            <p>
              I thrive at the intersection of AI and production engineering —
              from building LLM-powered document pipelines and RAG systems to
              architecting React applications serving millions.
            </p>
            <p>
              I share what I learn through{" "}
              <span className="text-purple-300 font-medium">YouTube tutorials</span>,{" "}
              <span className="text-purple-300 font-medium">Medium articles</span>,
              and open source. I also mentor aspiring developers and teach as a
              Session Lead at Udacity.
            </p>
            <p className="text-purple-300/70 italic">
              Currently exploring new collaborations in AI, full stack
              development, and technical guidance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 text-center hover:border-purple-500/30 transition-colors"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent">
                  {h.value}
                </div>
                <div className="mt-1 text-sm text-zinc-500">{h.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
