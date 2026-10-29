import { profile } from '@/lib/portfolio-data'
import { Logo } from './logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-10 md:flex-row md:items-center">
        <Logo />
        <p className="text-sm text-muted-foreground">
          {`© ${new Date().getFullYear()} ${profile.name} · ${profile.title}`}
        </p>
      </div>
    </footer>
  )
}
