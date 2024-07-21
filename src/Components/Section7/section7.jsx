import React from 'react'
import "./section7.css"
import img20 from "../Images/img20.jpeg"
import { PiStarThin } from "react-icons/pi";

const SectionCom7 = () => {
  return (
    <> 
    <div id='sec7main'>
        <div class='sec7con'>
            <p>This Is What Our Customers Say</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis</p>
        </div>
        <div id='sec7con2'>
            <div className='sec7sub2'>
                <div >
                <img src={img20} alt="" />

                </div>
                <div>
                    <p class="sec7pt1">"You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!"</p>
                    
                    <div class="ratting">
  <PiStarThin/>
  <PiStarThin/>
  <PiStarThin/>
  <PiStarThin/>
  <PiStarThin/>
  </div>
  <hr />
  <p class="sec7nam">Srimathi.N</p>
  <p class="sec7nam2">Interior Designer</p>
                </div>
            
            </div>
            
        </div>
    </div>

    </>
  )
}

export default SectionCom7