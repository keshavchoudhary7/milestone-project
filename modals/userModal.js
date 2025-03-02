import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    channelName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    userName:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    about:{
        type: String,
        required: true
    },
    profilePic:{
        type: String,
        required: true
    }
},
    {timestamps:true}
)

export default mongoose.model('User', userSchema);


