import WaitlistForm from "./WaitlistForm"

export default function Hero() {
  return (
    <section id="waitlist" className="py-20 md:py-32 px-6">
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* Left — copy + form */}
        <div>
          <h1 className="font-[family-name:var(--font-dm-serif)] font-normal text-[#1a1a1a] text-[42px] sm:text-[56px] md:text-[64px] leading-[1.08] tracking-[-0.02em]">
            Play First.<br />Date Second.
          </h1>

          <p className="mt-6 font-[family-name:var(--font-inter)] text-[17px] sm:text-[19px] text-[#555555] max-w-[420px] leading-[1.7]">
            Your first date is a game, not a gamble. Swipe, match, and jump
            into a game together. No awkward coffee shop silences.
          </p>

          <div className="mt-10">
            <WaitlistForm />
          </div>

          <p className="mt-4 font-[family-name:var(--font-inter)] text-[13px] text-[#999999] italic">
            Be the first to play.
          </p>
        </div>

        {/* Right — editorial image block */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-[20px] bg-[#f5f3f0] overflow-hidden flex items-end justify-center">
            {/* Decorative illustration — two controllers forming a heart */}
            <svg
              viewBox="0 0 400 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Background texture dots */}
              {Array.from({ length: 20 }).map((_, i) => (
                <circle
                  key={i}
                  cx={60 + (i % 5) * 72}
                  cy={40 + Math.floor(i / 5) * 72}
                  r="1.5"
                  fill="#ddd8d0"
                />
              ))}

              {/* Large heart outline */}
              <path
                d="M200 420 C200 420 60 320 60 220 C60 170 100 130 150 130 C175 130 195 145 200 160 C205 145 225 130 250 130 C300 130 340 170 340 220 C340 320 200 420 200 420Z"
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="2"
                opacity="0.08"
              />

              {/* Controller 1 — left */}
              <g transform="translate(90, 230)">
                <rect x="0" y="20" width="90" height="55" rx="14" fill="#1a1a1a" />
                <rect x="10" y="0" width="24" height="30" rx="12" fill="#1a1a1a" />
                <rect x="56" y="0" width="24" height="30" rx="12" fill="#1a1a1a" />
                {/* D-pad */}
                <rect x="22" y="38" width="14" height="4" rx="1" fill="#f5f3f0" opacity="0.5" />
                <rect x="27" y="33" width="4" height="14" rx="1" fill="#f5f3f0" opacity="0.5" />
                {/* Buttons */}
                <circle cx="62" cy="38" r="3" fill="#f5f3f0" opacity="0.5" />
                <circle cx="72" cy="44" r="3" fill="#f5f3f0" opacity="0.5" />
              </g>

              {/* Controller 2 — right */}
              <g transform="translate(220, 230)">
                <rect x="0" y="20" width="90" height="55" rx="14" fill="#1a1a1a" />
                <rect x="10" y="0" width="24" height="30" rx="12" fill="#1a1a1a" />
                <rect x="56" y="0" width="24" height="30" rx="12" fill="#1a1a1a" />
                {/* D-pad */}
                <rect x="22" y="38" width="14" height="4" rx="1" fill="#f5f3f0" opacity="0.5" />
                <rect x="27" y="33" width="4" height="14" rx="1" fill="#f5f3f0" opacity="0.5" />
                {/* Buttons */}
                <circle cx="62" cy="38" r="3" fill="#f5f3f0" opacity="0.5" />
                <circle cx="72" cy="44" r="3" fill="#f5f3f0" opacity="0.5" />
              </g>

              {/* Small heart between controllers */}
              <path
                d="M200 270 C200 270 188 260 188 252 C188 248 192 244 196 244 C198 244 199 245 200 247 C201 245 202 244 204 244 C208 244 212 248 212 252 C212 260 200 270 200 270Z"
                fill="#1a1a1a"
                opacity="0.15"
              />

              {/* "Player 1" / "Player 2" text */}
              <text
                x="135"
                y="310"
                fontFamily="system-ui, sans-serif"
                fontSize="11"
                fill="#1a1a1a"
                opacity="0.2"
                textAnchor="middle"
              >
                Player 1
              </text>
              <text
                x="265"
                y="310"
                fontFamily="system-ui, sans-serif"
                fontSize="11"
                fill="#1a1a1a"
                opacity="0.2"
                textAnchor="middle"
              >
                Player 2
              </text>
            </svg>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 md:-left-6 bg-white border border-[#e5e5e5] rounded-[14px] px-5 py-3 shadow-sm">
            <p className="font-[family-name:var(--font-dm-serif)] text-[20px] text-[#1a1a1a]">
              GG
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[12px] text-[#999999] mt-0.5">
              It&apos;s a match
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
