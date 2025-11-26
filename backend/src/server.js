import express from 'express'
import session from 'express-session'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

import menuRoute from './routes/menuRoute.js'
import authRoute from './routes/authRoute.js'
import userRoute from './routes/userRoute.js'
import cartRoute from './routes/cartRoute.js'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    sameSite: 'lax'
  }
}))

// Serve static files from frontend build directory
const frontendPath = path.join(__dirname, '../../frontend/dist')
app.use(express.static(frontendPath))

// Use menu routes
app.use('/api/menu', menuRoute)
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/cart', cartRoute)

// Catch-all route to serve frontend index.html for client-side routing
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'))
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})