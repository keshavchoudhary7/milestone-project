import React, { useState } from 'react'
import './navbar.css'
import MenuIcon from "@mui/icons-material/Menu"
import {Link, useNavigate} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { PiYoutubeLogoBold } from "react-icons/pi";
import Login from '../login/Login';


const Navbar = ({toggleshow,isSideNavVisible}) => {
  const navigate = useNavigate();
  //handle User Profile click
  const handleProfileClick = ()=>{
    navigate('/user/534')
    setNavbarModel(false)
  }
  //handle login click
  const [login,setLogin] = useState(false)
  //handle user Image
  const [userImg, setUserImg] = useState("https://cdn-icons-png.freepik.com/256/16012/16012747.png");
  // handle Navbar Models
  const [navbarModel, setNavbarModel] = useState(false); 


  // handle Navbar visibility
  const handleClickNavModel = ()=>{
    setNavbarModel(!navbarModel)
  }


  // handle side Nav visibility
  const handleSideNav = () => {
    toggleshow(!isSideNavVisible);

  }


  // handle pop-up login actions
  const onclickOfPopUpAction = (button)=>{
    setNavbarModel(false)
    if(button == 'login'){
      setLogin(true); 
    }else{

    }
  }


  // handle login modal close
  const handleLoginClose = ()=>{
    setLogin(false)
  }

  return (
    <div className='navbar'>
      <div className="navbar-left">
          <div className="hamburger_menu" onClick={handleSideNav}>
            <MenuIcon sx={{color:"white"}}/>
          </div>
          <Link to={'/'} className="ytlogo">
            <PiYoutubeLogoBold  className='yt_icon'/>
            <div className="yt_titile">TubeTune</div>
          </Link>
      </div>
      <div className="navbar-middle">
        <div className="navbar-Searchbar">
          <input type="text" placeholder="Search" className='navbarSearchbarInput' />
          <div className="navbarSearchIconBox">
            <SearchIcon sx={{fontSize:"34px", color:"white"}}/>
          </div>
          <div className="navbarVoiceSearchIconBox">
            <KeyboardVoiceIcon sx={{color:"white"}}/>
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <Link to={'/435/upload'}>
        <VideoCallIcon sx={{fontSize:"30px",cursor:"pointer", color:"white"}}/>
        </Link>
        <NotificationsNoneIcon sx={{fontSize:"30px", cursor:"pointer", color:"white"}}/>
        <img src={userImg} alt="" className='user-logo' onClick={handleClickNavModel}/>

        { navbarModel &&
          <div className="navbar-model">  
          <div className="navbar-model-option" onClick={handleProfileClick}>Profile</div>
          <div className="navbar-model-option" onClick={()=>onclickOfPopUpAction("logout")}>logout</div>
          <div className="navbar-model-option" onClick={()=>onclickOfPopUpAction("login")}>login</div>
        </div>
        }
      </div>
      {
        login && <Login handleLoginClose={handleLoginClose}/>
      }
    </div>
  )
}

export default Navbar;