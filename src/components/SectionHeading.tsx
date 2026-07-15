interface Props {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-purple-300 to-purple-400 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-20 h-0.5 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
    </div>
  )
}
