"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import NeuralBackground from "./NeuralBackground"
import { GitHubIcon, LinkedInIcon, YouTubeIcon, MediumIcon } from "./Icons"
import { useLang } from "@/lib/LanguageProvider"

const socials = [
  { href: "https://github.com/ows-ali", icon: GitHubIcon, label: "GitHub" },
  { href: "https://linkedin.com/in/ows-ali", icon: LinkedInIcon, label: "LinkedIn" },
  { href: "https://youtube.com/@owaisali124", icon: YouTubeIcon, label: "YouTube" },
  { href: "https://ows-ali.medium.com/", icon: MediumIcon, label: "Medium" },
]

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NeuralBackground />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6"
        >
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-2 border-accent-border ring-2 ring-accent-soft">
            <Image
              src="/images/avatar.png"
              alt="Owais Ali"
              fill
              sizes="128px"
              className="object-cover object-[50%_30%]"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight"
        >
          <span className="text-muted">{t("hero.hi")},</span>{" "}
          <span className="bg-gradient-to-r from-text via-accent to-accent bg-clip-text text-transparent">
            {t("hero.name")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border text-muted hover:text-accent hover:border-accent-border transition-all duration-300 hover:scale-110"
              aria-label={s.label}
            >
              <s.icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-border/50 bg-accent-soft text-xs text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            {t("hero.available")}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm text-subtle hover:text-accent transition-colors"
          >
            <span>{t("hero.scroll")}</span>
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
