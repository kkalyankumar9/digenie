import React from 'react'
import "./section5.css"
import img12 from "../Images/img12.png"
import img13 from "../Images/img13.png"
import img14 from "../Images/img14.png"
import img15 from "../Images/img15.png"
import img16 from "../Images/img16.png"
import img17 from "../Images/img17.png"
import img18 from "../Images/img18.png"

const SectionCom5 = () => {
    const data=[
img12,
img13,
img14,
img15,
img16,
img17,
img18
    ]
  return (
    <>
    <div className='sec5main'>
    <div class="sec5pt1">
  <p>Are you an aspiring artist</p>
  <p>learn Tanjore Painting , Relief Art , Kerala Mural , fridge Magnet , single store painting , Knife Painting and various <br /> other techniques. Enroll in a class today </p>
</div>
<div class="sec5image">
{
    data?.map((e,i)=>(
        <div key={i}>
            <img src={e} alt=""  className={i % 2 === 0 ? "even-img" : "odd-img"} />
        </div>
    ))
}

</div>
    </div>
    </>
  )
}

export default SectionCom5