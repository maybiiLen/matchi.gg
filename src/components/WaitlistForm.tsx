"use client"

import { useState, type FormEvent } from "react"
import { validateEmail } from "@/lib/validators"
import type { WaitlistResponse } from "@/types"

type FormState = "idle" | "loading" | "success" | "error"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [state, setState] = useState<FormState>("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const validation = validateEmail(email)
    if (!validation.valid) {
      setState("error")
      setMessage(validation.error || "Invalid email.")
      return
    }

    setState("loading")

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      })

      const data: WaitlistResponse = await res.json()

      if (data.success) {
        setState("success")
        setMessage(data.message)
      } else {
        setState("error")
        setMessage(data.message)
      }
    } catch {
      setState("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  if (state === "success") {
    return (
      <div className="inline-flex items-center gap-2 rounded-[10px] bg-[#f0efed] border border-[#e5e5e5] px-5 py-3">
        <span className="text-[#1a1a1a] text-base">&#10003;</span>
        <p className="font-[family-name:var(--font-inter)] text-[15px] text-[#1a1a1a]">
          {message || "You're in. Check your inbox."}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="inline-flex flex-col sm:flex-row items-stretch gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (state === "error") setState("idle")
          }}
          placeholder="Enter your email"
          className="w-full sm:w-[310px] h-[52px] bg-white border-[1.5px] border-[#d0d0d0] rounded-[10px] px-4 text-[#1a1a1a] font-[family-name:var(--font-inter)] text-[15px] placeholder:text-[#aaaaaa] focus:outline-none focus:border-[#1a1a1a] transition-colors"
          disabled={state === "loading"}
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="h-[52px] px-8 bg-[#1a1a1a] hover:bg-[#333333] text-white font-[family-name:var(--font-inter)] text-[15px] font-medium rounded-[10px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
        >
          {state === "loading" ? "Joining..." : "Join the Waitlist"}
        </button>
      </div>
      {state === "error" && (
        <p className="mt-2 text-sm text-red-500 font-[family-name:var(--font-inter)]">
          {message}
        </p>
      )}
    </form>
  )
}
