
import Image from 'next/image'
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

const floatingTools = [
  { name: 'n8n', className: 'left-0 top-10', delay: '0s' },
  { name: 'Zapier', className: '-right-2 top-24', delay: '1.5s' },
  { name: 'Make.com', className: '-left-4 bottom-20', delay: '3s' },
  { name: 'GoHighLevel', className: 'right-0 bottom-6', delay: '2.2s' },
]

export function Hero() {
  const channels = [
    { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
    {
      label: 'WhatsApp',
      href: `https://wa.me/${profile.phone.replace(/\D/g, '')}`,
      icon: MessageCircle,
      external: true,
    },
    { label: 'Phone', href: `tel:${profile.phone}`, icon: Phone },
  ]

  return (
    <section id="top" aria-labelledby="hero-title" className="relative -mt-20 overflow-hidden pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 pb-24 pt-12 md:grid-cols-[1.15fr_1fr] md:gap-10 md:pb-32 md:pt-20 lg:gap-16">
        <div data-reveal="left">
          <p className="text-xl text-foreground md:text-2xl">
            Hello, <span className="text-primary">{"I'm"}</span>
          </p>

          <h1
            id="hero-title"
            className="mt-3 text-balance text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl md:text-6xl"
          >
            {profile.name}
          </h1>

          <p className="mt-4 font-heading text-lg font-semibold text-foreground md:text-2xl">
            {profile.title}
          </p>
          <p className="mt-1 text-sm text-muted-foreground md:text-base">{profile.subtitle}</p>
          <p className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              data-ripple
              className="glow inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              {"Let's Talk"}
            </a>
            <a
              href="#work"
              data-ripple
              className="group inline-flex items-center gap-2 rounded-lg border border-primary/40 px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 active:scale-95"
            >
              View my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-5">
            <span className="text-sm text-foreground/90">Reach me on</span>
            <ul className="flex items-center gap-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    data-ripple
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="hexagon flex size-12 items-center justify-center bg-accent text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground active:scale-90"
                  >
                    <c.icon className="size-5" aria-hidden="true" />
                    <span className="sr-only">{c.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              {profile.location}
            </span>
          </div>
        </div>

        {/* Profile photo inside the existing animated hexagon */}
        <div data-reveal="zoom" className="relative mx-auto -mt-16 aspect-square w-full max-w-md md:-mt-24">
          <div
            aria-hidden="true"
            className="absolute inset-[12%] rounded-full bg-primary/30 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="hexagon animate-spin-slow absolute inset-[2%] border border-primary/30 bg-primary/5"
          />

          <div className="animate-float absolute inset-[10%]">
            <div className="hexagon size-full bg-gradient-to-br from-primary to-[oklch(0.55_0.13_170)] p-[3px]">
              <div className="hexagon relative size-full overflow-hidden bg-card">
                <Image
                  src="/mark-profile.jpg"
                  alt="Mark P. Norbe, AI Automation Specialist"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 80vw, 420px"
                  className="object-cover object-[center_20%]"
                />
              </div>
            </div>
          </div>

          <ul aria-label="Core tools">
            {floatingTools.map((tool) => (
              <li
                key={tool.name}
                style={{ animationDelay: tool.delay }}
                className={`animate-float absolute rounded-lg border border-primary/30 bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-lg shadow-black/30 backdrop-blur ${tool.className}`}
              >
                <span
                  className="mr-1.5 inline-block size-1.5 rounded-full bg-primary align-middle"
                  aria-hidden="true"
                />
                {tool.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
