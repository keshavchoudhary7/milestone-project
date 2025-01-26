import React, { useState } from "react";
import axios from "axios";
import "./videoUpload.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
const VideoUpload = () => {
  const [manageUploadVideo, setManageUploadVideo] = useState({
    "videoTitile": "",
    "videoDescription": "",
    "videoCategory": "",
    "thumbnail": "",
    "videoUpload": "",
  });


  // handle form 
  const handleUploadingVideo = (e,field)=>{
    setManageUploadVideo({...manageUploadVideo, [field]: e.target.value});
    console.log(manageUploadVideo)
  }


  // handle image & video upload 
  const handleUploadingVideoAndImage = async (e,type) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ytclone"); // Your Cloudinary upload preset
  
    try {
      // Replace with your actual Cloudinary cloud name
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dpqtwagud/${type}/upload`,
        data // Pass the FormData object
      );

      const url = response.data.secure_url;
      // Update the profile picture state with the uploaded image URL
      if (type === "image") {
        setManageUploadVideo({...manageUploadVideo, thumbnail: url });
      } else {
        setManageUploadVideo({...manageUploadVideo, videoUpload: url });
      }
      
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };


  console.log(manageUploadVideo)

  return (
    <div className="VideoUpload">
      <div className="uploadBox">
        <div className="displayTitile">
          <YouTubeIcon sx={{ fontSize: "54px", color: "red" }} />
          <span>Upload Video</span>
        </div>
        <div className="uploadForm">
          <input
            type="text"
            value={manageUploadVideo.videoTitile}
            onChange={(e)=>handleUploadingVideo(e,"videoTitile")}
            placeholder="Title Of The Video"
            className="uploadVideoInput"
          />
          <input
            type="text"
            value={manageUploadVideo.videoDescription}
            onChange={(e)=>handleUploadingVideo(e,"videoDescription")}
            placeholder="Description Of The Video"
            className="uploadVideoInput"
          />
          <input
            type="text"
            value={manageUploadVideo.videoCategory}
            onChange={(e)=>handleUploadingVideo(e,"videoCategory")}
            placeholder="Category Of The Video"
            className="uploadVideoInput"
          />

          <div>
            Thumbnail <input type="file" accept="image" onChange={(e)=>handleUploadingVideoAndImage(e,"image")}/>
          </div>
          <div>
            Video <input type="file" accept="video/mp4, video/webm, video/*" onChange={(e)=>handleUploadingVideoAndImage(e,"video")}/>
          </div>
        </div>

        <div className="uploadBtns">
          <div className="upload-form_Btn">Upload Video</div>
          <Link to={"/"} className="upload-form_Btn">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;
