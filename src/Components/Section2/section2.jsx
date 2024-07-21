import React, { useState } from "react";
import "./section2.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import img1 from "../Images/img1.png"
import img5 from "../Images/img5.png"
import img6 from "../Images/img6.png"
const images = [
  img1,
  img5,
  img6

];

const SectionCom2 = () => {



  return (
    <div className="sec2main">
      <div className="seccon2">
        <div className="sec2sub1">
          <p>
            Check out our <br />
            modern collections
          </p>
          <p>
            "Explore our collection of exquisite artwork, <br /> featuring
            diverse styles and mediums from <br /> renowned and emerging
            artists."
          </p>
          <button>Buy Now</button>
        
        </div>

      
        <div id="sec2con2" >
          {images.map((src, index) => (
            <img key={index} src={src} alt={""} />
          ))}
           
        </div>
      
       
      </div>
     <div id="arrows" >
          <IoIosArrowDropleft className="se2icons" />
          <IoIosArrowDropright className="se2icons" />
          </div>
    </div>
  );
};

export default SectionCom2;
