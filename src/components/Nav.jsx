import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Nav.css";
import logo from '../assets/logo.jpg';
import { Link } from "react-router-dom";


function Nav() {
    const navRef =useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
    <div className="nav-head">
        <div className="flex"><img src={logo} className='logo'/><b className="center-code-nav">Center Code</b></div>
        <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/#">Blog</a>
            <a href="/#">About</a>  
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <div className="btn-trial">
        <button className="starts-btn-trial "> 
            <Link to="/register">Start Your Trial
            </Link>
        </button>
        <button className="starts-btn-trial mx-2">
            <Link to="/login">Login
            </Link>
        </button>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
            <FaBars/>
        </button>
    </div>
  )
}

export default Nav;