"use client"

import { motion } from "framer-motion"
import { Code, Brain, Users, BookOpen } from "lucide-react"
import SectionHeading from "./SectionHeading"

const services = [
  {
    icon: Code,
    title: "Full Stack Development",
    description:
      "React, Next.js, TypeScript, Python — from concept to production. I build modern, scalable web applications.",
  },
  {
    icon: Brain,
    title: "AI & LLM Solutions",
    description:
      "RAG pipelines, document extraction, agent systems, prompt engineering — integrating AI into real products.",
  },
  {
    icon: BookOpen,
    title: "Technical Guidance",
    description:
      "Architecture reviews, code quality, best practices. I help teams level up their engineering and AI capabilities.",
  },
  {
    icon: Users,
    title: "Mentoring & Teaching",
    description:
      "From Udacity TA to YouTube tutorials — I break down complex topics into clear, actionable knowledge.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="What I Do"
          subtitle="Building, teaching, and solving — here's how I can help"
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <Icon size={18} className="text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-zinc-500 text-sm"
        >
          Currently exploring new collaborations —{" "}
          <a
            href="#contact"
            className="text-purple-400 hover:text-purple-300 underline underline-offset-2"
          >
            let&apos;s talk
          </a>
        </motion.p>
      </div>
    </section>
  )
}
