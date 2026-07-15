"use client"

import { useState, useEffect } from "react"
import { useLang } from "@/lib/LanguageProvider"
import { useTheme } from "@/lib/ThemeProvider"
import { Menu, X, Moon, Sun } from "lucide-react"

const links = ["about", "projects", "experience", "skills", "contact"] as const

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-nav/80 backdrop-blur-lg border-b border-nav-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-nav-logo"
        >
          OA
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-nav-link hover:text-nav-link-hover transition-colors"
            >
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="p-2 rounded-lg text-nav-link hover:text-nav-link-hover hover:bg-nav-border transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setLang(lang === "de" ? "en" : "de")}
            className="px-2.5 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider text-nav-link hover:text-nav-link-hover hover:bg-nav-border transition-all"
          >
            {lang === "de" ? "EN" : "DE"}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-nav-link hover:text-nav-link-hover"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-nav/95 backdrop-blur-lg border-b border-nav-border">
          <nav className="flex flex-col px-4 py-4 gap-3 text-sm">
            {links.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="text-nav-link hover:text-nav-link-hover transition-colors py-1"
              >
                {t(`nav.${id}`)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
