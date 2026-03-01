export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight">
          <span className="text-accent">Matchi</span>
        </a>
        <a
          href="#waitlist"
          className="rounded-full bg-accent hover:bg-accent-dark px-5 py-2 text-sm font-medium transition-colors"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  )
}
