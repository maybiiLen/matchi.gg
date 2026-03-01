import WaitlistForm from "./WaitlistForm"

export default function Hero() {
  return (
    <section
      id="waitlist"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-dark/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
          Find Your <span className="text-accent">Duo</span>
        </h1>
        <p className="text-lg sm:text-xl text-body mb-10 max-w-xl mx-auto leading-relaxed">
          The dating app built for gamers. Match based on the games you play,
          not just the photos you post.
        </p>
        <div className="max-w-lg mx-auto mb-6">
          <WaitlistForm />
        </div>
        <p className="text-sm text-body/60">
          <span className="text-accent font-medium">2,000+</span> gamers
          already waiting
        </p>
      </div>
    </section>
  )
}
