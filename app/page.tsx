import { BackToTop } from '@/components/portfolio/back-to-top'
import { Contact } from '@/components/portfolio/contact'
import { Experience } from '@/components/portfolio/experience'
import { Hero } from '@/components/portfolio/hero'
import { MotionEffects } from '@/components/portfolio/motion-effects'
import { Projects } from '@/components/portfolio/projects'
import { Services } from '@/components/portfolio/services'
import { SiteFooter } from '@/components/portfolio/site-footer'
import { SiteHeader } from '@/components/portfolio/site-header'
import { Testimonials } from '@/components/portfolio/testimonials'

export default function Page() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/images/topo-bg.png')] bg-cover bg-center opacity-[0.12]"
      />
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
      <BackToTop />
      <MotionEffects />
    </>
  )
}
