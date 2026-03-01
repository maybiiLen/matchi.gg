import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "You're on the list | Matchi",
  description: "Thanks for joining the Matchi waitlist.",
}

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-background bg-grid flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="text-5xl mb-6 text-accent">GG</div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          You&apos;re on the waitlist!
        </h1>
        <p className="text-body mb-8 leading-relaxed">
          Check your inbox for a confirmation email. We&apos;ll let you know
          when it&apos;s your turn to find your duo.
        </p>
        <a
          href="/"
          className="inline-block rounded-xl bg-accent hover:bg-accent-dark px-6 py-3 font-medium transition-colors"
        >
          Back to home
        </a>
      </div>
    </main>
  )
}
