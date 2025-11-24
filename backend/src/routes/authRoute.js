import express from 'express'
import { signUserIn, signUserUp } from '../controllers/authController.js'

const router = express.Router()

router.post('/login', signUserIn)
router.post('/signup', signUserUp)

export default router