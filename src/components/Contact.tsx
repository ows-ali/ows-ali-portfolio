"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Send, Code2, Globe2, Play, Globe } from "lucide-react"
import SectionHeading from "./SectionHeading"

const contactLinks = [
  { href: "mailto:owaisali.cs@gmail.com", icon: Mail, label: "owaisali.cs@gmail.com" },
  { href: "https://github.com/ows-ali", icon: Code2, label: "github.com/ows-ali" },
  { href: "https://linkedin.com/in/ows-ali", icon: Globe2, label: "linkedin.com/in/ows-ali" },
  { href: "https://youtube.com/@owaisali124", icon: Play, label: "youtube.com/@owaisali124" },
  { href: "https://ows-ali.medium.com/", icon: Globe, label: "ows-ali.medium.com" },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project, idea, or just want to say hi? I'm always open to interesting conversations."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-8 text-sm text-zinc-500">
            <MapPin size={14} className="text-purple-400" />
            <span>Cottbus, Germany</span>
            <span className="text-zinc-700">|</span>
            <span className="text-green-400">Available immediately</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {contactLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-sm text-zinc-400 hover:text-purple-300 hover:border-purple-500/40 transition-all duration-300"
                >
                  <Icon size={14} />
                  <span className="hidden sm:inline">{link.label}</span>
                </a>
              )
            })}
          </div>

          <form
            action="https://formsubmit.co/owaisali.cs@gmail.com"
            method="POST"
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-100 placeholder-zinc-600 text-sm focus:outline-none focus:border-purple-500/50 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-100 placeholder-zinc-600 text-sm focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell me about your project..."
              required
              className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-100 placeholder-zinc-600 text-sm focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
            />
            <input
              type="hidden"
              name="_next"
              value="https://portfolio-ows-ali.vercel.app/thanks"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-all duration-300"
            >
              <Send size={14} />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
