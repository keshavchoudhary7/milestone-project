import React from 'react'
import './home.css'
import SidenavBar from '../../components/sidenavbar/SidenavBar'
import HomePage from '../../components/homepage/HomePage'
const Home = ({isSideNavVisible}) => {
  return (
    <div className='home'>
        <SidenavBar isSideNavVisible={isSideNavVisible} />
        <HomePage isSideNavVisible={isSideNavVisible}/>
    </div>
  )
}

export default Home