import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Services from "@/components/Services"
import Content from "@/components/Content"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Services />
      <Content />
      <Contact />
      <footer className="py-8 text-center text-sm text-zinc-600 border-t border-zinc-800/50">
        <p>&copy; {new Date().getFullYear()} Owais Ali. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  )
}
