import React from 'react';
import "./section6.css";

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
          <img src="https://s3-alpha-sig.figma.com/img/6ca3/c990/e4448a659784be429982fc001b963d67?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jjxqgqvzJTGu12mvCPzz4pQPlWANrZTHv9ONJ44IlLAnN0T6tFbrRJi98KTRvG332EUiulBw9tMx4yTd2NZIj~DnowhOcGw5Nfrs6KPcrED1qgF-r-kyCFfRwjzq4m6pODYsXr7fUQw3RHO5D3OK~YGdP8yk2ZlFZltk2VGWc9zDy29rUgFx4Gmr3rk-cPS1aboTNzGghy8HoVHyed6jbIVPeXo-2TTdWE76h47rJ5z~4Y7Cu9KIhqDLB5qGsSg~H~5hUIHULtBEPkkGQyW5BDAaZ7QtYBWmxMK7gIjpyRUHSF6goQqBvLXF7niRmyj42p54j3Ponru5pEeKx5-gQw__" alt="" />
        </div>
      </div>
    </>
  );
}

export default SectionCom6;
