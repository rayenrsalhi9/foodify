import express from 'express'
import { getMenu, getOffers, getSpecialOffers } from '../controllers/menuController.js'

const router = express.Router()

router.get('/', getMenu)
router.get('/offers', getOffers)
router.get('/special-offer', getSpecialOffers)

export default router