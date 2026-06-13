export function CurrentlyExploring() {
  const topics = [
    "AI Agents",
    "Multi-Agent Systems",
    "MCP Servers",
    "RAG Architectures",
    "Enterprise AI Adoption",
    "Agentic Workflows",
  ];

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Currently Exploring
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {topics.map((topic) => (
            <div
              key={topic}
              className="glass-card px-5 py-3 rounded-xl"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}