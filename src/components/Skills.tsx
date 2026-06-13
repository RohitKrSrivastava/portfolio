import { profile } from "@/data/profile";
import { SectionHeader } from "./About";
import { ScrollReveal } from "./ScrollReveal";

const skillCategories = [
  { label: "Architecture", key: "architecture" as const, color: "from-blue-500 to-cyan-500" },
  { label: "Backend", key: "backend" as const, color: "from-blue-500 to-cyan-500" },
  { label: "Frontend", key: "frontend" as const, color: "from-violet-500 to-purple-500" },
  { label: "Cloud & DevOps", key: "cloud" as const, color: "from-emerald-500 to-teal-500" },
  { label: "Data & Messaging", key: "data" as const, color: "from-orange-500 to-amber-500" },
  { label: "AI & LLM", key: "ai" as const, color: "from-pink-500 to-rose-500" },
  { label: "Workflow & RPA", key: "workflow" as const, color: "from-indigo-500 to-blue-500" },
  { label: "Other", key: "other" as const, color: "from-slate-500 to-slate-400" },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeader title="Technical Skills" subtitle="Expertise" />
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.key} delay={i * 60}>
              <div className="glass-card h-full p-6">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`h-2 w-8 rounded-full bg-gradient-to-r ${cat.color}`}
                />
                <h3 className="font-semibold text-white">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.skills[cat.key].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Languages() {
  return (
    <section id="languages" className="section-padding bg-section-alt">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeader title="Languages" subtitle="Communication" />
        </ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.languages.map((lang, i) => (
            <ScrollReveal key={lang.name} delay={i * 100}>
              <div className="glass-card flex items-center justify-between p-6">
              <span className="text-lg font-semibold text-white">{lang.name}</span>
              <span className="rounded-full bg-slate-200 dark:bg-slate-800 px-4 py-1.5 text-sm text-slate-700 dark:text-slate-300">
                {lang.level}
              </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
