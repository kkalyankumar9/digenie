import React from 'react'
import "./navbar.css"
import { CiSearch } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
const NavbarCom = () => {
  return (
    <>
    <div class='container'>
        <div>
            <p class="p1">Arasi Arts</p>
        </div>
        <div class="midCon">
            <a href="/home" >Home</a>
            <a href="/product">Product</a>
            <a href="/classes">Classes</a>
            <a href="/blogs">Blogs</a>
        </div>
        <div class="icons">
        <CiSearch class="searchicon"/>
        <FaFacebook class="facebook"/>
        <AiFillInstagram class="insta"/>
        <BsTwitterX class="twitter"/>

            <button>Contaact Us</button>
        </div>


    </div>

    </>
  )
}

export default NavbarCom