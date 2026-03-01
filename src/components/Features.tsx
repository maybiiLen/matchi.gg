const features = [
  {
    label: "01",
    title: "Game-Based Matching",
    description:
      "Match with people who play the same games on the same platforms. No more guessing if they're actually a gamer.",
    illustration: (
      <svg viewBox="0 0 480 360" fill="none" className="w-full h-full">
        {/* Two profile cards overlapping */}
        <rect x="80" y="60" width="180" height="240" rx="16" fill="#ebebeb" />
        <rect x="220" y="60" width="180" height="240" rx="16" fill="#e0dfdd" />
        {/* Overlap area */}
        <rect x="220" y="60" width="40" height="240" rx="0" fill="#d5d3cf" />
        {/* Avatar circles */}
        <circle cx="170" cy="140" r="30" fill="#d5d3cf" />
        <circle cx="310" cy="140" r="30" fill="#ccc9c4" />
        {/* Game tags on left card */}
        <rect x="120" y="190" width="60" height="18" rx="9" fill="#d5d3cf" />
        <rect x="190" y="190" width="40" height="18" rx="9" fill="#d5d3cf" />
        <rect x="120" y="216" width="50" height="18" rx="9" fill="#d5d3cf" />
        {/* Game tags on right card */}
        <rect x="270" y="190" width="60" height="18" rx="9" fill="#ccc9c4" />
        <rect x="340" y="190" width="40" height="18" rx="9" fill="#ccc9c4" />
        <rect x="270" y="216" width="50" height="18" rx="9" fill="#ccc9c4" />
        {/* Connection line */}
        <line x1="200" y1="140" x2="280" y2="140" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.2" />
        {/* Heart at center */}
        <path
          d="M240 148 C240 148 232 142 232 136 C232 133 235 130 238 130 C239 130 240 131 240 132 C240 131 241 130 242 130 C245 130 248 133 248 136 C248 142 240 148 240 148Z"
          fill="#1a1a1a"
          opacity="0.15"
        />
      </svg>
    ),
  },
  {
    label: "02",
    title: "Duo Date",
    description:
      "Play a game together as your first date, right from the app. No awkward silences — just co-op vibes.",
    illustration: (
      <svg viewBox="0 0 480 360" fill="none" className="w-full h-full">
        {/* Game screen */}
        <rect x="90" y="50" width="300" height="200" rx="12" fill="#ebebeb" />
        <rect x="100" y="58" width="280" height="175" rx="4" fill="#e0dfdd" />
        {/* Game UI elements */}
        <rect x="120" y="80" width="60" height="8" rx="4" fill="#d5d3cf" />
        <rect x="120" y="96" width="40" height="8" rx="4" fill="#d5d3cf" />
        <rect x="300" y="80" width="60" height="8" rx="4" fill="#d5d3cf" />
        <rect x="320" y="96" width="40" height="8" rx="4" fill="#d5d3cf" />
        {/* Two cursors */}
        <polygon points="200,140 200,165 210,158" fill="#1a1a1a" opacity="0.15" />
        <polygon points="280,130 280,155 270,148" fill="#1a1a1a" opacity="0.1" />
        {/* Chat bubbles below */}
        <rect x="110" y="275" width="120" height="36" rx="18" fill="#ebebeb" />
        <rect x="250" y="275" width="100" height="36" rx="18" fill="#e0dfdd" />
        <rect x="126" y="287" width="50" height="8" rx="4" fill="#d5d3cf" />
        <rect x="186" y="287" width="30" height="8" rx="4" fill="#d5d3cf" />
        <rect x="266" y="287" width="40" height="8" rx="4" fill="#ccc9c4" />
        <rect x="314" y="287" width="22" height="8" rx="4" fill="#ccc9c4" />
      </svg>
    ),
  },
  {
    label: "03",
    title: "Real Profiles",
    description:
      "Auto-sync your Steam, Xbox, PlayStation, and Riot libraries. No fake gamertags.",
    illustration: (
      <svg viewBox="0 0 480 360" fill="none" className="w-full h-full">
        {/* Profile card */}
        <rect x="120" y="40" width="240" height="280" rx="16" fill="#ebebeb" />
        {/* Avatar */}
        <circle cx="240" cy="110" r="36" fill="#d5d3cf" />
        {/* Name bar */}
        <rect x="190" y="164" width="100" height="12" rx="6" fill="#d5d3cf" />
        {/* Verified badge */}
        <circle cx="298" cy="170" r="8" fill="#1a1a1a" opacity="0.1" />
        <path d="M295 170 L297 172 L301 168" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.2" />
        {/* Platform icons row */}
        <rect x="170" y="196" width="28" height="28" rx="8" fill="#e0dfdd" />
        <rect x="206" y="196" width="28" height="28" rx="8" fill="#e0dfdd" />
        <rect x="242" y="196" width="28" height="28" rx="8" fill="#e0dfdd" />
        <rect x="278" y="196" width="28" height="28" rx="8" fill="#e0dfdd" />
        {/* Game library */}
        <rect x="155" y="244" width="70" height="22" rx="11" fill="#e0dfdd" />
        <rect x="233" y="244" width="55" height="22" rx="11" fill="#e0dfdd" />
        <rect x="155" y="274" width="50" height="22" rx="11" fill="#e0dfdd" />
        <rect x="213" y="274" width="65" height="22" rx="11" fill="#e0dfdd" />
        <rect x="286" y="274" width="40" height="22" rx="11" fill="#e0dfdd" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="font-[family-name:var(--font-dm-serif)] font-normal text-[40px] text-[#1a1a1a] text-center">
          Why Matchi
        </h2>
        <p className="font-[family-name:var(--font-inter)] text-[17px] text-[#555555] text-center mt-3">
          Built different from every dating app you have tried.
        </p>

        <div className="mt-20 flex flex-col gap-28">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* Image block */}
              <div className={`${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                <div className="aspect-[4/3] rounded-[20px] bg-[#f5f3f0] overflow-hidden">
                  {feature.illustration}
                </div>
              </div>

              {/* Text block */}
              <div className={`${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                <span className="font-[family-name:var(--font-dm-serif)] text-[56px] text-[#e5e5e5] leading-none">
                  {feature.label}
                </span>
                <h3 className="font-[family-name:var(--font-dm-serif)] font-normal text-[32px] text-[#1a1a1a] mt-3 leading-[1.2]">
                  {feature.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[16px] text-[#555555] leading-[1.7] mt-4 max-w-[380px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
