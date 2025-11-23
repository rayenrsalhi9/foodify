import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Serve static files from frontend build directory
const frontendPath = path.join(__dirname, '../../frontend/dist')
app.use(express.static(frontendPath))

// Catch-all route to serve frontend index.html for client-side routing
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'))
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})