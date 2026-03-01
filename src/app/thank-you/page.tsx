import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "You're on the list | Matchi",
  description: "Thanks for joining the Matchi waitlist.",
}

export default function ThankYou() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="font-[family-name:var(--font-dm-serif)] text-5xl mb-6 text-[#1a1a1a]">
          GG
        </div>
        <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-4xl mb-4 text-[#1a1a1a]">
          You&apos;re on the waitlist!
        </h1>
        <p className="font-[family-name:var(--font-inter)] text-[16px] text-[#555555] mb-8 leading-relaxed">
          Check your inbox for a confirmation email. We&apos;ll let you know
          when it&apos;s your turn to find your duo.
        </p>
        <a
          href="/"
          className="inline-block rounded-[10px] bg-[#1a1a1a] hover:bg-[#333333] px-6 py-3 font-[family-name:var(--font-inter)] font-medium text-[14px] text-white transition-colors"
        >
          Back to home
        </a>
      </div>
    </main>
  )
}
