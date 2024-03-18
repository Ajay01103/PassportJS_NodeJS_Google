import express from "express"
import { config } from "dotenv"
import authRoutes from "./routes/auth"
import passport from "passport"

require("./stratergies/google")

config()

async function bootstrap() {
  const app = express()
  const port = process.env.PORT || 3001

  app.use(passport.initialize())

  app.use("/api/auth", authRoutes)

  try {
    app.listen(port, () => {
      console.log(`Running on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

bootstrap()
