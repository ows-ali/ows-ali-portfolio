"use client"

import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"

const skillGroups = [
  {
    title: "Languages",
    skills: [
      "JavaScript (7yr)",
      "TypeScript (4yr)",
      "Python (4yr)",
      "SQL (4yr)",
      "Go",
      "Java",
      "C#",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React (5yr)",
      "Next.js (4yr)",
      "Vue.js",
      "Angular",
      "Tailwind CSS",
      "MUI",
      "Redux",
    ],
  },
  {
    title: "Backend & AI",
    skills: [
      "Node.js",
      "LangChain",
      "LangGraph",
      "FastAPI",
      "Django",
      "Express.js",
      "PostgreSQL",
    ],
  },
  {
    title: "AI Tools & Infrastructure",
    skills: [
      "OpenAI API",
      "Claude API",
      "RAG",
      "Vector DBs",
      "MCP",
      "Docker",
      "AWS",
      "Azure",
    ],
  },
  {
    title: "Testing & DevOps",
    skills: [
      "Jest",
      "Playwright",
      "Appium",
      "GitHub Actions",
      "Jenkins",
      "CI/CD",
      "Linux",
    ],
  },
  {
    title: "Other Expertise",
    skills: [
      "Prompt Engineering",
      "Ollama",
      "Mistral AI",
      "Llama Models",
      "Agile/Scrum",
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="A broad toolkit spanning AI, full stack, and infrastructure"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-purple-500/30 transition-colors"
            >
              <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-wider mb-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 text-sm rounded-lg bg-zinc-800/60 text-zinc-300 border border-zinc-700/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
