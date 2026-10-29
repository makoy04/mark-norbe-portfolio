export function SectionHeading({
  eyebrow,
  accent,
  title,
  description,
  id,
  align = 'left',
}: {
  eyebrow: string
  accent: string
  title: string
  description?: string
  id: string
  align?: 'left' | 'center'
}) {
  return (
    <div data-reveal className={`mb-14 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 text-base text-foreground/90">
        {eyebrow} <span className="text-primary">{accent}</span>
      </p>
      <h2 id={id} className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
