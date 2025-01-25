import React, { useState } from "react";
import "./singlePage.css";
// import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { Link } from "react-router-dom";
const SinglePage = () => {
  const [comment,setComment] = useState('')
  console.log(comment)
  return (
    <div className="single-video">
      <div className="videoPostSection">
        <div className="video_youtube">
          <video width="400" controls className="video_yt_video">
            <source src={""} type="video/mp4" />
            <source src={""} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-description">
          <div className="video-title">{`Basic JavaScript For Beginners`}</div>
          <div className="video-detail-descriptions">
            <div className="video-detail-descriptionsProfile_left">
              <Link to={'/user/31'} className="video-detail-descriptionsProfileImage_left">
                <img
                  className="video-detail-descriptionsProfileImg_left"
                  src="https://static.vecteezy.com/system/resources/previews/051/336/397/non_2x/javascript-transparent-logo-free-png.png"
                  alt="profile-logo"
                />
              </Link>
              <div className="ytvideo_subview">
                <div className="ytpostProfileName">{"user1"}</div>
                <div className="ytpostProfileDate">{"2025-01-22"}</div>
              </div>
              <div className="subscribeButton">Subscribe</div>
            </div>
            <div className="ytvideoRightLikeBlock">
              <div className="ytvideoRightLikeBlockLike">
                <ThumbUpOffAltIcon />
                <div className="likeCount">{"0"}</div>
              </div>
              <div className="ytvideoRightLikeBlockLike">
                <div className="divider"></div>
                <ThumbDownOffAltIcon />
              </div>
            </div>
          </div>
          <div className="ytvideodescription">
            <div>
              <span className="viewsCount"> 0 Views</span> 24-01-2025{" "}
            </div>
            <div>The video is about javascript basics for beginners!</div>
          </div>
        </div>

        <div className="videoCommentSection">
          <div className="ytVideoCommentSection">2 Comments</div>
          <div className="userSelfComments">
            <img
              className="selfCommentProfilePic"
              src="https://rapidapi-prod-apis.s3.amazonaws.com/b42aa17d-8ae0-4a28-b29f-587af5454390.png"
              alt=""
            />
            <div className="addComment">
              <input
                type="text"
                value={comment}
                onChange={(e)=>{setComment(e.target.value)}}
                placeholder="add comment.."
                className="addUserComment"
              />
              <div className="commentButtons">
                <div className="commentButton">Submit</div>
                <div className="commentButton">Cancel</div>
              </div>
            </div>
          </div>

          <div className="ytOthersComments">
            <div className="userSelfComments">
              <img
                className="selfCommentProfilePic"
                src="https://rapidapi-prod-apis.s3.amazonaws.com/b42aa17d-8ae0-4a28-b29f-587af5454390.png"
                alt=""
              />
              <div className="othersCommentSection">
                <div className="othersCommentSection_Header">
                  <div className="randomUserComment">Username</div>
                  <div className="commentTime">05-01-2025</div>
                </div>

                <div className="othersCommentSection_body">
                  This is a great video!
                </div>
              </div>
            </div>
            <div className="userSelfComments">
              <img
                className="selfCommentProfilePic"
                src="https://rapidapi-prod-apis.s3.amazonaws.com/b42aa17d-8ae0-4a28-b29f-587af5454390.png"
                alt=""
              />
              <div className="othersCommentSection">
                <div className="othersCommentSection_Header">
                  <div className="randomUserComment">Username2</div>
                  <div className="commentTime">01-01-2025</div>
                </div>

                <div className="othersCommentSection_body">
                  Hey, Enjoyed video!
                </div>
              </div>
            </div>
            <div className="userSelfComments">
              <img
                className="selfCommentProfilePic"
                src="https://rapidapi-prod-apis.s3.amazonaws.com/b42aa17d-8ae0-4a28-b29f-587af5454390.png"
                alt=""
              />
              <div className="othersCommentSection">
                <div className="othersCommentSection_Header">
                  <div className="randomUserComment">Username3</div>
                  <div className="commentTime">02-01-2025</div>
                </div>

                <div className="othersCommentSection_body">
                  Nice Learning video!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="videoSuggestion">
        <div className="ytVideoSuggestionSection">
          <div className="ytVideoSuggestionThumbnail">
            <img
              className="video-suggestion-thumbnail-img"
              src="https://i.ytimg.com/vi/sscX432bMZo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCVwD1W6tIgDvf5z2CNtGZ2lcuXhg"
              alt=""
            />
          </div>
          <div className="ytVideoSuggestionDescription">
            <div className="ytVideoSuggestionTitle">
              JavaScript in One Shot | Complete Video in 1
            </div>
            <div className="ytVideoSuggestionChannelName">Chai Aur Code</div>
            <div className="ytVideoSuggestionChannelName">
              1.2M views . 1 day ago
            </div>
          </div>
        </div>

        <div className="ytVideoSuggestionSection">
          <div className="ytVideoSuggestionThumbnail">
            <img
              className="video-suggestion-thumbnail-img"
              src="https://i.ytimg.com/vi/sscX432bMZo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCVwD1W6tIgDvf5z2CNtGZ2lcuXhg"
              alt=""
            />
          </div>
          <div className="ytVideoSuggestionDescription">
            <div className="ytVideoSuggestionTitle">
              JavaScript in One Shot | Complete Video in 1
            </div>
            <div className="ytVideoSuggestionChannelName">Chai Aur Code</div>
            <div className="ytVideoSuggestionChannelName">
              1.2M views . 1 day ago
            </div>
          </div>
        </div>

        <div className="ytVideoSuggestionSection">
          <div className="ytVideoSuggestionThumbnail">
            <img
              className="video-suggestion-thumbnail-img"
              src="https://i.ytimg.com/vi/sscX432bMZo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCVwD1W6tIgDvf5z2CNtGZ2lcuXhg"
              alt=""
            />
          </div>
          <div className="ytVideoSuggestionDescription">
            <div className="ytVideoSuggestionTitle">
              JavaScript in One Shot | Complete Video in 1
            </div>
            <div className="ytVideoSuggestionChannelName">Chai Aur Code</div>
            <div className="ytVideoSuggestionChannelName">
              1.2M views . 1 day ago
            </div>
          </div>
        </div>

        <div className="ytVideoSuggestionSection">
          <div className="ytVideoSuggestionThumbnail">
            <img
              className="video-suggestion-thumbnail-img"
              src="https://i.ytimg.com/vi/sscX432bMZo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCVwD1W6tIgDvf5z2CNtGZ2lcuXhg"
              alt=""
            />
          </div>
          <div className="ytVideoSuggestionDescription">
            <div className="ytVideoSuggestionTitle">
              JavaScript in One Shot | Complete Video in 1
            </div>
            <div className="ytVideoSuggestionChannelName">Chai Aur Code</div>
            <div className="ytVideoSuggestionChannelName">
              1.2M views . 1 day ago
            </div>
          </div>
        </div>

        <div className="ytVideoSuggestionSection">
          <div className="ytVideoSuggestionThumbnail">
            <img
              className="video-suggestion-thumbnail-img"
              src="https://i.ytimg.com/vi/sscX432bMZo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCVwD1W6tIgDvf5z2CNtGZ2lcuXhg"
              alt=""
            />
          </div>
          <div className="ytVideoSuggestionDescription">
            <div className="ytVideoSuggestionTitle">
              JavaScript in One Shot | Complete Video in 1
            </div>
            <div className="ytVideoSuggestionChannelName">Chai Aur Code</div>
            <div className="ytVideoSuggestionChannelName">
              1.2M views . 1 day ago
            </div>
          </div>
        </div>

        <div className="ytVideoSuggestionSection">
          <div className="ytVideoSuggestionThumbnail">
            <img
              className="video-suggestion-thumbnail-img"
              src="https://i.ytimg.com/vi/sscX432bMZo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCVwD1W6tIgDvf5z2CNtGZ2lcuXhg"
              alt=""
            />
          </div>
          <div className="ytVideoSuggestionDescription">
            <div className="ytVideoSuggestionTitle">
              JavaScript in One Shot | Complete Video in 1
            </div>
            <div className="ytVideoSuggestionChannelName">Chai Aur Code</div>
            <div className="ytVideoSuggestionChannelName">
              1.2M views . 1 day ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
