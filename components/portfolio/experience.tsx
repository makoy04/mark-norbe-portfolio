import { Briefcase } from 'lucide-react'
import { experience, profile, skills } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="experience-title"
          eyebrow="Work"
          accent="experience"
          title="Systems thinking, from SAP to n8n."
          description={profile.summary}
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <ol className="relative flex flex-col gap-10 border-l border-primary/30 pl-8 md:pl-10">
            {experience.map((job) => (
              <li key={job.role} data-reveal="left" className="relative">
                <span
                  aria-hidden="true"
                  className="hexagon absolute -left-[3.05rem] top-6 flex size-9 items-center justify-center bg-primary text-primary-foreground md:-left-[3.55rem]"
                >
                  <Briefcase className="size-4" />
                </span>
                <div className="rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40 md:p-8">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{job.role}</h3>
                      <p className="mt-1 text-sm text-primary">{job.org}</p>
                    </div>
                    <span className="w-fit shrink-0 rounded-md bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-5 leading-relaxed">{job.summary}</p>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="hexagon mt-1.5 size-2 shrink-0 bg-primary" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <aside aria-labelledby="skills-title" data-reveal="right" className="h-fit lg:sticky lg:top-24">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 id="skills-title" className="mb-2 text-lg font-bold">
                Technical <span className="text-primary">skills</span>
              </h3>
              <dl className="divide-y divide-border">
                {skills.map((skill) => (
                  <div key={skill.group} className="py-4">
                    <dt className="text-sm font-medium">{skill.group}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{skill.items}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
