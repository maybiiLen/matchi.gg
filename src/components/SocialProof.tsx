const stats = [
  { value: "3.4B+", label: "gamers worldwide" },
  { value: "46%", label: "are women" },
  { value: "0", label: "apps built right for them" },
]

export default function SocialProof() {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-surface/50 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-body">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="text-body max-w-lg mx-auto text-lg leading-relaxed">
          Every gamer dating app before us failed because of bad execution. We
          are fixing that.
        </p>
      </div>
    </section>
  )
}
