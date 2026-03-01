const steps = [
  {
    number: "01",
    title: "Create your profile",
    description:
      "Link your gaming accounts. We pull your library, playtime, and stats.",
  },
  {
    number: "02",
    title: "Get matched",
    description:
      "Our algorithm pairs you with compatible gamers based on games, play style, and schedule.",
  },
  {
    number: "03",
    title: "Play together",
    description:
      "Queue up for a game date. No awkward coffee shop silences.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          How It <span className="text-accent">Works</span>
        </h2>
        <p className="text-body text-center mb-16 max-w-md mx-auto">
          Three steps to finding your player two.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line on desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-accent/30 to-transparent" />
              )}
              <div className="text-5xl font-bold text-accent/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-body leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
