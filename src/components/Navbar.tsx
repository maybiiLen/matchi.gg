export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">
      <div className="max-w-[1120px] mx-auto flex items-center justify-between px-12 py-[18px] max-sm:px-5 max-sm:py-[14px]">
        <a
          href="/"
          className="font-[family-name:var(--font-dm-serif)] text-[24px] text-[#1a1a1a]"
        >
          Matchi
        </a>
        <a
          href="#waitlist"
          className="font-[family-name:var(--font-inter)] text-[14px] font-medium text-[#1a1a1a] hover:underline"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  )
}
