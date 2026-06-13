import { profile } from "@/data/profile";
import { SectionHeader } from "./About";
import { ScrollReveal } from "./ScrollReveal";

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-section-alt">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeader title="Experience" subtitle="Career Journey" />
        </ScrollReveal>
        <div className="relative">
          <div className="timeline-line absolute left-4 top-0 hidden h-full w-px md:left-8 md:block" />
          <div className="flex flex-col gap-6">
            {profile.experience.map((job, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="timeline-item glass-card relative p-6 md:ml-16 md:p-8">
                <div className="timeline-dot absolute -left-0 top-8 hidden h-4 w-4 md:-left-10 md:block" />
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-white md:text-xl">
                      {job.role}
                    </h3>
                    <p className="text-cyan-400 font-medium">{job.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
                      {job.period}
                    </span>
                    {job.current && (
                      <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-semibold text-emerald-400">
                        Current
                      </span>
                    )}
                  </div>
                </div>
                <p className="mb-2 text-sm text-slate-600 dark:text-slate-500">{job.location}</p>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-400">
                  {job.description}
                </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
