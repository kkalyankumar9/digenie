import React, { useState } from "react";
import "./section2.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const images = [
  "https://s3-alpha-sig.figma.com/img/c68a/5bf9/c14f18bf73dd8ec9461629251955ee50?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TM~wHHNYa28f~V5Xs7YivNb4YwxLVLKzyI08R6DB5WrGwFwnpKfcmAvvNsT2ngT6a-tEjoW3EK0h1lYdI~RSJvqPMlqeCKDgoUOoMEuzBCZm7i2m1rSx0~4ryz9HaBJTU2mTBTHHhUsR9vvVMIfcnsYwXbJo9WCUK-gMew1dTe8968I1wyUaKNMZPvWSfaRDx7fTRyK1ucLKtZpom-oGNXeMXMGuii0L-3Pu2xcLMM9-9i1uzjtTjkj300DXdrZP7ChGcCBx7EF2yGf2koCnOBopPZo8nHqE0bnNsNHUqkPrnDfo9nP~yRCwjIGUlgMQpQuJfc382pTsvncxgU~X8Q__",
  "https://s3-alpha-sig.figma.com/img/312c/7cf7/e7885b4278c2f098f19f8f0926b4704b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OiRoQ0g9aLwFrIb~D2wQoryeNfB9pFSqBZZXT3YOF7P-CQBayLLa7Z~UEiXQDDmARiU2Af6jQPZUUsQMzuiDmdmUAYsDUvT6QuJWi4yV86jKCftLNbDVQc478OPb6MwtFq9fI~vEHRNyCaLTlVHgmUAYz9pT3hUfiOAcQxKLMgDJZyyzipplvlAzRsb91XMdbjA190VuwsPIeovq2GVzYE2XfGW2N3dzi34y8WEF9L5CmBErUkjGNLYUJfesVnjkuWlOGPe1D~NYHt5McxpxFrdjLjKHZ6Yypnv5PANuQYKynsiDGt-UYiEgVJCsxzCHj16i4kL9ayWkWxOIE84oZw__",
  "https://s3-alpha-sig.figma.com/img/0ad8/626c/66328b191db39f4d3a8f5b935bc3885a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ns2NyUgWkvWTsTY~ZCbGglsTIqKnxuo0ChReaR3KJq5-TAhsOy-017AwWrGbZcLc4jtM3AXVK6BcqaGhekpN4OZ5Pp9IoODGeTMHwnooWd09sLQE5tymsIx827n~YUwgIp9bYmmBbikxOAlNzP1-XJtTgfa4PPxGprV37m0EbgZu0wAnC3vzeETMHWSXg-pC3Y5nFDZKD7NCxCI9C6AAo4V8dhnLKZYzI84oRxB5Um1GzlUSWeQ8UG1CPXpkSqBnJv78~SYEdnaXvrrejDAQW7G3WcLGSdf894yZSYgEC6uNe32OCbb6WbQpG0zxapRUYo46aWKAa425Uk~ShNWeMw__"
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
