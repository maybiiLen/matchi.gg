const features = [
  {
    label: "01",
    title: "Match on what you play",
    description:
      "We pair you with people who play the same games on the same platforms. No swiping through profiles hoping they actually own a controller.",
    illustration: (
      <div className="w-full h-full flex items-center justify-center p-8 relative">
        <div className="w-[320px] rounded-[16px] overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.08)] border border-[#e5e5e5]">
          <img src="/img2.png" alt="Match on what you play" className="w-full object-cover" />
        </div>
        {/* Match badge */}
        <div className="absolute bottom-6 right-6 bg-white border border-[#e5e5e5] rounded-[14px] px-5 py-3 shadow-sm">
          <p className="font-[family-name:var(--font-dm-serif)] text-[18px] text-[#1a1a1a]">It&apos;s a match!</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex -space-x-2">
              <div className="w-5 h-5 rounded-full bg-[#e5e5e5] border-2 border-white" />
              <div className="w-5 h-5 rounded-full bg-[#d5d3cf] border-2 border-white" />
            </div>
            <span className="font-[family-name:var(--font-inter)] text-[11px] text-[#999]">Valorant</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "02",
    title: "Your first date is already planned",
    description:
      "Pick a game, queue up, and play together. That's the date. No small talk over coffee. Just co-op vibes from the start.",
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
    title: "No fake gamertags",
    description:
      "Auto-sync your Steam, Xbox, PlayStation, and Riot libraries. Your profile is your real gaming identity, verified.",
    illustration: (
      <div className="w-full h-full flex items-center justify-center p-6">
        <div className="w-[280px] bg-white rounded-[20px] shadow-[0_2px_20px_rgba(0,0,0,0.08)] p-6 font-[family-name:var(--font-inter)]">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-[#e5e5e5]">
              <img src="/image5.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="w-[10px] h-[10px] rounded-full bg-[#4ade80] -mt-2 ml-12 relative z-10 border-2 border-white" />
            <p className="text-[15px] font-semibold text-[#1a1a1a] mt-2">proGamer123</p>
          </div>
          {/* Platform icons */}
          <div className="flex justify-center gap-3 mt-4">
            {/* Steam */}
            <div className="w-[32px] h-[32px] rounded-[8px] bg-[#f0efed] flex items-center justify-center">
              <svg viewBox="0 0 496 512" fill="#888" className="w-4 h-4"><path d="M496 256c0 137-111.2 248-248.4 248-113.3 0-209-76.6-237-180.2l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.1-32.4 70.8-72.1l84.1-61.5c44.9.1 81.4-36.4 81.4-81.4 0-44.8-36.4-81.3-81.5-81.3-44.6 0-80.8 36.5-80.8 81.3l-60.7 84.9c-20.2-.3-38.6 8.2-50.3 22.5L0 224.8C12 100.4 120.8 0 248 0c137 0 248 111 248 256zM320.7 186.5c0-30.5 24.9-55.4 55.3-55.4 30.5 0 55.3 24.9 55.3 55.4 0 30.5-24.8 55.3-55.3 55.3-30.4 0-55.3-24.8-55.3-55.3zm-151.2 182c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.1 21.1 47.1 47.1-21.1 47.1-47.1 47.1z" /></svg>
            </div>
            {/* Xbox */}
            <div className="w-[32px] h-[32px] rounded-[8px] bg-[#f0efed] flex items-center justify-center">
              <svg viewBox="0 0 512 512" fill="#888" className="w-4 h-4"><path d="M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1 32-34.1 76.1-73.9 76.1-73.9 48.9 45.3 90.5 89.4 117.6 110.8zM257.2 84.7c14.1-13.7 29.8-26 35.5-29.4 16.5-9.8 41.3-15.9 56.6-13.6 15.4 2.3 21.4 11.6 21.4 24.7-.1 31.3-42.2 93-82.5 137.7-22.4-21-47.8-46.1-66.3-67.2-23.9-27.2-35.3-45.2-10.2-73.8 6.8-7.7 24.3-23.2 45.5-39.7C257 23.3 249.3 36.4 257.2 84.7zM145.6 108.5c0-12.7 6-23.4 21.4-24.7 15.3-2.3 40 3.8 56.6 13.6 6.1 3.6 22.3 16.4 36.9 30.5-53.3 46.9-87.3 100.6-87.3 100.6-65.1 71.4-89.2 127.6-89.2 142.1 0 14.9 6.3 22.4 34.2 40.6C78 432.8 49 420.7 32.6 404c-15.1-15.3-21-31.5-21-47.6.2-42 38.4-126 133.9-247.9z" /></svg>
            </div>
            {/* PlayStation */}
            <div className="w-[32px] h-[32px] rounded-[8px] bg-[#f0efed] flex items-center justify-center">
              <svg viewBox="0 0 576 512" fill="#888" className="w-4 h-4"><path d="M570.9 372.3c-11.3 14.2-38.8 24.3-38.8 24.3L327 470.2v-54.3l150.9-53.8c17.1-6.1 19.8-14.8 5.8-19.4-13.9-4.6-39.1-3.3-56.2 2.9L327 381.1v-56.4c23.2-7.8 47.6-13.6 75.7-13.6 55.2-.1 97 11.1 116.1 20.3 20.2 9.2 27.3 22.5 52.1 40.9zm-271.1-82.6v-139c0-16.3-3-31.3-18.3-35.6-11.7-3.8-19 7.1-19 23.4v347.9l-93.8-29.8V32c39.9 7.4 98 24.9 129.2 35.4C424.1 109.9 450 133 450 199.5c0 65-39.4 89.5-98.1 90.1-17.5.2-40.5-.4-52.1 0zm-150.3 93.7C87.5 363.5 36.1 344.9 14.7 326.7c-18-15.3-26.3-33.3-11.4-47.5 13.4-12.7 37-18.6 56.6-22.1v56.1c-16.4 4.4-34.4 12.4-34.4 24.6 0 14.1 29.4 25 68 34.6z" /></svg>
            </div>
            {/* Riot */}
            <div className="w-[32px] h-[32px] rounded-[8px] bg-[#f0efed] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="#888" className="w-4 h-4"><path d="M12.534 21.77l-1.09-2.81 10.52.54-.451 4.5zM3.907 8.203l-.36 2.676 1.73 7.735 7.07.656-1.1-2.84-4.19-.39-1.18-5.26zM7.749 2l-.6 4.45 2.1 9.376.4.037 1.07 2.76 1.09-4.37-1.39-6.195 3.07-.29-1.97 8.81 1.07 2.76 3.26-14.56z" /></svg>
            </div>
          </div>
          {/* Divider */}
          <div className="border-t border-[#e5e5e5] mt-5 pt-4">
            <p className="text-[10px] font-semibold text-[#999] tracking-[0.1em] uppercase">Recent Games</p>
            <div className="mt-3 flex flex-col gap-2">
              {[
                { name: "Elden Ring", hrs: "312 hrs" },
                { name: "Valorant", hrs: "1,204 hrs" },
                { name: "Baldur's Gate 3", hrs: "187 hrs" },
                { name: "Helldivers 2", hrs: "94 hrs" },
              ].map((g) => (
                <div key={g.name} className="flex items-center justify-between bg-[#f5f3f0] rounded-[8px] px-3 py-2">
                  <span className="text-[13px] font-medium text-[#1a1a1a]">{g.name}</span>
                  <span className="text-[12px] text-[#999]">{g.hrs}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
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
          Skip the awkward part.
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
