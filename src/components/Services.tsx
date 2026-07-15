"use client"

import { motion } from "framer-motion"
import { Code, Brain, BookOpen, Users } from "lucide-react"
import SectionHeading from "./SectionHeading"
import { useLang } from "@/lib/LanguageProvider"

const services = [
  { icon: Code, titleKey: "fs_title", descKey: "fs_desc" },
  { icon: Brain, titleKey: "ai_title", descKey: "ai_desc" },
  { icon: BookOpen, titleKey: "guide_title", descKey: "guide_desc" },
  { icon: Users, titleKey: "mentor_title", descKey: "mentor_desc" },
]

export default function Services() {
  const { t } = useLang()

  return (
    <section id="services" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title={t("services.title")} subtitle={t("services.subtitle")} />

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group p-6 rounded-xl border border-border bg-card hover:border-accent-border transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center mb-4 group-hover:bg-accent-soft transition-colors">
                  <Icon size={18} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">{t(`services.${s.titleKey}`)}</h3>
                <p className="text-sm text-muted leading-relaxed">{t(`services.${s.descKey}`)}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-muted text-sm"
        >
          {t("services.cta")}{" "}
          <a href="#contact" className="text-accent hover:text-accent underline underline-offset-2">
            {t("contact.title").toLowerCase()}
          </a>
        </motion.p>
      </div>
    </section>
  )
}
