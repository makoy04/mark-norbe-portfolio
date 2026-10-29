import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function Contact() {
  const whatsapp = `https://wa.me/${profile.phone.replace(/\D/g, '')}`

  const channels = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: 'WhatsApp', value: profile.phoneDisplay, href: whatsapp, icon: MessageCircle, external: true },
    { label: 'Phone', value: profile.phoneDisplay, href: `tel:${profile.phone}`, icon: Phone },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-background/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div
          data-reveal="zoom"
          className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-8 md:p-14"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-primary/20 blur-3xl"
          />
          <div className="relative">
            <p className="text-base">
              Get in <span className="text-primary">touch</span>
            </p>
            <h2
              id="contact-title"
              className="mt-3 max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight md:text-5xl"
            >
              {"Let's build smarter workflows "}
              <span className="text-primary">together.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Need help streamlining repetitive tasks, connecting your applications, organizing leads, or
              building AI-powered workflows? {"Let's"} discuss your requirements and find a practical solution.
            </p>

            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {channels.map((c, i) => (
                <li
                  key={c.label}
                  data-reveal
                  style={{ '--reveal-delay': `${150 + i * 100}ms` } as React.CSSProperties}
                >
                  <a
                    href={c.href}
                    data-ripple
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-background/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 active:scale-[0.98]"
                  >
                    <span className="flex min-w-0 items-center gap-4">
                      <span className="hexagon flex size-11 shrink-0 items-center justify-center bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <c.icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                          {c.label}
                        </span>
                        <span className="block truncate font-medium">{c.value}</span>
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              Based in the {profile.location} · Working with clients remotely
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
