import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Nav.css"

function Nav() {
    const navRef =useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
    <headers>
        <h3>Center Code</h3>
        <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/#">Blog</a>
            <a href="/#">About</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
            <FaBars/>
        </button>
    </headers>
  )
}

export default Nav;