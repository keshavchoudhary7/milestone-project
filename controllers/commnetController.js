import Comment from '../modals/commentModal.js'


// Create a new comment for a video
export const createComment = async (req,res) => {
    try {
        let {video,message} = req.body;
        const comment = new Comment({user: req.user._id, video, message});
        await comment.save();
        res.status(201).json({
            success: true,
            comment
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// Get all comments for a video
export const getAllComments = async (req,res) => {
    try {
        const {videoId} = req.params;
        const comments = await Comment.find({video: videoId}).populate('user', 'userName');
        res.json({
            success: true,
            comments
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}