import React from 'react'
import "./section4.css"
import { RiHandCoinFill } from "react-icons/ri";
import { AiOutlineFileProtect } from "react-icons/ai";
import { MdOutlineSupportAgent } from "react-icons/md";

import { CgPlayButtonR } from "react-icons/cg";
const SectionCom4 = () => {
  return (
    <>
    <div id='sec4main'>
    <div id='sec4ptcon'>
        <div class='sec4left'>
        <CgPlayButtonR className='icon4'/>
        </div>
        <div class='sec4right'>
            <div id="sec4rightdiv">
                <p>About The Artist</p>
                <p>
                Meet our artist mrs. elavarasi chokkar. she has been an artist since childhood has learned various painting techniques. she has also conducted art classes for the past 33 years. in the past five years, she has helped numerous women in virudhunagar learn art for free. sound inspiring right? from tanjore painting to contemporary art , elavarasi has created various art piece with utmost care and attention. check out her collection now!
                </p>
                <button>Buy Now</button>
            </div>
        </div>
    </div>
    <div class="sec4pat2">
        <div>
        <RiHandCoinFill class="sec4icon"/>
        <p class="sec4pt">High Quality</p>
        </div>
        <div>
        <AiOutlineFileProtect class="sec4icon" />

            <p class="sec4pt">Warrancy Protection</p>
        </div>
        <div>
        <MdOutlineSupportAgent class="sec4icon"/>
            <p class="sec4pt">24/7 Support</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default SectionCom4