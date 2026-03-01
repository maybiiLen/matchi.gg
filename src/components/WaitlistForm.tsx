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
      <div className="flex items-center gap-2 rounded-xl bg-accent/10 border border-accent/20 px-6 py-4">
        <span className="text-accent text-lg">&#10003;</span>
        <p className="text-body">
          {message || "You're in. Check your inbox."}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (state === "error") setState("idle")
          }}
          placeholder="Enter your email"
          className="flex-1 rounded-xl bg-surface border border-white/10 px-4 py-3 text-white placeholder:text-body/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
          disabled={state === "loading"}
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="glow-button rounded-xl bg-accent hover:bg-accent-dark px-6 py-3 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
        >
          {state === "loading" ? "Joining..." : "Join the Waitlist"}
        </button>
      </div>
      {state === "error" && (
        <p className="mt-2 text-sm text-red-400">{message}</p>
      )}
    </form>
  )
}
