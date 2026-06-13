import { profile } from "@/data/profile";
import { Brain, Cloud, Users } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const pillars = [
  {
    icon: Brain,
    title: "AI & GenAI",
    description:
      "Integrating LLMs, LangChain, and OpenAI into enterprise apps for intelligent automation and natural language experiences.",
    gradient: "from-pink-500/20 to-rose-500/20",
    accent: "text-pink-400",
  },
  {
    icon: Cloud,
    title: "Cloud & Architecture",
    description:
      "Designing scalable systems on AWS & Azure with event-driven patterns using Kafka, RabbitMQ, and modern CI/CD pipelines.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    accent: "text-cyan-400",
  },
  {
    icon: Users,
    title: "Engineering Leadership",
    description:
      "Leading full-stack teams, mentoring developers, enforcing code quality, and aligning technical decisions with business goals.",
    gradient: "from-violet-500/20 to-purple-500/20",
    accent: "text-violet-400",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Core Strengths
            </p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              What I Bring to the Table
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 120}>
              <div className="expertise-card group h-full p-8">
                <div
                  className={`mb-5 inline-flex rounded-2xl bg-gradient-to-br ${pillar.gradient} p-4 ${pillar.accent}`}
                >
                  <pillar.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {pillar.description}
                </p>
                <div className="expertise-card-glow" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const techItems = [
  ...profile.skills.backend,
  ...profile.skills.frontend,
  ...profile.skills.cloud,
  ...profile.skills.ai,
  ...profile.skills.data,
  ...profile.skills.workflow,
];

export function TechMarquee() {
  const items = [...techItems, ...techItems];

  return (
    <section className="marquee-section overflow-hidden py-10" aria-hidden="true">
      <div className="marquee-fade-left" />
      <div className="marquee-fade-right" />
      <div className="marquee-track">
        {items.map((tech, i) => (
          <span key={`${tech}-${i}`} className="marquee-item">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
