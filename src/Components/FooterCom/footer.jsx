import React from 'react';
import './footer.css';
import { FaFacebook } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineMail } from 'react-icons/md';
import footer1 from "../Images/footer1.jpeg";
import footer2 from "../Images/footer2.png";
import footer3 from "../Images/footer3.png"

const Footer = () => {
  return (
    <div className="footerMain">
      <div className="footerCon">
        <div className="footer1">
          <div className="fc1">
            <img
              src={footer1}
              alt=""
            />
            <p>Arasi Arts</p>
            <div className="fc1_icons">
              <FaFacebook className="facebook" />
              <AiFillInstagram className="insta" />
              <BsTwitterX className="twitter" />
            </div>
          </div>
          <div className="fc2">
            <p>Products</p>
            <p>Categories</p>
            <p>Purchase</p>
            <p>Gallery</p>
          </div>
          <div className="fc2">
            <p>Classes</p>
            <p>Our Classes</p>
            <p>Enroll</p>
            <p>Students Art</p>
          </div>
          <div className="fc4">
            <p>Contact Us</p>
            <p>
              <FaPhoneAlt /> +91 93451 41877
            </p>
            <p>
              <CiLocationOn /> virudhunagar/ chennai
              <br /> (vadapalani)
            </p>
            <p>
              <MdOutlineMail />
              Arasiarts@gmail.com
            </p>
          </div>
        </div>
      </div>
      <hr className="hr1" />
      <div className="foorer2">
        <p>Copyright © 2024 Arasi Arts. All Rights Reserved.</p>
        <div className="img-container">
          <img
            src={footer2}
            alt=""
            className="fimg"
          />
          <img
            src={footer3}
            alt=""
            className="fimg"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
