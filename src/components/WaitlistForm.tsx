"use client"

import { useState, type FormEvent } from "react"
import { validateEmail } from "@/lib/validators"
import type { WaitlistResponse } from "@/types"

type FormState = "idle" | "loading" | "success" | "error"

const inputClass =
  "w-full h-[52px] bg-white border-[1.5px] border-[#d0d0d0] rounded-[10px] px-4 text-[#1a1a1a] font-[family-name:var(--font-inter)] text-[15px] placeholder:text-[#aaaaaa] focus:outline-none focus:border-[#1a1a1a] transition-colors"

export default function WaitlistForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [state, setState] = useState<FormState>("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!name.trim()) {
      setState("error")
      setMessage("Name is required.")
      return
    }

    const validation = validateEmail(email)
    if (!validation.valid) {
      setState("error")
      setMessage(validation.error || "Invalid email.")
      return
    }

    if (!gender.trim()) {
      setState("error")
      setMessage("Gender is required.")
      return
    }

    setState("loading")

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          gender: gender.trim(),
        }),
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

  function clearError() {
    if (state === "error") setState("idle")
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
    <form onSubmit={handleSubmit} className="w-full max-w-[380px]">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); clearError() }}
          placeholder="Your name"
          className={inputClass}
          disabled={state === "loading"}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); clearError() }}
          placeholder="Enter your email"
          className={inputClass}
          disabled={state === "loading"}
        />
        <input
          type="text"
          value={gender}
          onChange={(e) => { setGender(e.target.value); clearError() }}
          placeholder="Gender"
          className={inputClass}
          disabled={state === "loading"}
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="h-[52px] bg-[#1a1a1a] hover:bg-[#333333] text-white font-[family-name:var(--font-inter)] text-[15px] font-medium rounded-[10px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
