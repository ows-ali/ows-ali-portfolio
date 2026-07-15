"use client"

import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useLang } from "@/lib/LanguageProvider"

const expKeys = ["creative", "din", "ricult", "bankalfalah", "lakson", "udacity"] as const
const techMap: Record<string, string[]> = {
  creative: ["React", "Next.js", "TypeScript", "MUI", "AWS", "GitHub Actions"],
  din: ["React", "TypeScript", "GraphQL", "Redux", "Playwright"],
  ricult: ["Python", "Flask", "Ionic", "Firebase", "REST APIs"],
  bankalfalah: ["React Native", "IBM BPM", "Appium", "JavaScript"],
  lakson: ["PHP", "Yii2", "MySQL", "REST APIs", "Bootstrap"],
  udacity: ["Python", "Flask", "Web Development"],
}

export default function Experience() {
  const { t } = useLang()

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title={t("experience.title")} subtitle={t("experience.subtitle")} />

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-border to-transparent transform md:-translate-x-px" />

          {expKeys.map((key, i) => {
            const points: string[] = []
            let pi = 1
            while (true) {
              const pk = t(`exp.${key}.p${pi}`)
              if (pk === `exp.${key}.p${pi}`) break
              points.push(pk)
              pi++
            }

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:flex md:w-1/2 justify-end" />

                <div className="absolute left-0 md:left-1/2 top-1 w-3 h-3 rounded-full bg-accent border-2 border-[var(--bg)] transform -translate-x-1.5 md:-translate-x-1.5 z-10" />

                <div className={`md:w-1/2 ml-6 md:ml-0 ${i % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right"}`}>
                  <span className="text-xs text-accent font-mono">
                    {t(`exp.${key}.period`)}
                  </span>
                  <h3 className="text-lg font-semibold text-text mt-1">{t(`exp.${key}.role`)}</h3>
                  <p className="text-sm text-muted">{t(`exp.${key}.company`)}</p>
                  <p className="text-xs text-subtle italic mt-1">{t(`exp.${key}.project`)}</p>
                  <ul className={`mt-3 space-y-1.5 ${i % 2 === 0 ? "" : "md:ml-auto"}`}>
                    {points.map((pt) => (
                      <li key={pt} className="text-sm text-muted flex items-start gap-2">
                        <span className="text-accent mt-1.5 shrink-0">&bull;</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className={`flex flex-wrap gap-1.5 mt-3 ${i % 2 === 0 ? "" : "md:justify-end"}`}>
                    {(techMap[key] || []).map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[11px] rounded-md bg-card text-muted border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
