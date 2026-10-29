import Link from 'next/link'

export function Logo() {
  return (
    <Link
      href="#top"
      className="group inline-flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      aria-label="Mark P. Norbe — back to top"
    >
      <span
        aria-hidden="true"
        className="hexagon flex size-9 items-center justify-center bg-primary font-heading text-xs font-bold text-primary-foreground transition-transform duration-500 group-hover:rotate-[360deg]"
      >
        MN
      </span>
      <span className="font-heading text-lg font-bold tracking-tight">
        Mark P. <span className="text-primary">Norbe</span>
      </span>
    </Link>
  )
}
