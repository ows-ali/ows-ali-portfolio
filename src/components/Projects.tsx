"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  ExternalLink,
  Code2,
  Brain,
  Layout,
  Smartphone,
  Sparkles,
} from "lucide-react"
import SectionHeading from "./SectionHeading"
import { useLang } from "@/lib/LanguageProvider"

type Project = {
  title: string
  description: string
  tech: string[]
  links: { label: string; href: string }[]
  category: "ai" | "fullstack" | "mobile"
  image?: string
}

const projects: Project[] = [
  {
    title: "AI Document Extraction & Workflow Automation",
    description:
      "Event-driven document processing pipeline triggered from Gmail. Extracts PDF attachments, processes unstructured documents via OCR + LLM, auto-validates and persists data into relational databases.",
    tech: ["Python", "Gmail API", "Mistral AI", "OCR", "PostgreSQL", "Docker"],
    links: [],
    category: "ai",
    image: "/images/project-1.png",
  },
  {
    title: "LinkedIn Agent — Scraper & CV Generator",
    description:
      "Scrapes LinkedIn posts by keywords and locations, then auto-generates tailored CVs and cover letters using AI. Schedulable for recurring runs.",
    tech: ["Python", "LinkedIn API", "LLM", "Scheduling", "RAG"],
    links: [],
    category: "ai",
    image: "/images/project-2.png",
  },
  {
    title: "RAG Startup Scout CLI",
    description:
      "Automates startup scouting. Reads challenge requirements, processes a JSONL startup database, and uses OpenAI embeddings + Pinecone to match companies against criteria.",
    tech: ["Python", "OpenAI", "Pinecone", "Embeddings", "CLI"],
    links: [
      { label: "GitHub", href: "https://github.com/ows-ali/openai-pinecone" },
    ],
    category: "ai",
    image: "/images/project-3.png",
  },
  {
    title: "Visual P300 Speller (BCI)",
    description:
      "Built an EEG signal processing and classification pipeline using MATLAB, EEGLAB, and BCILAB. Preprocessed neural recordings and classified motor imagery tasks with ML models.",
    tech: ["MATLAB", "EEGLAB", "BCILAB", "Signal Processing", "ML"],
    links: [],
    category: "ai",
    image: "/images/project-4.png",
  },
  {
    title: "Instagram Automation Bot",
    description:
      "Selenium-based bot that logs into Instagram, likes, follows, and comments automatically. Featured in a detailed Medium tutorial.",
    tech: ["Python", "Selenium", "Automation"],
    links: [
      {
        label: "Medium Article",
        href: "https://medium.com/@ows-ali/here-is-an-instagram-automation-bot-for-automatic-growth-f7c52d8ad0ab",
      },
      { label: "GitHub", href: "https://github.com/ows-ali/instabot" },
    ],
    category: "ai",
    image: "/images/project-5.png",
  },
  {
    title: "Foxtons UK — Real Estate Platform",
    description:
      "Next-generation frontend for one of London's largest estate agencies. Optimized performance via code splitting, lazy loading, and frontend best practices.",
    tech: ["React", "Next.js", "TypeScript", "MUI", "Storybook", "AWS"],
    links: [{ label: "Foxtons", href: "https://www.foxtons.co.uk/" }],
    category: "fullstack",
    image: "/images/project-6.png",
  },
  {
    title: "DBank — Digital Banking Platform",
    description:
      "Customer-facing frontend modules for a venture-backed digital bank ($17.6M seed). Built automated E2E tests maintaining 80%+ coverage.",
    tech: ["React", "TypeScript", "GraphQL", "Redux", "Playwright"],
    links: [],
    category: "fullstack",
    image: "/images/project-7.png",
  },
  {
    title: "Ricult — AI-Powered AgriTech",
    description:
      "Full-stack development for a US-based award-winning Social Enterprise founded by MIT alums. Built features using Python, Flask, and Ionic.",
    tech: ["Python", "Flask", "Ionic", "Firebase", "REST APIs"],
    links: [],
    category: "fullstack",
    image: "/images/project-8.png",
  },
  {
    title: "Alibaba Doner — Restaurant Website",
    description:
      "Modern restaurant website with contact info, location, current discounts/promotions, and AI-generated team photography.",
    tech: ["Next.js", "Tailwind CSS", "AI Photography"],
    links: [
      { label: "Live Site", href: "https://v0-alibabamadebyowais.vercel.app/" },
    ],
    category: "fullstack",
    image: "/images/project-9.png",
  },
  {
    title: "Italian Tutor Website",
    description:
      "Landing page showcasing strengths, reviews, pricing, and Calendly booking for free demo lessons.",
    tech: ["Next.js", "Tailwind CSS", "Calendly"],
    links: [
      { label: "Live Site", href: "https://learn-italian-with-sonia.vercel.app/" },
    ],
    category: "fullstack",
    image: "/images/project-10.png",
  },
  {
    title: "Colorbox — Inventory Management System",
    description:
      "Full inventory system for a thread distribution company with barcode printing, scanner integration, and printer support.",
    tech: ["PHP", "Yii2", "MySQL", "Bootstrap", "Barcode"],
    links: [],
    category: "fullstack",
    image: "/images/project-11.png",
  },
  {
    title: "Next.js Todo App — Tutorial Series",
    description:
      "Full-stack todo app built live on YouTube to teach Next.js, Drizzle ORM, and deployment.",
    tech: ["Next.js", "Drizzle", "PostgreSQL", "Tailwind CSS"],
    links: [
      { label: "Live Demo", href: "https://todoappnext13-ows-ali.vercel.app/" },
    ],
    category: "fullstack",
    image: "/images/project-12.png",
  },
  {
    title: "Resume Template — Next.js + Tailwind",
    description:
      "Free open-source resume template with working contact form. Built via live coding on YouTube.",
    tech: ["Next.js", "Tailwind CSS", "Contact Form"],
    links: [
      { label: "Live Demo", href: "https://my-resume-ows-ali.vercel.app/" },
      { label: "GitHub", href: "https://github.com/ows-ali/resume-template-next-tailwind" },
    ],
    category: "fullstack",
    image: "/images/project-13.png",
  },
  {
    title: "Bank Alfalah — Digital Account Opening",
    description:
      "React Native mobile app for digital account opening with workflow automation.",
    tech: ["React Native", "IBM BPM", "JavaScript", "REST APIs"],
    links: [],
    category: "mobile",
    image: "/images/project-14.png",
  },
  {
    title: "Aptech — Attendance & Marks App",
    description:
      "React Native app for attendance marking, marks upload, login/logout, and push notifications.",
    tech: ["React Native", "Push Notifications", "Auth"],
    links: [],
    category: "mobile",
    image: "/images/project-15.png",
  },
  {
    title: "ows-atm-cli",
    description:
      "CLI ATM simulator — npx ows-atm-cli to withdraw, check balance, add money, with PIN authentication.",
    tech: ["Node.js", "CLI", "npm"],
    links: [
      { label: "GitHub", href: "https://github.com/ows-ali/ows-atm-cli" },
    ],
    category: "mobile",
    image: "/images/project-16.png",
  },
  {
    title: "Hacktoberfest 2018 — PR Journey",
    description:
      "Initiated a repo where users worldwide created their first pull requests on GitHub. Helped newcomers start their open source journey.",
    tech: ["GitHub", "Open Source", "Community"],
    links: [
      { label: "Live Site", href: "https://ows-ali.github.io/Hacktoberfest/" },
    ],
    category: "mobile",
    image: "/images/project-17.png",
  },
]

