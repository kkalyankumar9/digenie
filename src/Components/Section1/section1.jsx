import React from 'react'
import "./section1.css"
import img1 from "../Images/img1.png"
import img2 from "../Images/img2.png"
import img3 from "../Images/img3.png"
import img4 from "../Images/img4.jpeg"
const SectionCom1 = () => {
  return (
    <>
    <div class="sec1Main">
      <div class="secSub1">
        <img src={img1} alt="" />
      </div>
      <div class="secSub2">
        
        
        <img class="seimg1" src={img2} alt="" />
      <p id='sec1p'>WELCOME TO</p>
      <p id='sec1p2'>ARASI
      ARTS</p>
      <button >Buy Now</button>
      <img class="seimg1" src={img3} alt="" />
      </div>
      <div class="secSub3">
        <img src={img4} alt="" />
      </div>
    </div>

    
    </>
  )
}

export default SectionCom1