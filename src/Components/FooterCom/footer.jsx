import React from 'react'
import "./footer.css"
import { FaFacebook } from 'react-icons/fa6'
import { AiFillInstagram } from 'react-icons/ai'
import { FaPhoneAlt } from "react-icons/fa";
import { BsTwitterX } from 'react-icons/bs'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
const Footer = () => {
  return (
    <>
    <div class="footerMain">
    <div  class="footerCon">
        <div class="footer1">
            <div class="fc1">
                <img src="https://s3-alpha-sig.figma.com/img/bd36/41fc/799918723dbbd2a9d7a427545f44384e?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A2W7LD9P9vNjTt25fNDj-fOMmou~9D-D0ogx4wM1p~geiy1DvsPQZtmbiawRcWBuf0LRydjOG0ii~DWykP~RH1~YQDlBDZ0VxJCl4fTsz6AFyuwGV-YB8Kl8Hm0z0NxH-4FI~GJpjdgOew-KUrEgOGu-hQLGLhJKFervnLn2j8oCZB7PEI69wFt98UJdqkBNbCAcoo8BLwLaqaPRFMGsj718gU8WJ~3yRVVUx6ajofRWwCAFiaoOVUgewH~AqSA5vgA02xljeK3E~81aBMzXSQDmJc~YU2P~LLMKlenRwy~6paZqRs3aBCSkaBWYueeeg-t3HIGVevsE~IaMpurBpQ__" alt="" />
                <p>Arasi Arts</p>
                <div class="fc1_icons">
                <FaFacebook class="facebook"/>
        <AiFillInstagram class="insta"/>
        <BsTwitterX class="twitter"/>

                </div>

            </div>
            <div class="fc2">
                <p>Products</p>
                <p>Categories

</p>
                <p>Purchase</p>
                <p>Gallery</p>
                
            </div>
            <div class="fc2">
            <p>Classes</p>
                <p>Our Classes



</p>
                <p>Enroll</p>
                <p>Students Art</p>
                
            </div>
            <div class="fc4">
                <p>Contact Us</p>
                <p><FaPhoneAlt /> +91 93451 41877</p>
                <p> <CiLocationOn  /> virudhunagar/ chennai
               <br/> (vadapalani)</p>
                <p><MdOutlineMail />
                Arasiarts@gmail.com</p>

            </div>
        </div>
    </div>
    <hr class="hr1"/>
    <div class="foorer2">
    <p>Copyright © 2024 Arasi Arts. All Rights Reserved.</p>

  <div class="img-container">
    <img src="https://s3-alpha-sig.figma.com/img/151c/4b0a/8baf4c78e4c2166d57d2f6d4c8c796dc?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f4KqpCfPPYOheGDCEK0qAlbRwX15JTx8Z0683wEHYiOm1bFMRtg0Fc6eSrla-WquQ8dS009VdvFj2DpAfjcn2JyMx3ZPfH8ro~2mfkP1HlqkEnlUnWtA27zUkU2Xf7oplG~skFIm~3ikLEkVN6fN1Vg4KgTEBmtv~agrHWITkQHNz0DfeTqF~5UEiRxgKAZ30hrkshLt35dQDd8dDhOLr6Darpn7xpafCjeNBQZC85ONO6Y6A6kCKcA-4qzDvnKqy2OGARqsJHU1xgJVBf8tlhJGCv3KXx-zX8hIw94sGbtAS5wmhuwM9iqmtBYC9AWxrkENiyqCTJYWjYXnB7xRaw__" alt="" class="fimg"/>
    <img src="https://s3-alpha-sig.figma.com/img/2995/6ed9/8b4582db7d6f0af39fb3b4b61fdf17d0?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DRGbA5JGGV2JsdUdPMjTCL2pNl-ndpaaDC1TED7JViK97Y-tOI8HPkg-mz5fn82~r2ko75dX9Yq3BGtkyE-trbkQlqFraxYBORvEfXn7NOx1Verojtb6C8dCki2TPynpbN8GeZWsJ4N7-MaljkJSRw-mH5~7oGKU7wfGuuuobWPMiw1iIsYjUdQ-jphtN51PFq1O7TV9F~YkbJJQ6qdiG08~YAxbPoTzIzJpzY907EN1mGDj6duhGlX6XT5oG86IYN7IXPQw7JghdwlK6htS7wVxuFY27RP3eqK7QFCtLqV6u34NiAJceseuB1jkVlHhndhsnb6oE2ahKG7-p~S2IA__" alt="" class="fimg"/>
  </div>
</div>

    </div>
    </>
  )
}

export default Footer