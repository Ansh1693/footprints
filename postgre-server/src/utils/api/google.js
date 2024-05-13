import { google } from 'googleapis'

export default new google.auth.OAuth2(
  process.env.GOOGLE_ID,
  process.env.GOOGLE_SECRET,
  `${process.env.HOST}/auth/callback/google`
)
