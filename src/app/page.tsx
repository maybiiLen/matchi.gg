import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import SocialProof from "@/components/SocialProof"
import WaitlistForm from "@/components/WaitlistForm"
import Footer from "@/components/Footer"
import FadeIn from "@/components/FadeIn"

export default function Home() {
  return (
    <main className="min-h-screen bg-background bg-grid">
      <Navbar />
      <Hero />

      <FadeIn>
        <Features />
      </FadeIn>

      <FadeIn>
        <HowItWorks />
      </FadeIn>

      <FadeIn>
        <SocialProof />
      </FadeIn>

      <FadeIn>
        <section id="cta" className="py-24 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Be first in the <span className="text-accent">lobby</span>
            </h2>
            <p className="text-body mb-10">
              Join the waitlist and be the first to know when Matchi launches.
            </p>
            <div className="max-w-lg mx-auto">
              <WaitlistForm />
            </div>
          </div>
        </section>
      </FadeIn>

      <Footer />
    </main>
  )
}
