"use client"

import { motion } from "framer-motion"
import { Play, BookOpen, GraduationCap, ExternalLink } from "lucide-react"
import SectionHeading from "./SectionHeading"

const contentItems = [
  {
    icon: Play,
    title: "Next.js Tutorial Series",
    description:
      "Live coding series on YouTube building a full-stack Todo app with Next.js, Drizzle ORM, and deployment.",
    link: "https://youtube.com/@owaisali124",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "hover:border-red-500/30",
  },
  {
    icon: BookOpen,
    title: "Medium Articles",
    description:
      "Writing about automation, AI, and web development — including a popular Instagram bot tutorial.",
    link: "https://ows-ali.medium.com/",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "hover:border-amber-500/30",
  },
  {
    icon: GraduationCap,
    title: "Udacity Session Lead",
    description:
      "Teaching Assistant for the Full Stack Nano Degree — guiding students through Python and Flask web development.",
    link: "#",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "hover:border-blue-500/30",
  },
]

export default function Content() {
  return (
    <section id="content" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Teaching & Content"
          subtitle="I share what I build — on YouTube, Medium, and as a Udacity TA"
        />

        <div className="grid sm:grid-cols-3 gap-5">
          {contentItems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`group p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 transition-all duration-300 ${item.border} block`}
              >
                <div
                  className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center mb-4`}
                >
                  <Icon size={18} className={item.color} />
                </div>
                <h3 className="text-base font-semibold text-zinc-100 mb-2 flex items-center gap-2">
                  {item.title}
                  <ExternalLink size={12} className="text-zinc-600 group-hover:text-zinc-400" />
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
