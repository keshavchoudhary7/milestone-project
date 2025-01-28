import express from 'express'
import { auth } from '../middleware/authMiddleware.js';
import { createComment, getAllComments } from '../controllers/commnetController.js';

const router = express.Router()

//add comment route
router.post('/addcomment',auth, createComment)

//get all comments for a video
router.get('/comment/:videoId', getAllComments)

export default router;