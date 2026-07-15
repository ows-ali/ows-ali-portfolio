"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"
import { useTheme } from "@/lib/ThemeProvider"

const quickQ = [
  "Tell me about yourself",
  "How can I work with you?",
  "What projects have you built?",
  "What are your skills?",
]

export default function ChatBubble() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Hi! I'm Owais's AI assistant. Ask me anything about his work, skills, or how to get in touch!" },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const send = async (msg?: string) => {
    const text = (msg || input).trim()
    if (!text || loading) return
    setInput("")
    setMessages((prev) => [...prev, { role: "user", text }])
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      })
      const data = await res.json()
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Sorry, something went wrong. Try again later." },
      ])
    }
    setLoading(false)
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-inverse shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
        aria-label="Chat"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-[var(--bg)]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent-soft flex items-center justify-center text-xs font-bold text-accent">
                  OA
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">Owais AI</p>
                  <p className="text-[11px] text-subtle">Ask me anything</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted hover:text-text transition-colors">
                <X size={16} />
              </button>
            </div>

            <div className="h-[360px] overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-accent text-inverse rounded-br-md"
                        : "bg-[var(--bg)] text-text border border-border rounded-bl-md"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-[var(--bg)] border border-border rounded-2xl rounded-bl-md px-4 py-2.5">
                    <Loader2 size={16} className="animate-spin text-muted" />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {messages.length < 3 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {quickQ.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="px-3 py-1.5 text-[11px] rounded-full border border-border bg-[var(--bg)] text-muted hover:border-accent-border hover:text-accent transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div className="flex items-center gap-2 px-4 py-3 border-t border-border bg-[var(--bg)]">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 rounded-full bg-card border border-border text-text placeholder-subtle text-sm focus:outline-none focus:border-accent-border transition-colors"
              />
              <button
                onClick={() => send()}
                disabled={loading || !input.trim()}
                className="w-9 h-9 rounded-full bg-accent text-inverse flex items-center justify-center disabled:opacity-50 transition-opacity shrink-0"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
