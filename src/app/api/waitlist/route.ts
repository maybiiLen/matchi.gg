import { NextRequest, NextResponse } from "next/server"
import { validateEmail } from "@/lib/validators"
import { addToAudience, sendWelcomeEmail } from "@/lib/resend"
import type { WaitlistResponse } from "@/types"

// In-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 3
const WINDOW_MS = 60 * 60 * 1000 // 1 hour

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  )
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS })
    return false
  }

  if (entry.count >= RATE_LIMIT) return true
  entry.count++
  return false
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request)

    if (isRateLimited(ip)) {
      return NextResponse.json<WaitlistResponse>(
        { success: false, message: "Too many requests. Try again later." },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { email } = body

    const validation = validateEmail(email)
    if (!validation.valid) {
      return NextResponse.json<WaitlistResponse>(
        { success: false, message: validation.error || "Invalid email." },
        { status: 400 }
      )
    }

    await addToAudience(email.trim())
    await sendWelcomeEmail(email.trim())

    return NextResponse.json<WaitlistResponse>(
      { success: true, message: "You're on the list! Check your inbox." },
      { status: 200 }
    )
  } catch (error) {
    console.error("Waitlist API error:", error)
    return NextResponse.json<WaitlistResponse>(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
