import React from "react";
import "./sidenavbar.css";
import HomeIcon from "@mui/icons-material/Home";
import { SiYoutubeshorts } from "react-icons/si";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const SidenavBar = ({isSideNavVisible}) => {
  return (
    <div className={isSideNavVisible?"home-sidenavbar":"hide-sideNavbar"}>
      <div className="home-sidenavbar-top">
        {/* home icons & title */}
        <div className={`home_sidenavbar-top-option`}>
          <HomeIcon />
          <div className="home_sidenavbar-title">Home</div>
        </div>
        {/* yt - shorts icons & title */}
        <div className={`home_sidenavbar-top-option`}>
          <SiYoutubeshorts className="shorts-icon" />
          <div className="home_sidenavbar-title">Shorts</div>
        </div>
        {/* subscription icons & title  */}
        <div className={`home_sidenavbar-top-option`}>
          <SubscriptionsIcon />
          <div className="home_sidenavbar-title">subscription</div>
        </div>
      </div>

      <div className="home-sidenavbar-mid">
        <div className={`home_sidenavbar-top-option`}>
          <div className="sidemainheader">You</div>
          <ChevronRightIcon />
        </div>
        <div className={`home_sidenavbar-top-option`}>
          <HistoryIcon />
          <div className="home_sidenavbar-title">History</div>
        </div>

        <div className={`home_sidenavbar-top-option`}>
          <PlaylistPlayIcon />
          <div className="home_sidenavbar-title">Playlist</div>
        </div>

        <div className={`home_sidenavbar-top-option`}>
          <SmartDisplayIcon />
          <div className="home_sidenavbar-title">Your Video</div>
        </div>

        <div className={`home_sidenavbar-top-option`}>
          <ScheduleIcon />
          <div className="home_sidenavbar-title">Watch Later</div>
        </div>

        <div className={`home_sidenavbar-top-option`}>
          <ThumbUpAltIcon />
          <div className="home_sidenavbar-title">Liked Videoes</div>
        </div>
      </div>

      <div className="home-sidenavbar-mid">
        <div className="home_sidenavbar-top-option">
          <div className="sidemainheader">Subscriptions</div>
        </div>

        <div className="home_sidenavbar-top-option">
          <img className="home_side_navbar_imglogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Aaj_tak_logo.png/640px-Aaj_tak_logo.png" alt="" />
          <div className="home_sidenavbar-title">Aaj Tak</div>
        </div>

        <div className="home_sidenavbar-top-option">
          <img className="home_side_navbar_imglogo" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Saregama_logo.png/220px-Saregama_logo.png" alt="" />
          <div className="home_sidenavbar-title">Saregama</div>
        </div>

        <div className="home_sidenavbar-top-option">
          <img className="home_side_navbar_imglogo" src="https://i.pinimg.com/736x/94/7e/40/947e405ff7b832e61e4c1de5913f51a3.jpg" alt="" />
          <div className="home_sidenavbar-title">NDTV</div>
        </div>

      </div>
    </div>
  );
};

export default SidenavBar;
