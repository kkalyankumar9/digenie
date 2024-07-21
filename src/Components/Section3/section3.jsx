import React from 'react'
import "./section3.css"
import { PiStarThin } from "react-icons/pi";
import img6 from "../Images/img6.png"
import img7 from "../Images/img7.jpeg"
import img8 from "../Images/img8.jpeg"
import img9 from "../Images/img9.png"
import img10 from "../Images/img10.jpeg"
import img11 from "../Images/img11.jpeg"
const SectionCom3 = () => {
  const data=[
    {
      "id":1,
      "image":img6,
      "title":"Finger Painting"
    },
    {
      "id":2,
      "image":img7,
     "title":"Finger Painting"
    }
    ,
    {
      "id":3,
      "image":img8,
     "title":"Finger Painting"
    }
    ,
    {
      "id":4,
      "image":img9,
    "title":"Finger Painting"
    }
    ,
    {
      "id":5,
      "image":img10,
      "title":"Finger Painting"
    }
    ,
    {
      "id":6,
      "image":img11,
      "title":"Finger Painting"
    }
   
  ]
  return (
    <>
<div class="sec3pt1">
  <p>New Arrivals</p>
  <p>Check out our extensive product collection and buy them now!</p>
</div>
<div class="sec3But">
  <button>Tanjore Painting</button>
  <button>Finger Painting</button>
  <button>Resin Painting</button>
  <button>Relief Art</button>
  <button>Mossaic painting</button>
</div>
<div>
<div class="sec3data">
  {
    data?.map((e)=>(
      <div key={e.id} class="sec3co1">
        <img src={e.image} alt="" />
        <p>{e.title}</p>
        <div class="ratting">
  <PiStarThin/>
  <PiStarThin/>
  <PiStarThin/>
  <PiStarThin/>
  <PiStarThin/>
  </div>
      </div>
    ))
  }

</div>
<button id='sec3view'>View More</button>

 
</div>


    </>
  )
}

export default SectionCom3