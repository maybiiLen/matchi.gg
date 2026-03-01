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
    <section className="border-t border-[#e5e5e5] pt-12 pb-24 px-6">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="font-[family-name:var(--font-dm-serif)] font-normal text-[40px] text-[#1a1a1a] text-center">
          How It Works
        </h2>
        <p className="font-[family-name:var(--font-inter)] text-[17px] text-[#555555] text-center mt-3">
          Three steps to finding your player two.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative px-8 py-10 ${
                i < steps.length - 1
                  ? "md:border-r md:border-[#e5e5e5] max-md:border-b max-md:border-[#e5e5e5]"
                  : ""
              }`}
            >
              <div className="font-[family-name:var(--font-dm-serif)] font-normal text-[56px] text-[#e5e5e5] leading-none">
                {step.number}
              </div>
              <h3 className="font-[family-name:var(--font-inter)] font-semibold text-[17px] text-[#1a1a1a] mt-4">
                {step.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[15px] text-[#555555] leading-[1.65] mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
