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
 
  return (

    <div >
      <div className='header'>
        <div className='container1'>
          <div className='logo' >
            <img className="Logo" onClick={() => navigate('/')} src={logo} width="90px" />
          </div>
          <div className="list">
            <span className={click ? 'nav-menu active' : 'nav-menu'}>
              <li>
                <span onClick={() => navigate('/')}>Home</span>
              </li>
              <li>
                <span onClick={() => navigate('/about')}>About us</span>
              </li>
              <li>
                <span onClick={() => navigate('/house')}>House</span>
              </li>
              <li>
                <span onClick={() => navigate('/price')}>Price</span>
              </li>
              <li>
                <span onClick={() => navigate('/contact')}>Contact us</span>
              </li>
            </span>
          </div>

          <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={22} style={{ color: '#1b2c7a' }} />) : (<FaBars size={22} style={{ color: '#1b2c7a' }} />)}

          </div>
        </div>
      </div>
      {/* <nav className="caontainer-1" >
        <div class="navbar navbar-expand-lg  nav-background   px-lg-3  px-4 py-lg-0 py-3" >

          <a class="navbar-brand" href="#">
            <img className="Logo" src={logo} width="90px" />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse   " id="navbarSupportedContent">

            <ul class="navbar-nav ms-auto ">
              <li className="mx-2 my-3 "> <Link className="nav-link button px-4 " to="/">  Home</Link> </li>
              <li className="mx-2 my-3 "> <Link className="nav-link button px-4" to="about">About us</Link> </li>
              <li className="mx-2 my-3 "> <Link className="nav-link button px-4" to="house">House</Link> </li>
              <li className="mx-2 my-3 "> <Link className="nav-link button px-4" to="price">Price</Link> </li>
              <li className="mx-2 my-3 "><Link className="nav-link button px-4" to="contact"> Contact us </Link></li>
            </ul>
          </div>

        </div>
      </nav> */}

    </div>


  );
}

export default Navbar;
