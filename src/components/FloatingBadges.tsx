const floatingTech = [
  { label: ".NET", style: "float-badge-1" },
  { label: "React", style: "float-badge-2" },
  { label: "AWS", style: "float-badge-3" },
  { label: "GenAI", style: "float-badge-4" },
  { label: "Java", style: "float-badge-5" },
  { label: "Azure", style: "float-badge-6" },
  { label: "Fix Protocol", style: "float-badge-7" },
  { label: "E Trading", style: "float-badge-8" },
  { label: "Kafka", style: "float-badge-9" },
  { label: "Docker", style: "float-badge-10" },
  { label: "Python", style: "float-badge-11" },
  { label: "Cloud", style: "float-badge-12" },
];

export function FloatingBadges() {
  return (
    <div className="floating-badges pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {floatingTech.map((tech) => (
        <span key={tech.label} className={`float-badge ${tech.style}`}>
          {tech.label}
        </span>
      ))}
    </div>
  );
}
