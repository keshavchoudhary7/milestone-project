import React, { useState } from "react";
import "./signUp.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import axios from 'axios';
const Signup = () => {

  const [signUpProfile,setSignUpProfile] = useState('https://cdn-icons-png.freepik.com/256/16012/16012747.png')

  const [signUpInput, setSignUpInput] = useState({
    "channelName": "",
    "username": "",
    "password": "",
    "channelDescription": "",
    "profilePic": signUpProfile
  });

   // handle sign up inputs 
   const handleSignUpInput=(e,field)=>{
    setSignUpInput({...signUpInput, [field]: e.target.value });
    // console.log(signUpInput)
  }


  // handle image upload 
  // const [signUpProfile,setSignUpProfile] = useState('https://cdn-icons-png.freepik.com/256/16012/16012747.png')

  const handleUploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ytclone"); // Your Cloudinary upload preset
  
    try {
      // Replace with your actual Cloudinary cloud name
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dpqtwagud/image/upload",
        data // Pass the FormData object
      );

      const imageUrl = response.data.secure_url;
      // Update the profile picture state with the uploaded image URL
      setSignUpProfile(imageUrl);
      setSignUpInput({...signUpInput, "profilePic": imageUrl });
      console.log("Uploaded image URL:", response.data.secure_url);
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };
  

  console.log(signUpInput)

  return (
    <div className="Signup">
      <div className="signUp_card">
        <div className="signUp_Title">
          <YouTubeIcon
            sx={{ fontSize: "54px", color: "red" }}
            className="youtube_icon"
          />
          Sign Up
        </div>

        <div className="signupInput_Box">
          <input
            value={signUpInput.channelName}
            onChange={(e)=>handleSignUpInput(e,"channelName")}
            type="text"
            placeholder="Enter Channel Name"
            className="signUp_inputField"
          />
          <input
            value={signUpInput.username}
            onChange={(e)=>handleSignUpInput(e,"username")}
            type="text"
            placeholder="Enter Username"
            className="signUp_inputField"
          />
          <input
            value={signUpInput.password}
            onChange={(e)=>handleSignUpInput(e,"password")}
            type="password"
            placeholder="Enter password"
            className="signUp_inputField"
          />
          <input
            value={signUpInput.channelDescription}
            onChange={(e)=>handleSignUpInput(e,"channelDescription")}
            type="text"
            placeholder="About Channel"
            className="signUp_inputField"
          />

          <div className="signup_profile_img_upload">
            <input type="file" onChange={handleUploadImage}/>
            <div className="signup_profile_uploaded_view">
              <img
                src={signUpProfile}
                alt=""
              />
            </div>
          </div>

          <div className="signUp_buttons">
            <div className="signUp_btn">SignUp</div>
            <Link to={"/"} className="signUp_btn">
              Home page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
