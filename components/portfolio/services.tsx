import { Boxes, Bot, CalendarCheck, Megaphone, Users, Workflow } from 'lucide-react'
import { services } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

const icons = {
  workflow: Workflow,
  bot: Bot,
  users: Users,
  calendar: CalendarCheck,
  megaphone: Megaphone,
  boxes: Boxes,
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-background/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="services-title"
          eyebrow="My"
          accent="services"
          title="Automation that fits the way your business already works."
          description="From a single integration to a full lead-to-booking pipeline, I connect your tools so work moves on its own."
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon]
            return (
              <li
                key={service.title}
                data-reveal
                style={{ '--reveal-delay': `${(i % 3) * 100}ms` } as React.CSSProperties}
              >
                <div className="group h-full rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                  <span className="mx-auto mb-6 flex size-16 items-center justify-center rounded-xl border border-primary/30 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-7" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
