export default function ThanksPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-accent-soft flex items-center justify-center mx-auto mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-text mb-2">Thank you!</h1>
        <p className="text-muted">Your message has been sent. I&apos;ll get back to you soon.</p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 rounded-lg bg-accent text-inverse text-sm font-medium transition-all duration-300"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}
