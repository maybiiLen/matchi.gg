import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function addToAudience(email: string) {
  const audienceId = process.env.RESEND_AUDIENCE_ID
  if (!audienceId) {
    throw new Error("RESEND_AUDIENCE_ID is not configured")
  }

  const { data, error } = await resend.contacts.create({
    email,
    unsubscribed: false,
    audienceId,
  })

  if (error) throw error
  return data
}

export async function sendWelcomeEmail(email: string) {
  const fromEmail = process.env.FROM_EMAIL || "hello@matchi.gg"

  const { data, error } = await resend.emails.send({
    from: `Matchi <${fromEmail}>`,
    to: email,
    subject: "You're on the list, GG",
    html: `
      <div style="background-color: #0a0a0f; color: #ffffff; padding: 40px; font-family: system-ui, -apple-system, sans-serif;">
        <div style="max-width: 480px; margin: 0 auto;">
          <h1 style="color: #8b5cf6; font-size: 28px; margin-bottom: 16px;">Welcome to Matchi</h1>
          <p style="color: #9ca3af; font-size: 16px; line-height: 1.6;">
            You're on the waitlist. We're building the dating app that gamers actually deserve —
            matching you based on the games you play, not just the photos you post.
          </p>
          <p style="color: #9ca3af; font-size: 16px; line-height: 1.6;">
            We'll let you know when it's your turn to find your duo.
          </p>
          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #1e1e2e;">
            <p style="color: #6b7280; font-size: 13px;">GG,<br/>The Matchi Team</p>
          </div>
        </div>
      </div>
    `,
  })

  if (error) throw error
  return data
}
