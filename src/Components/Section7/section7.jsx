import React, { useState, useEffect } from 'react';
import "./section7.css";
import img20 from "../Images/img20.jpeg";
import { PiStarThin } from "react-icons/pi";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const SectionCom7 = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  return (
    <> 
      <div id='sec7main'>
        <div className='sec7con'>
          <p>This Is What Our Customers Say</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis</p>
        </div>
        <div id='sec7con2'>
          <div className='sec7slider' style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
            <div className='sec7sub2'>
              <div>
                <img src={img20} alt="" />
              </div>
              <div>
                <p className="sec7pt1">"You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!"</p>
                <div className="ratting">
                  <PiStarThin/>
                  <PiStarThin/>
                  <PiStarThin/>
                  <PiStarThin/>
                  <PiStarThin/>
                </div>
                <hr />
                <p className="sec7nam">Srimathi.N</p>
                <p className="sec7nam2">Interior Designer</p>
              </div>
            </div>
            <div className='sec7sub2'>
              <div>
                <img src={img20} alt="" />
              </div>
              <div>
                <p className="sec7pt1">"Amazing product! I am so happy with my purchase. Highly recommend!"</p>
                <div className="ratting">
                  <PiStarThin/>
                  <PiStarThin/>
                  <PiStarThin/>
                  <PiStarThin/>
                  <PiStarThin/>
                </div>
                <hr />
                <p className="sec7nam">John Doe</p>
                <p className="sec7nam2">Software Engineer</p>
              </div>
            </div>
            <div className='sec7sub2'>
              <div>
                <img src={img20} alt="" />
              </div>
              <div>
                <p className="sec7pt1">"Outstanding quality and service. I will definitely be a repeat customer."</p>
                <div className="ratting">
                  <PiStarThin/>
                  <PiStarThin/>
                  <PiStarThin/>
                  <PiStarThin/>
                  <PiStarThin/>
                </div>
                <hr />
                <p className="sec7nam">Jane Smith</p>
                <p className="sec7nam2">Graphic Designer</p>
              </div>
            </div>
          </div>
          
        </div>
       
      </div>
   
    </>
  );
}

export default SectionCom7;
