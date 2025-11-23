import express from 'express'
import { getMenu, getMenuPreview, getMenuCategories, getOffers, getSpecialOffers } from '../controllers/menuController.js'

const router = express.Router()

router.get('/', getMenu)
router.get('/preview', getMenuPreview)
router.get('/categories', getMenuCategories)
router.get('/offers', getOffers)
router.get('/special-offer', getSpecialOffers)

export default router