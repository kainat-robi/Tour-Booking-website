import express from 'express'
import { createReviews } from '../Controllers/reviewsController.js'
import { verifyUser } from '../utils/verifyToken.js'


const router = express.Router()
router.post('/:tourId' ,verifyUser, createReviews)

export default router