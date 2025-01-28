import express from 'express'
import { logout, signIn, signUp } from '../controllers/userController.js';

const router = express.Router()

router.post('/signup',signUp)
router.post('/login',signIn)
router.post('/logout',logout)

export default router;