const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export function validateEmail(email: string): { valid: boolean; error?: string } {
  if (!email || email.trim().length === 0) {
    return { valid: false, error: "Email is required." }
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    return { valid: false, error: "Please enter a valid email address." }
  }
  return { valid: true }
}
