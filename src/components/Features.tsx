const features = [
  {
    aspect: "aspect-[4/3]",
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
    aspect: "aspect-[4/3]",
    label: "02",
    title: "Your first date is already planned",
    description:
      "Pick a game, queue up, and play together. That's the date. No small talk over coffee. Just co-op vibes from the start.",
    illustration: (
      <div className="w-full h-full flex items-stretch justify-center gap-4 px-6 py-4">
        {/* Jessica */}
        <div className="relative flex-1 max-w-[170px] rounded-[16px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.13)] border border-[#e5e5e5]">
          <img
            src="/Matchi.png"
            alt="Jessica profile"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1 bg-black/55 backdrop-blur-sm text-white text-[9px] font-medium px-2 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            Online now
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-3 pt-12 pb-3">
            <p className="text-white font-[family-name:var(--font-dm-serif)] text-[15px] leading-tight">
              Jessica, <span className="font-normal">21</span>
            </p>
            <div className="flex flex-wrap gap-1 mt-1.5">
              {["League of Legends", "Valorant"].map((tag) => (
                <span key={tag} className="text-white text-[8px] bg-white/15 border border-white/30 backdrop-blur-sm rounded-full px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Chris */}
        <div className="relative flex-1 max-w-[170px] rounded-[16px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.13)] border border-[#e5e5e5]">
          <img
            src="/Asian guy.png"
            alt="Chris profile"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1 bg-black/55 backdrop-blur-sm text-white text-[9px] font-medium px-2 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            Online now
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-3 pt-12 pb-3">
            <p className="text-white font-[family-name:var(--font-dm-serif)] text-[15px] leading-tight">
              Chris, <span className="font-normal">23</span>
            </p>
            <div className="flex flex-wrap gap-1 mt-1.5">
              {["Warframe", "Call of Duty"].map((tag) => (
                <span key={tag} className="text-white text-[8px] bg-white/15 border border-white/30 backdrop-blur-sm rounded-full px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    aspect: "aspect-[4/3]",
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
            <p className="text-[15px] font-semibold text-[#1a1a1a] mt-2">claire_plays</p>
          </div>
          {/* Platform icon */}
          <div className="flex justify-center mt-4">
            <div className="w-[32px] h-[32px] rounded-[8px] bg-[#f0efed] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="#888" className="w-[15px] h-[15px]"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" /></svg>
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
                <div className={`${feature.aspect} rounded-[20px] bg-[#f5f3f0] overflow-hidden`}>
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
