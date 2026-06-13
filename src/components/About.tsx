import { profile } from "@/data/profile";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeader title="About Me" subtitle="Professional Summary" />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="glass-card p-8 md:p-10">
          {profile.about.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className={`leading-relaxed text-slate-700 dark:text-slate-300 ${i > 0 ? "mt-4" : ""}`}
            >
              {paragraph}
            </p>
          ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      {subtitle && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
    </div>
  );
}
