import { Check } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Projects() {
  return (
    <section id="work" aria-labelledby="work-title" className="bg-background/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="work-title"
          eyebrow="Previous"
          accent="work"
          title="Selected automation projects."
          description="Real workflows built and tested across CRM, scheduling, reporting, and AI content production."
        />

        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <li
              key={project.title}
              data-reveal
              style={{ '--reveal-delay': `${(i % 2) * 120}ms` } as React.CSSProperties}
              className={i === projects.length - 1 && projects.length % 2 === 1 ? 'md:col-span-2' : ''}
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 md:p-8">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-6 font-heading text-8xl font-bold text-primary/10 transition-colors duration-300 group-hover:text-primary/20"
                >
                  {project.number}
                </span>
                <p className="text-xs font-medium uppercase tracking-widest text-primary">{project.subtitle}</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight">{project.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>

                <h4 className="sr-only">Key features</h4>
                <ul className="mt-5 flex flex-col gap-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 rounded-lg bg-accent/50 p-4 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">Business value: </span>
                  {project.value}
                </p>

                <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Tools used">
                  {project.stack.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-md border border-primary/30 px-2.5 py-1 text-xs text-accent-foreground"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
