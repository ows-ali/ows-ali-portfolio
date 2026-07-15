"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ExternalLink,
  Code2,
  Brain,
  Layout,
  Smartphone,
  Sparkles,
} from "lucide-react"
import SectionHeading from "./SectionHeading"

type Project = {
  title: string
  description: string
  tech: string[]
  links: { label: string; href: string; icon?: string }[]
  category: "ai" | "fullstack" | "mobile"
}

const projects: Project[] = [
  {
    title: "AI Document Extraction & Workflow Automation",
    description:
      "Event-driven document processing pipeline triggered from Gmail. Extracts PDF attachments, processes unstructured documents via OCR + LLM, auto-validates and persists data into relational databases. Reduced manual processing effort end-to-end.",
    tech: ["Python", "Gmail API", "Mistral AI", "OCR", "PostgreSQL", "Docker"],
    links: [],
    category: "ai",
  },
  {
    title: "LinkedIn Agent — Scraper & CV Generator",
    description:
      "Scrapes LinkedIn posts by keywords and locations, then auto-generates tailored CVs and cover letters using AI. Schedulable for recurring runs.",
    tech: ["Python", "LinkedIn API", "LLM", "Scheduling", "RAG"],
    links: [],
    category: "ai",
  },
  {
    title: "RAG Startup Scout CLI",
    description:
      "CLI tool that automates startup scouting. Reads challenge requirements from markdown, processes a JSONL startup database, and uses OpenAI embeddings + Pinecone to match companies against criteria with custom evaluation questions.",
    tech: ["Python", "OpenAI", "Pinecone", "Embeddings", "CLI"],
    links: [
      { label: "GitHub", href: "https://github.com/ows-ali/openai-pinecone" },
    ],
    category: "ai",
  },
  {
    title: "Visual P300 Speller (BCI)",
    description:
      "Built an EEG signal processing and classification pipeline using MATLAB, EEGLAB, and BCILAB. Preprocessed neural recordings, performed artifact handling, epoch extraction, and classified motor imagery tasks (Hand vs. Foot) with ML models.",
    tech: ["MATLAB", "EEGLAB", "BCILAB", "Signal Processing", "ML"],
    links: [],
    category: "ai",
  },
  {
    title: "Instagram Automation Bot",
    description:
      "Selenium-based bot that logs into Instagram, likes, follows, and comments automatically. Built for growth automation. Featured in a detailed Medium tutorial.",
    tech: ["Python", "Selenium", "Automation"],
    links: [
      {
        label: "Medium Article",
        href: "https://medium.com/@ows-ali/here-is-an-instagram-automation-bot-for-automatic-growth-f7c52d8ad0ab",
      },
      { label: "GitHub", href: "https://github.com/ows-ali/instabot" },
    ],
    category: "ai",
  },
  {
    title: "Foxtons UK — Real Estate Platform",
    description:
      "Next-generation frontend for Foxtons, one of London's largest estate agencies. Modernized the platform serving thousands of buyers, sellers, and tenants. Optimized performance via code splitting, lazy loading, and frontend best practices.",
    tech: ["React", "Next.js", "TypeScript", "MUI", "Storybook", "AWS"],
    links: [{ label: "Foxtons", href: "https://www.foxtons.co.uk/" }],
    category: "fullstack",
  },
  {
    title: "DBank — Digital Banking Platform",
    description:
      "Customer-facing frontend modules and internal tools for a venture-backed digital bank ($17.6M seed). Built automated E2E and component tests maintaining 80%+ coverage, reducing regression issues significantly.",
    tech: ["React", "TypeScript", "GraphQL", "Redux", "Playwright"],
    links: [
      {
        label: "Company",
        href: "https://www.linkedin.com/company/ricult",
      },
    ],
    category: "fullstack",
  },
  {
    title: "Ricult — AI-Powered AgriTech",
    description:
      "Full-stack development for a US-based award-winning Social Enterprise founded by MIT alums. Built features using Python, Flask, and Ionic for web and mobile applications supporting farmers globally.",
    tech: ["Python", "Flask", "Ionic", "Firebase", "REST APIs"],
    links: [],
    category: "fullstack",
  },
  {
    title: "Alibaba Doner — Restaurant Website",
    description:
      "Modern restaurant website with contact info, location, current discounts/promotions, and AI-generated team photography. Full showcase of the brand online.",
    tech: ["Next.js", "Tailwind CSS", "AI Photography"],
    links: [
      {
        label: "Live Site",
        href: "https://v0-alibabamadebyowais.vercel.app/",
      },
    ],
    category: "fullstack",
  },
  {
    title: "Italian Tutor Website",
    description:
      "Landing page for an Italian tutor showcasing strengths, past reviews, pricing, and costs. Integrated Calendly for free demo booking.",
    tech: ["Next.js", "Tailwind CSS", "Calendly"],
    links: [
      {
        label: "Live Site",
        href: "https://learn-italian-with-sonia.vercel.app/",
      },
    ],
    category: "fullstack",
  },
  {
    title: "Colorbox — Inventory Management System",
    description:
      "Full inventory system for a thread selling/distribution company. Built on Yii2 PHP with MySQL, featuring barcode printing with scanner/printer integration.",
    tech: ["PHP", "Yii2", "MySQL", "Bootstrap", "Barcode"],
    links: [],
    category: "fullstack",
  },
  {
    title: "Next.js Todo App — Tutorial Series",
    description:
      "Full-stack todo app built live on YouTube to teach Next.js, Drizzle ORM, and deployment. Covers frontend, backend, database, and production deployment.",
    tech: ["Next.js", "Drizzle", "PostgreSQL", "Tailwind CSS"],
    links: [
      {
        label: "Live Demo",
        href: "https://todoappnext13-ows-ali.vercel.app/",
      },
    ],
    category: "fullstack",
  },
  {
    title: "Resume Template — Next.js + Tailwind",
    description:
      "Free and open-source resume template built with Next.js and Tailwind CSS. Features a working contact form. Built via live coding on YouTube.",
    tech: ["Next.js", "Tailwind CSS", "Contact Form"],
    links: [
      {
        label: "Live Demo",
        href: "https://my-resume-ows-ali.vercel.app/",
      },
      { label: "GitHub", href: "https://github.com/ows-ali/resume-template-next-tailwind" },
    ],
    category: "fullstack",
  },
  {
    title: "Bank Alfalah — Digital Account Opening",
    description:
      "React Native mobile app for digital account opening at Bank Alfalah. Streamlined the onboarding process for new banking customers with workflow automation.",
    tech: ["React Native", "IBM BPM", "JavaScript", "REST APIs"],
    links: [],
    category: "mobile",
  },
  {
    title: "Aptech — Student Attendance & Marks App",
    description:
      "React Native mobile app where teachers mark attendance, students check attendance, teachers upload marks. Features login/logout and push notifications when marks are released.",
    tech: ["React Native", "Push Notifications", "Auth"],
    links: [],
    category: "mobile",
  },
  {
    title: "ows-atm-cli",
    description:
      "CLI ATM simulator — run `npx ows-atm-cli` to withdraw money, check balance, add money, with PIN authentication. A fun CLI project.",
    tech: ["Node.js", "CLI", "npm"],
    links: [
      { label: "GitHub", href: "https://github.com/ows-ali/ows-atm-cli" },
    ],
    category: "mobile",
  },
  {
    title: "Hacktoberfest 2018 — PR Journey",
    description:
      "Initiated a Hacktoberfest repo where users worldwide created their first pull requests on GitHub. Helped newcomers start their open source journey.",
    tech: ["GitHub", "Open Source", "Community"],
    links: [
      {
        label: "Live Site",
        href: "https://ows-ali.github.io/Hacktoberfest/",
      },
    ],
    category: "mobile",
  },
]

