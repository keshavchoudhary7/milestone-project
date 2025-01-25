import React from 'react'
import './profile.css'
import SidenavBar from '../../components/sidenavbar/SidenavBar'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {Link} from 'react-router-dom'
const Profiles = ({isSideNavVisible}) => {
  return (
    <div className='profile'>
      <SidenavBar isSideNavVisible={isSideNavVisible}/>

      <div className={isSideNavVisible?"profile_page":'invisibleSideBar'}>
        <div className="profile_page_top">
          <div className="profile_img">
          <img className='profile-image' src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png" alt="" />
          </div>
          <div className="profile_details">
            <div className="profile_details_name">Username</div>
            <div className="profile_info">@user . 4 videoes</div>
            <div className="profile_info">Hey, Welcome to my yt chan.....</div>
            <div className="profile_info">Subscribers: 1000</div>
            <div className="subscribe_btn">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="profile_page_bottom">
          <div className="profile-video-title">Videoes &nbsp; <PlayArrowIcon /> </div>
          {/* profile video section  */}
          <Link to={'/watch/4545'} className="profileVideoes">
            <div className="profileVideoBlock">
              <div className="profileVideoThumbnail">
                <img className='yt-thumbnail-pic' src="https://i.ytimg.com/vi/FFZSgalRSQQ/maxresdefault.jpg" alt='thumbnail'/>
              </div>
              <div className="profile-video-detail">
                <div className="profile-video-titles">Video Title</div>
                <div className="profile-video-created-details">Created at 05/01/2025</div>
              </div>
            </div>
          </Link>

          {/* profile video section  */}
          <Link to={'/watch/4545'} className="profileVideoes">
            <div className="profileVideoBlock">
              <div className="profileVideoThumbnail">
                <img className='yt-thumbnail-pic' src="https://i.ytimg.com/vi/FFZSgalRSQQ/maxresdefault.jpg" alt='thumbnail'/>
              </div>
              <div className="profile-video-detail">
                <div className="profile-video-titles">Video Title</div>
                <div className="profile-video-created-details">Created at 05/01/2025</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profiles;