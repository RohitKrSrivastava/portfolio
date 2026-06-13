const domains = [
  "Banking & Financial Services",
  "Telecommunications",
  "E-Trade Platforms",
  "Enterprise CRM Systems",
  "Digital Transformation",
  "AI & Intelligent Automation",
  "Workflow & BPM Solutions",
  "Data Analytics Platforms",
];

export function CoreDomains() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-10">
          Core Domains
        </h2>

        <div className="grid gap-4 md:grid-cols-4">
          {domains.map((item) => (
            <div
              key={item}
              className="glass-card p-4 text-center font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}