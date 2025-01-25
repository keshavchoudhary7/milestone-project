import React, { useState } from "react";
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

  const handleUploadingVideo = (e,field)=>{
    setManageUploadVideo({...manageUploadVideo, [field]: e.target.value});
    console.log(manageUploadVideo)
  }

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
            Thumbnail <input type="file" accept="image" />
          </div>
          <div>
            Video <input type="file" accept="video/mp4, video/webm" />
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
