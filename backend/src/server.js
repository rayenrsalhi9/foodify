import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000
console.log(port)

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})