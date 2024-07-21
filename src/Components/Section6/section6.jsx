import React from 'react';
import "./section6.css";
import img19 from "../Images/img19.jpeg"
const SectionCom6 = () => {
  return (
    <>
      <div className="sec6con">
        <div id='sect6pt1'>
          <div id='sect6pt1_1'>
            <p>Collect your piece of inspiration</p>
            <p>"Discover your piece of inspiration within our curated collection, showcasing <br /> captivating works from both renowned and emerging artists."</p>
          </div>
          <div className="sec6form">
            <form action="">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Phone Number" />
              <input type="email" placeholder='Email' />
              <input type="description" placeholder='Description' />
              <button id='formbut'>Register Submit</button>
            </form>
          </div>
        </div>
        <div id='sect6pt2'>
          <img src={img19} alt="" />
        </div>
      </div>
    </>
  );
}

export default SectionCom6;
