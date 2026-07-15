"use client"

import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useLang } from "@/lib/LanguageProvider"

const highlights = [
  { labelKey: "stats.years", value: "8+" },
  { labelKey: "stats.ai", value: "5+" },
  { labelKey: "stats.fs", value: "10+" },
  { labelKey: "stats.yt", value: "Series" },
]

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title={t("about.title")} subtitle={t("about.subtitle")} />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-muted leading-relaxed"
          >
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
            <p className="text-accent/70 italic">{t("about.p4")}</p>
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
                key={h.labelKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-6 rounded-xl border border-border bg-card text-center hover:border-accent-border transition-colors"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent">
                  {h.value}
                </div>
                <div className="mt-1 text-sm text-subtle">{t(h.labelKey)}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
