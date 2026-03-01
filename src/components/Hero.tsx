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

        {/* Right — phone mockup */}
        <div className="flex items-center justify-center">
          <img
            src="/heroimage.png"
            alt="Matchi app preview"
            className="w-full max-w-[380px] h-auto"
          />
        </div>
      </div>
    </section>
  )
}
