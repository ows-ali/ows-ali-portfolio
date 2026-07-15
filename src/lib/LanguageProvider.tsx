"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"

type Lang = "en" | "de"

type LangContext = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const Context = createContext<LangContext>({
  lang: "de",
  setLang: () => {},
  t: () => "",
})

function deepGet(obj: unknown, path: string): string {
  const keys = path.split(".")
  let current: unknown = obj
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key]
    } else {
      return path
    }
  }
  return typeof current === "string" ? current : path
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de")
  const [dict, setDict] = useState<Record<string, unknown>>({})

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    localStorage.setItem("lang", l)
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null
    if (saved === "en" || saved === "de") setLangState(saved)
    import(`../../locales/${lang}.json`).then((m) => setDict(m.default || m))
  }, [lang])

  const t = useCallback((key: string) => deepGet(dict, key), [dict])

  return <Context.Provider value={{ lang, setLang, t }}>{children}</Context.Provider>
}

export const useLang = () => useContext(Context)
