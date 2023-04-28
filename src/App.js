import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import House from "./pages/house";
import Price from "./pages/price";
import Contact from "./pages/contact";
import Navbar from './components/navbar';
import useEffect from 'react';

function App() {

  return (
    
    <>
    <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="about" element={<About  paddingtop={"100px"} />} />
          <Route path="house" element={<House paddingtop={"100px"} />} />
          <Route path="price" element={<Price paddingtop={"100px"}/>} />
          <Route path="contact" element={<Contact paddingtop={"100px"} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
