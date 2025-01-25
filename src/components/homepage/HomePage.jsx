import React from 'react';
import './homepage.css';
// import { Link } from 'react-router-dom' 
const HomePage = ({isSideNavVisible}) => {
  const options = [
    "All", "Music", "News", "Cinema", "Bollywood", "Bhojpuri Music",
    "Jharkhand-Bihar News", "News", "Coding", "JavaScript", 
    "Spiritual", "Bhajans", "Jai Hanuman"
  ];

  return (
    <div className={isSideNavVisible?"homepage":"homePageNavConditional"}>
      <div className="homePage_options">
        {options.map((option, index) => 
          <div key={index} className="homePageoption">
            {option}
          </div>
        )}
      </div>

      <div className={isSideNavVisible?"home-mainPage":"homePage-inVisibleSideBar"}>
        <div className="videoSection">
          <div className="video-thumbnail">
            <img className='yt-thumbnail-pic' src="https://i.ytimg.com/vi/FFZSgalRSQQ/maxresdefault.jpg" alt='thumbnail'/>
            <div className="yt-thumbnail-timing">24:00</div>
          </div>

          <div className="yt-title-box">
            <div className="yt-profile-box">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/019/879/198/small_2x/user-icon-on-transparent-background-free-png.png" alt="" className="yt-thumbnail-image" />
            </div>
            <div className="yt-titleBox-title">
              <div className="ytVideoTitle">Technical-suneja</div>
              <div className="ytChannelName">2M views</div>
              <div className="ytVideoViews">3 likes</div>
            </div>
          </div>
        </div>
 
        <div className="videoSection">
          <div className="video-thumbnail">
            <img className='yt-thumbnail-pic' src="https://i.ytimg.com/vi/FFZSgalRSQQ/maxresdefault.jpg" alt='thumbnail'/>
            <div className="yt-thumbnail-timing">24:00</div>
          </div>

          <div className="yt-title-box">
            <div className="yt-profile-box">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/019/879/198/small_2x/user-icon-on-transparent-background-free-png.png" alt="" className="yt-thumbnail-image" />
            </div>
            <div className="yt-titleBox-title">
              <div className="ytVideoTitle">Technical-suneja</div>
              <div className="ytChannelName">2M views</div>
              <div className="ytVideoViews">3 likes</div>
            </div>
          </div>
        </div>

        <div className="videoSection">
          <div className="video-thumbnail">
            <img className='yt-thumbnail-pic' src="https://i.ytimg.com/vi/FFZSgalRSQQ/maxresdefault.jpg" alt='thumbnail'/>
            <div className="yt-thumbnail-timing">24:00</div>
          </div>

          <div className="yt-title-box">
            <div className="yt-profile-box">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/019/879/198/small_2x/user-icon-on-transparent-background-free-png.png" alt="" className="yt-thumbnail-image" />
            </div>
            <div className="yt-titleBox-title">
              <div className="ytVideoTitle">Technical-suneja</div>
              <div className="ytChannelName">2M views</div>
              <div className="ytVideoViews">3 likes</div>
            </div>
          </div>
        </div>


        <div className="videoSection">
          <div className="video-thumbnail">
            <img className='yt-thumbnail-pic' src="https://i.ytimg.com/vi/FFZSgalRSQQ/maxresdefault.jpg" alt='thumbnail'/>
            <div className="yt-thumbnail-timing">24:00</div>
          </div>

          <div className="yt-title-box">
            <div className="yt-profile-box">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/019/879/198/small_2x/user-icon-on-transparent-background-free-png.png" alt="" className="yt-thumbnail-image" />
            </div>
            <div className="yt-titleBox-title">
              <div className="ytVideoTitle">Technical-suneja</div>
              <div className="ytChannelName">2M views</div>
              <div className="ytVideoViews">3 likes</div>
            </div>
          </div>
        </div>


        <div className="videoSection">
          <div className="video-thumbnail">
            <img className='yt-thumbnail-pic' src="https://i.ytimg.com/vi/FFZSgalRSQQ/maxresdefault.jpg" alt='thumbnail'/>
            <div className="yt-thumbnail-timing">24:00</div>
          </div>

          <div className="yt-title-box">
            <div className="yt-profile-box">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/019/879/198/small_2x/user-icon-on-transparent-background-free-png.png" alt="" className="yt-thumbnail-image" />
            </div>
            <div className="yt-titleBox-title">
              <div className="ytVideoTitle">Technical-suneja</div>
              <div className="ytChannelName">2M views</div>
              <div className="ytVideoViews">3 likes</div>
            </div>
          </div>
        </div>


        <div className="videoSection">
          <div className="video-thumbnail">
            <img className='yt-thumbnail-pic' src="https://i.ytimg.com/vi/FFZSgalRSQQ/maxresdefault.jpg" alt='thumbnail'/>
            <div className="yt-thumbnail-timing">24:00</div>
          </div>

          <div className="yt-title-box">
            <div className="yt-profile-box">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/019/879/198/small_2x/user-icon-on-transparent-background-free-png.png" alt="" className="yt-thumbnail-image" />
            </div>
            <div className="yt-titleBox-title">
              <div className="ytVideoTitle">Technical-suneja</div>
              <div className="ytChannelName">2M views</div>
              <div className="ytVideoViews">3 likes</div>
            </div>
          </div>
        </div>
         
      </div>
    </div>
  );
};

export default HomePage;
