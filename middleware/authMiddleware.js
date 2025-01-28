import User from '../modals/userModal.js'
import jwt from 'jsonwebtoken';
import dotenv from "dotenv"

export const auth = async (req,res,next) =>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message: 'You are not authenticated'})
    }

    try {
        const JWT_TOKEN = process.env.JWT_SECRET || MY_SECRET_KEY
        const decode = jwt.verify(token,JWT_TOKEN);
        req.user = await User.findById(decode.userId).select('-password');
        next();
    } catch (error) {
        console.log(error)
        return res.status(401).json({message: 'Token is not valid!'});
    }
}