const categories = [
  { id: "all", label: "All Projects", icon: Sparkles },
  { id: "ai", label: "AI / ML", icon: Brain },
  { id: "fullstack", label: "Full Stack", icon: Layout },
  { id: "mobile", label: "Mobile & CLI", icon: Smartphone },
]

export default function Projects() {
  const [active, setActive] = useState<string>("all")

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="AI systems, full stack platforms, and mobile tools I've built"
        />

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
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                    : "bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:border-zinc-600"
                }`}
              >
                <Icon size={14} />
                {cat.label}
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

function ProjectCard({
  project,
  idx,
}: {
  project: Project
  idx: number
}) {
  const catConfig = {
    ai: { border: "hover:border-purple-500/40", accent: "bg-purple-500/10" },
    fullstack: {
      border: "hover:border-blue-500/40",
      accent: "bg-blue-500/10",
    },
    mobile: {
      border: "hover:border-emerald-500/40",
      accent: "bg-emerald-500/10",
    },
  }

  const config = catConfig[project.category]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.05, duration: 0.4 }}
      className={`group relative p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 transition-all duration-300 ${config.border} hover:bg-zinc-900/80`}
    >
      <div
        className={`w-10 h-10 rounded-lg ${config.accent} flex items-center justify-center mb-4`}
      >
        {project.category === "ai" && <Brain size={18} className="text-purple-400" />}
        {project.category === "fullstack" && (
          <Layout size={18} className="text-blue-400" />
        )}
        {project.category === "mobile" && (
          <Smartphone size={18} className="text-emerald-400" />
        )}
      </div>

      <h3 className="text-base font-semibold text-zinc-100 group-hover:text-purple-300 transition-colors mb-2">
        {project.title}
      </h3>

      <p className="text-sm text-zinc-500 leading-relaxed mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-[11px] rounded-md bg-zinc-800/80 text-zinc-400"
          >
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
              className="flex items-center gap-1 text-xs text-zinc-500 hover:text-purple-400 transition-colors"
            >
              {link.label === "GitHub" ? (
                  <Code2 size={12} />
                ) : (
                <ExternalLink size={12} />
              )}
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  )
}
