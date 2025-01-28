import User from '../modals/userModal.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv"


// 
const cookiesOptions = {
    httpOnly:true,
    secure:false, //to set true in production
    sameSite:'Lax'
}
dotenv.config();
//signUp Controller
export const signUp = async (req, res) => {

    try {
        const {channelName, email, userName, password, about, profilePic} = req.body;
        // Check if user already exists
        const isExistingUser = await User.findOne({email})
        if (isExistingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            })
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user
        const user = await User ({channelName, email, userName, password:hashedPassword , about, profilePic});
        // Save the user to the database
        await user.save();
        res.status(201).json({
            success: true,
            message: 'User created successfully'
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

//SignIn controller
export const signIn = async (req, res) => {
    try {
        // Get user data from request body
        const { email, userName, password } = req.body;

        // Check if user exists (match either email or userName)
        const user = await User.findOne({ $or: [{ email }, { userName }] });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'User not found'
            });
        }

        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Generate a JWT token
        const JWT_TOKEN = process.env.JWT_SECRET || MY_SECRET_KEY
        const token = jwt.sign({ userId: user._id }, JWT_TOKEN, { expiresIn: '1h' });
        res.cookie('token', token , cookiesOptions)

        // Send success response
        res.status(200).json({
            success: true,
            message: 'User logged in successfully',
            token // Included token after generated
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// logout controller
export const logout = async(req,res)=>{
    try {
        res.clearCookie('token', cookiesOptions)
        res.status(201).json({
            success: true,
            message: 'User logged out successfully'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}