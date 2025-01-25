import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import {Route, Routes} from 'react-router-dom'
import SinglePage from "./pages/singlePage/SinglePage";
import Profiles from "./pages/profile/Profiles";
import VideoUpload from "./components/videoUpload/VideoUpload";
import Signup from "./pages/signup/Signup";
function App() {
  const [isSideNavVisible, setIsSideNavVisible] = useState(true);
  const toggleshow = (value)=>{
    setIsSideNavVisible(value);
  }
  return (
    <div className="App">
      <Navbar toggleshow={toggleshow} isSideNavVisible={isSideNavVisible} />
      <Routes>
        <Route path="/" element={<Home isSideNavVisible={isSideNavVisible}/>} />
        <Route path="/watch/:id" element={<SinglePage />} />
        <Route path="/user/:id" element={<Profiles isSideNavVisible={isSideNavVisible}/>} />
        <Route path="/:id/upload" element={<VideoUpload/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
