/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../assets/imgs/logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";
import Hero from "../assets/imgs/logo.png";
import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    setClick(false); // Reset click state when navigating to a new page
  };

  useEffect(() => {
    setClick(false); // Reset click state when the component mounts or updates
  }, []);


  return (
    <div className={`header ${scrollPos > 100 ? 'navbar--blur header-nav' : ''}`}>
      <div className='container1'>
        <div className='logo' >
          <img className="Logo" onClick={() => navigate('/')} src={logo} width="90px" />
        </div>
        <div className="list">
        {/* ? 'block' : 'none' */}
          <span className={click ? 'nav-menu active' : 'nav-menu ' } style={{ display: isMenuOpen  }}>
            <li>
              <span onClick={() => { navigate('/'); handleMenuItemClick(); }}>Home</span>
            </li>
            <li>
              <span onClick={() => { navigate('/about'); handleMenuItemClick(); }}>About us</span>
            </li>
            <li>
              <span onClick={() => { navigate('/house'); handleMenuItemClick(); }}>House</span>
            </li>
            <li>
              <span onClick={() => { navigate('/price'); handleMenuItemClick(); }}>Price</span>
            </li>
            <li>
              <span onClick={() => { navigate('/contact'); handleMenuItemClick(); }}>Contact us</span>
            </li>
          </span>
        </div>

        <div className='hamburger' onClick={() => { handleClick(); setIsMenuOpen(!isMenuOpen); }}>
          {click ? (<FaTimes size={22} style={{ color: '#1b2c7a' }} />) : (<FaBars size={22} style={{ color: '#1b2c7a' }} />)}

        </div>
      </div>
    </div>
  );
}

export default Navbar;
