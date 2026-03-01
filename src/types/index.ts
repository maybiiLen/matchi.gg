export interface WaitlistResponse {
  success: boolean
  message: string
}

export interface WaitlistRequest {
  email: string
  name: string
  gender: string
}
