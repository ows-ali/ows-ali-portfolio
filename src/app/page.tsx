"use client"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Services from "@/components/Services"
import Content from "@/components/Content"
import Contact from "@/components/Contact"
import ChatBubble from "@/components/ChatBubble"
import { useLang } from "@/lib/LanguageProvider"

export default function Home() {
  const { t } = useLang()

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Services />
      <Content />
      <Contact />
      <ChatBubble />
      <footer className="py-8 text-center text-sm text-subtle border-t border-border">
        <p>&copy; {new Date().getFullYear()} Owais Ali. {t("footer")}</p>
      </footer>
    </main>
  )
}
