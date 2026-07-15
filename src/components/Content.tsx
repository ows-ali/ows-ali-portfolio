"use client"

import { motion } from "framer-motion"
import { Play, BookOpen, GraduationCap, ExternalLink } from "lucide-react"
import SectionHeading from "./SectionHeading"
import { useLang } from "@/lib/LanguageProvider"

const contentItems = [
  {
    icon: Play,
    titleKey: "yt_title",
    descKey: "yt_desc",
    link: "https://youtube.com/@owaisali124",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "hover:border-red-500/30",
  },
  {
    icon: BookOpen,
    titleKey: "medium_title",
    descKey: "medium_desc",
    link: "https://ows-ali.medium.com/",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "hover:border-amber-500/30",
  },
  {
    icon: GraduationCap,
    titleKey: "udacity_title",
    descKey: "udacity_desc",
    link: "#",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "hover:border-blue-500/30",
  },
]

export default function Content() {
  const { t } = useLang()

  return (
    <section id="content" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title={t("content.title")} subtitle={t("content.subtitle")} />

        <div className="grid sm:grid-cols-3 gap-5">
          {contentItems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.a
                key={item.titleKey}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`group p-6 rounded-xl border border-border bg-card transition-all duration-300 ${item.border} block`}
              >
                <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center mb-4`}>
                  <Icon size={18} className={item.color} />
                </div>
                <h3 className="text-base font-semibold text-text mb-2 flex items-center gap-2">
                  {t(`content.${item.titleKey}`)}
                  <ExternalLink size={12} className="text-subtle group-hover:text-muted" />
                </h3>
                <p className="text-sm text-muted leading-relaxed">{t(`content.${item.descKey}`)}</p>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
