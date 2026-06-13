import { GraduationCap, BadgeCheck } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "./About";
import { ScrollReveal } from "./ScrollReveal";

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeader title="Education" subtitle="Academic Background" />
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2">
          {profile.education.map((edu, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="glass-card group h-full p-6 transition-transform hover:-translate-y-1 md:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-400">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mb-1 text-lg font-bold text-white">{edu.degree}</h3>
              <p className="mb-2 text-cyan-400">{edu.field}</p>
              <p className="font-medium text-slate-300">{edu.school}</p>
              {edu.location && (
                <p className="mt-1 text-sm text-slate-500">{edu.location}</p>
              )}
              <p className="mt-3 text-sm font-medium text-slate-400">
                {edu.period}
              </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-section-alt">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeader title="Certifications" subtitle="Licenses & Credentials" />
        </ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profile.certifications.map((cert, i) => (
            <ScrollReveal key={i} delay={(i % 3) * 80}>
              <div className="cert-card flex h-full items-start gap-4 rounded-2xl border border-slate-700/50 bg-slate-900/50 p-5 transition-all hover:border-cyan-500/40 hover:bg-slate-800/50 hover:-translate-y-1">
              <div className="shrink-0 rounded-lg bg-amber-500/10 p-2 text-amber-400">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{cert.name}</h3>
                <p className="mt-0.5 text-xs text-slate-400">{cert.issuer}</p>
                {cert.year && (
                  <p className="mt-1 text-xs font-medium text-cyan-500/80">
                    {cert.year}
                  </p>
                )}
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
