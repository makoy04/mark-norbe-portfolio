import { Quote } from 'lucide-react'
import { expectations, profile, testimonials } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Testimonials() {
  const hasTestimonials = testimonials.length > 0

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="testimonials-title"
          eyebrow="Client"
          accent="testimonials"
          align="center"
          title={hasTestimonials ? 'What clients say.' : 'What you can expect working with me.'}
          description="I value feedback that reflects reliability, communication, problem-solving, and the practical results of an automation project."
        />

        {hasTestimonials ? (
          <ul className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <li
                key={t.name}
                data-reveal
                style={{ '--reveal-delay': `${(i % 2) * 120}ms` } as React.CSSProperties}
                className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50"
              >
                <figure>
                  <Quote className="mb-5 size-8 text-primary" aria-hidden="true" />
                  <blockquote className="text-pretty text-lg leading-relaxed">{`"${t.quote}"`}</blockquote>
                  <figcaption className="mt-6 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{t.name}</span>, {t.business}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <ul className="grid gap-6 md:grid-cols-3">
              {expectations.map((item, i) => (
                <li
                  key={item.title}
                  data-reveal
                  style={{ '--reveal-delay': `${i * 120}ms` } as React.CSSProperties}
                >
                  <div className="group h-full rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                    <span className="hexagon mx-auto flex size-14 items-center justify-center bg-accent font-heading font-bold text-accent-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div
              data-reveal
              className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl border border-dashed border-primary/30 bg-card/50 p-7 md:flex-row md:items-center"
            >
              <div className="flex items-start gap-4">
                <Quote className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  Client testimonials will appear here once shared with permission. Worked with me on a
                  project? {"I'd"} love to hear your feedback.
                </p>
              </div>
              <a
                href={`mailto:${profile.email}?subject=Feedback%20for%20Mark`}
                data-ripple
                className="shrink-0 rounded-lg border border-primary/40 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10 active:scale-95"
              >
                Share feedback
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
