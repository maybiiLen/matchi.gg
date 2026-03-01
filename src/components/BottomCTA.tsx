import WaitlistForm from "./WaitlistForm"

export default function BottomCTA() {
  return (
    <section className="border-t border-[#e5e5e5] py-20 px-6">
      <div className="max-w-[1120px] mx-auto flex flex-col items-center text-center">
        <h2 className="font-[family-name:var(--font-dm-serif)] font-normal text-[36px] text-[#1a1a1a]">
          Ready to queue up?
        </h2>
        <p className="font-[family-name:var(--font-inter)] text-[16px] text-[#555555] mt-3">
          Join the waitlist. Be the first to know when Matchi launches.
        </p>
        <div className="mt-8 w-full max-w-[560px]">
          <WaitlistForm />
        </div>
      </div>
    </section>
  )
}
