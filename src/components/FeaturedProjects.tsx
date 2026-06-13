const projects = [
  {
    title: "AI-Powered Enterprise Assistant",
    tech: "OpenAI • RAG • Azure",
    description:
      "Enterprise AI assistant using Retrieval-Augmented Generation and LLMs.",
  },
  {
    title: "E-Trade Trading Platform",
    tech: ".NET Core • Kafka • FIX Protocol",
    description:
      "Low-latency trading platform supporting institutional workflows.",
  },
  {
    title: "Telecom Customer Portal",
    tech: "Angular • .NET • CRM",
    description:
      "Digital onboarding and service management platform.",
  },
  {
    title: "Banking Workflow Automation",
    tech: "Spring Boot • K2 • Microservices",
    description:
      "Workflow automation for financial operations and approvals.",
  },
];

export function FeaturedProjects() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-10">
          Selected Enterprise Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <div className="text-cyan-400 mb-3">
                {project.tech}
              </div>

              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}