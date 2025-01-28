import userModal from '../modals/userModal.js';
import Video from '../modals/videoModal.js'


//upload video functionality and save video data in mongodb database
export const uploadVideo = async(req,res)=>{
    try{
        const {title, description,videoLink, videoType, thumbnail } = req.body;
        // console.log(req.user)
        const videoUpload = new Video({
            user:req.user._id,
            title,
            description,
            videoLink,
            videoType,
            thumbnail
        })
        await videoUpload.save();

        res.status(201).json({
            success: true, 
            message: 'Video uploaded successfully',
            video: videoUpload
        });
    }catch(error){
        res.status(500).json({error: error.message});
    }
 
}


// get all videos from mongodb database
export const getVideos = async(req,res)=>{
    try {
        const videos = await Video.find().populate('user','channelName profilePic userName createdAt');
        res.json({
            success: true,
            videos
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

// get single video by id from mongodb database

export const getVideoById = async(req,res)=>{
    try {
        const {id} = req.params;
        const video = await Video.findById(id).populate('user','channelName profilePic userName createdAt');
        if(!video){
            return res.status(404).json({message: 'Video not found'});
        }
        res.json({
            success: true,
            video
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
}


// get videos by userId

export const getVideosByUserId = async(req,res)=>{
    try {
        const {userId} = req.params;
        const videos = await Video.find({user: userId}).populate('user','channelName profilePic userName createdAt');
        if(!videos){
            return res.status(404).json({message: 'Videos not found for this user'});
        }
        res.json({
            success: true,
            videos
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
}