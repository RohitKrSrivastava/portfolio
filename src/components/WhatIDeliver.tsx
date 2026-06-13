import { ScrollReveal } from "./ScrollReveal";

const items = [
  {
    title: "Enterprise Solution Architecture",
    description:
      "Designing scalable cloud-native platforms using .NET, Spring Boot, Kafka, Azure and AWS.",
  },
  {
    title: "Engineering Leadership",
    description:
      "Leading cross-functional teams, mentoring engineers and driving delivery excellence.",
  },
  {
    title: "AI & Generative AI Solutions",
    description:
      "Building intelligent enterprise applications using OpenAI, LLMs, RAG and AI Agents.",
  },
  {
    title: "Banking, Telecom & E-Trade Platforms",
    description:
      "Delivering mission-critical systems for financial services and telecommunications.",
  },
];

export function WhatIDeliver() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-10 text-center">
          What I Deliver
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <ScrollReveal key={index}>
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}