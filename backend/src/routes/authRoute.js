import express from 'express'
import { signUserIn, signUserUp, logoutUser } from '../controllers/authController.js'

const router = express.Router()

router.post('/login', signUserIn)
router.post('/signup', signUserUp)
router.get('/logout', logoutUser)

export default router