const categories = [
  { id: "all", label: "all", icon: Sparkles },
  { id: "ai", label: "ai", icon: Brain },
  { id: "fullstack", label: "fullstack", icon: Layout },
  { id: "mobile", label: "mobile", icon: Smartphone },
]

export default function Projects() {
  const { t } = useLang()
  const [active, setActive] = useState<string>("all")

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={t("projects.title")} subtitle={t("projects.subtitle")} />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon
            const isActive = active === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-accent-soft text-accent border border-accent-border"
                    : "bg-card text-muted border border-border hover:border-border-hover"
                }`}
              >
                <Icon size={14} />
                {t(`projects.${cat.label}`)}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, idx) => (
              <ProjectCard key={project.title} project={project} idx={idx} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

function ProjectCard({ project, idx }: { project: Project; idx: number }) {
  const catConfig = {
    ai: { border: "hover:border-purple-500/40", accent: "bg-purple-500/10" },
    fullstack: { border: "hover:border-blue-500/40", accent: "bg-blue-500/10" },
    mobile: { border: "hover:border-emerald-500/40", accent: "bg-emerald-500/10" },
  }
  const config = catConfig[project.category]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.05, duration: 0.4 }}
      className={`group relative rounded-xl border border-border bg-card transition-all duration-300 ${config.border} hover:bg-card-hover overflow-hidden`}
    >
      {project.image && (
        <div className="relative w-full h-40 sm:h-44 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-transparent to-transparent" />
        </div>
      )}

      <div className="p-5">
        <div className={`w-10 h-10 rounded-lg ${config.accent} flex items-center justify-center mb-4`}>
          {project.category === "ai" && <Brain size={18} className="text-purple-400" />}
          {project.category === "fullstack" && <Layout size={18} className="text-blue-400" />}
          {project.category === "mobile" && <Smartphone size={18} className="text-emerald-400" />}
        </div>

        <h3 className="text-base font-semibold text-text group-hover:text-accent transition-colors mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 text-[11px] rounded-md bg-card text-muted border border-border">
              {t}
            </span>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="flex items-center gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-subtle hover:text-accent transition-colors"
              >
                {link.label === "GitHub" ? <Code2 size={12} /> : <ExternalLink size={12} />}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
