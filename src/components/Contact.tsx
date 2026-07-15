"use client"

import { motion } from "framer-motion"
import { MapPin, Send } from "lucide-react"
import SectionHeading from "./SectionHeading"
import { useLang } from "@/lib/LanguageProvider"
import { GitHubIcon, LinkedInIcon, YouTubeIcon, MediumIcon } from "./Icons"

const contactLinks = [
  { href: "https://github.com/ows-ali", icon: GitHubIcon, label: "github.com/ows-ali" },
  { href: "https://linkedin.com/in/ows-ali", icon: LinkedInIcon, label: "linkedin.com/in/ows-ali" },
  { href: "https://youtube.com/@owaisali124", icon: YouTubeIcon, label: "youtube.com/@owaisali124" },
  { href: "https://ows-ali.medium.com/", icon: MediumIcon, label: "ows-ali.medium.com" },
]

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-8 text-sm text-muted">
            <MapPin size={14} className="text-accent" />
            <span>{t("contact.location")}</span>
            <span className="text-border">|</span>
            <span className="text-green">{t("contact.available")}</span>
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
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm text-muted hover:text-accent hover:border-accent-border transition-all duration-300"
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
                placeholder={t("contact.name_placeholder")}
                required
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-text placeholder-subtle text-sm focus:outline-none focus:border-accent-border transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder={t("contact.email_placeholder")}
                required
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-text placeholder-subtle text-sm focus:outline-none focus:border-accent-border transition-colors"
              />
            </div>
            <textarea
              name="message"
              rows={4}
              placeholder={t("contact.message_placeholder")}
              required
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-text placeholder-subtle text-sm focus:outline-none focus:border-accent-border transition-colors resize-none"
            />
            <input type="hidden" name="_next" value="https://ows-ali.vercel.app/thanks" />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-inverse text-sm font-medium transition-all duration-300"
            >
              <Send size={14} />
              {t("contact.send")}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
