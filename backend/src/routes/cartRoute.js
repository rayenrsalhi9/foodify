import express from 'express'
import { getCart, addItemToCart } from '../controllers/cartController.js'

const router = express.Router()

router.get('/', getCart)
router.post('/', addItemToCart)

export default router