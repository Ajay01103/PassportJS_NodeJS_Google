import passport from "passport"
import { Strategy as GoogleStratergy, Profile, VerifyCallback } from "passport-google-oauth20"
import { config } from "dotenv"

config()

passport.use(
  new GoogleStratergy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRRT!,
      callbackURL: process.env.GOOGLE_REDIRECT_URI!,
      scope: ["email", "profile"],
    },
    async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
      console.log(accessToken)
      console.log(profile)
      done(null, { username: profile.username })
    }
  )
)
