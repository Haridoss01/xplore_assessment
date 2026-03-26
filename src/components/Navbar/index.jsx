import { useState } from "react";
import { BsList } from "react-icons/bs";
import { HiMiniXMark } from "react-icons/hi2";
import './index.css'

function Navbar() {
    const [showNav,SetShownav]=useState(false)
  return (
    <>
    <nav className="nav-main">
        <div className="nav-lg-con">
        <div className="nav-logo-con">
            <span>X</span>
            <h1>Xplore IT CORP</h1>
        </div>
        <div className="nav-items-con">
            <a href="">Home</a>
            <a href="">Courses</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>
        <div className="action-con">
            <button type="button" className="sign-in-btn">Sign in</button>
            <button type="button" className="get-start-btn">Get Started</button>
        </div>
            {showNav ?  <HiMiniXMark onClick={()=>SetShownav(!showNav)} className="nav-list-icon"/> :
             <BsList onClick={()=>SetShownav(!showNav)} className="nav-list-icon"/>}
        </div>
        {showNav && <div className="sm-navbar">
            <div className="sm-nav-items">
                <a href="">Home</a>
                <a href="">Courses</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
            <div className="sm-action-con">
                <button type="button" className="sign-in-btn">Sign in</button>
                <button type="button" className="get-start-btn">Get Started</button>
            </div>
        </div>}
    </nav>
    </>
  )
}

export default Navbar