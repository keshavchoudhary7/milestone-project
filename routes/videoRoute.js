import express from 'express';
import {auth} from '../middleware/authMiddleware.js'
import { getVideoById, getVideos, getVideosByUserId, uploadVideo } from '../controllers/videoController.js';

const router = express.Router()

// Upload video 
router.post('/video', auth , uploadVideo)

// get all video 
router.get('/getallvideo', getVideos)

// get single video
router.get('/getvideo/:id', getVideoById)

// get all videoes of single user
router.get('/:userId/channel', getVideosByUserId)


export default router