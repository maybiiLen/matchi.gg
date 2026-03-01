import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import BottomCTA from "@/components/BottomCTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <BottomCTA />
      <Footer />
    </main>
  )
}
