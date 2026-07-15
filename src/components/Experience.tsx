"use client"

import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Creative Chaos (Remote)",
    period: "Aug 2023 — Dec 2024",
    project: "Foxtons — UK-based public real estate platform",
    points: [
      "Developed next-generation frontend using React, Next.js, TypeScript",
      "Collaborated with designers, backend engineers, and QA to deliver features",
      "Optimized performance via code splitting, lazy loading, and best practices",
    ],
    tech: ["React", "Next.js", "TypeScript", "MUI", "AWS", "GitHub Actions"],
  },
  {
    role: "Software Engineer",
    company: "DIN Global (DBank), Karachi",
    period: "Sep 2022 — Feb 2023",
    project: "Digital banking platform ($17.6M seed round)",
    points: [
      "Developed internal tools and customer-facing frontend modules",
      "Built automated E2E and component tests with 80%+ coverage",
      "Reduced regression issues across international fintech products",
    ],
    tech: ["React", "TypeScript", "GraphQL", "Redux", "Playwright"],
  },
  {
    role: "Full Stack Developer",
    company: "Ricult (Remote)",
    period: "May 2021 — Apr 2022",
    project: "AI-powered AgriTech platform (MIT-founded)",
    points: [
      "Built full-stack features using Python, Flask, and Ionic",
      "Developed web and mobile applications supporting farmers globally",
      "Worked with international teams in Agile environment",
    ],
    tech: ["Python", "Flask", "Ionic", "Firebase", "REST APIs"],
  },
  {
    role: "Software Developer",
    company: "Bank Alfalah Ltd., Karachi",
    period: "Jan 2019 — Dec 2020",
    project: "Internal Banking Automation & Digital Account Opening",
    points: [
      "Developed workflow automation using React Native and IBM BPM",
      "Digitized internal banking operations for enterprise use",
      "Automated QA with Appium-based test automation",
    ],
    tech: ["React Native", "IBM BPM", "Appium", "JavaScript"],
  },
  {
    role: "Software Engineer",
    company: "Lakson Business Solutions, Karachi",
    period: "Sep 2017 — Jan 2019",
    project: "OTT TV Platform — Subscription Management",
    points: [
      "Developed backend modules and CRUD applications with PHP Yii2 + MySQL",
      "Built REST APIs for third-party integrations",
      "Supported customer onboarding and subscription management",
    ],
    tech: ["PHP", "Yii2", "MySQL", "REST APIs", "Bootstrap"],
  },
  {
    role: "Session Lead (Teaching Assistant)",
    company: "Udacity — Full Stack Nano Degree",
    period: "Part-time",
    project: "Python & Flask Full Stack Nano Degree",
    points: [
      "Guided students through the full stack web development curriculum",
      "Assisted with Python, Flask, and web development concepts",
    ],
    tech: ["Python", "Flask", "Web Development"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="6+ years building products across fintech, real estate, agritech, and more"
        />

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/30 via-zinc-800 to-transparent transform md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:flex md:w-1/2 justify-end" />

              <div className="absolute left-0 md:left-1/2 top-1 w-3 h-3 rounded-full bg-purple-500 border-2 border-zinc-900 transform -translate-x-1.5 md:-translate-x-1.5 z-10" />

              <div
                className={`md:w-1/2 ml-6 md:ml-0 ${
                  i % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right"
                }`}
              >
                <span className="text-xs text-purple-400 font-mono">
                  {exp.period}
                </span>
                <h3 className="text-lg font-semibold text-zinc-100 mt-1">
                  {exp.role}
                </h3>
                <p className="text-sm text-zinc-400">{exp.company}</p>
                <p className="text-xs text-zinc-500 italic mt-1">
                  {exp.project}
                </p>
                <ul
                  className={`mt-3 space-y-1.5 ${
                    i % 2 === 0 ? "" : "md:ml-auto"
                  }`}
                >
                  {exp.points.map((pt) => (
                    <li
                      key={pt}
                      className="text-sm text-zinc-500 flex items-start gap-2"
                    >
                      <span className="text-purple-400 mt-1.5 shrink-0">
                        &bull;
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <div
                  className={`flex flex-wrap gap-1.5 mt-3 ${
                    i % 2 === 0 ? "" : "md:justify-end"
                  }`}
                >
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] rounded-md bg-zinc-800/80 text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
