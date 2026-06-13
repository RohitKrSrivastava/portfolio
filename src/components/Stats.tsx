import { profile } from "@/data/profile";
//import { Timer, Building2, Briefcase, Users } from "lucide-react";
import { AnimatedCounter } from "./BackToTop";
import { ScrollReveal } from "./ScrollReveal";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience", icon: "⏱" },
  { value: profile.experience.length, suffix: "", label: "Roles Led", icon: "🏢" },
  { value: profile.certifications.length, suffix: "+", label: "Certifications", icon: "🎓" },
  { value: 25, suffix: "+", label: "Projects Delivered", icon: "💼" },
  { value: 10, suffix: "+", label: "Enterprise Clients", icon: "🏣" },
  { value: 5, suffix: "+", label: "Countries Served", icon: "🌐" },
];


export function Stats() {
  return (
    <section className="stats-section relative px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 80}>
            <div className="stat-card group">
              <span className="stat-icon" aria-hidden="true">
                {stat.icon}
              </span>
              <p className="stat-value">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="stat-label">{stat.label}</p>
              <div className="stat-shine" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
