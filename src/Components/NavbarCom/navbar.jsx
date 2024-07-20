import React, { useState } from 'react';
import "./navbar.css";
import { CiSearch } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const NavbarCom = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container">
        <div>
          <p className="p1">Arasi Arts</p>
        </div>
        <div className={`midCon ${isOpen ? 'open' : ''}`}>
          <a href="/home">Home</a>
          <a href="/product">Product</a>
          <a href="/classes">Classes</a>
          <a href="/blogs">Blogs</a>
        </div>
        <div className="icons">
          <CiSearch className="searchicon" />
          <FaFacebook className="facebook" />
          <AiFillInstagram className="insta" />
          <BsTwitterX className="twitter" />
          <button>Contact Us</button>
        </div>
        <FaBars className="hamburger" onClick={toggleMenu} />
      </div>
    </>
  );
}

export default NavbarCom;
