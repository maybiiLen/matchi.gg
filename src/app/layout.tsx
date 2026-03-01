import type { Metadata } from "next"
import { DM_Serif_Display, Inter } from "next/font/google"
import "./globals.css"

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://matchi.gg"),
  title: "Matchi - Find Your Duo | Dating App for Gamers",
  description:
    "The dating app built for gamers. Match based on the games you play, your platform, and your play style. Join the waitlist.",
  keywords: [
    "dating app",
    "gamers",
    "gaming",
    "matchmaking",
    "find your duo",
    "gamer dating",
  ],
  openGraph: {
    title: "Matchi - Find Your Duo | Dating App for Gamers",
    description:
      "The dating app built for gamers. Match based on the games you play, not just the photos you post.",
    url: "https://matchi.gg",
    siteName: "Matchi",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matchi - Find Your Duo | Dating App for Gamers",
    description:
      "The dating app built for gamers. Match based on the games you play, not just the photos you post.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
