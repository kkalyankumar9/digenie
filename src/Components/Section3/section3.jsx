import React from 'react'
import "./section3.css"
import { PiStarThin } from "react-icons/pi";
const SectionCom3 = () => {
  const data=[
    {
      "id":1,
      "image":"https://s3-alpha-sig.figma.com/img/8385/a46c/40533739dfd5554e59889aa7fbf0629c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wu4Wdox1jqo9Q9P~yegIUc~woxuA8cIgc8HUVLfdU-241h8f8FoWtavQZ49M30~ozS2IqCViwwHVko2O9B-aH6Wwa3dxT5NX3ZCHQaqADxR~v29vwv7IGUcPgBQhc1JsyfDxm9HO46lLeP96pYyhpBkYsWPdmyr3MlTXr0KNbjI~zYq6b8Te4a7uDZebWpPFcXrclesjtxtQI2i0Je2ve6Ki-iIPgAOsedwIvlNPAfs5tZLtgLDYRviFcspTKMX~97sl0Xuw3Y7bs1v7muhLIThdww7HRf-dzoe8uLWhm1a3PqHUI~Koaa2foUa~DfAa6RlLumMOHeyps62dQLpxFA__",
      "title":"Finger Painting"
    },
    {
      "id":2,
      "image":"https://s3-alpha-sig.figma.com/img/67a6/e42d/7c16841af6c2c890c36cb3a5e7f3f2bb?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c7COTsiR0D0PIcFUze0C9lgUM5RiwxmC4lUlL41Lum5Yq~P~kpmNRgz7mie7tA-p6ebFzbDxBzSd0uf4bVAXAcqs2tz6mK6633belwnufuBzi1idWNuJrMP9J01sKUy-ct-56a3MdSHPK5v8w4MBNu0e6li~MTGqhq2GcYt84PWQwq-15gk9pFAU9sr6B085cI11tLl4Nw4MDq6M7TJ7h3hGyqq2e7g1C5J1TmK1XSpA8q3SLH5nGYcMOtIZStN87ZBS7C3gdWjo6gX9FOxeuVL3YtbTU03Klao3tmHng~fKpct8D53sU36w1lcTPqc3OgkYRZcsXDPGWCXeY4bpcA__",
     "title":"Finger Painting"
    }
    ,
    {
      "id":3,
      "image":"https://s3-alpha-sig.figma.com/img/9515/c670/d2d957d8d571187b9ef4501441dcc892?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QqIO-mHjLXQTXbw4KbIiuhKWyYla6QPtl1XmS~eHh0C8MNwclhKZJVLi-bNUCl8~04sTBhTPRS5~xsRqPvJN-EGA7CS34nbsK9bQo4TlRphEIyQV26y5Y7Y-OhrMJpJ6mnSZS6RLissVQPNCgMu1Str44oV83aTN1V6rjuaoaBLTnSyJfRbtR2DcS3h0p0l8cN9PY3iLirhf7qLDPxPxvynrMqQMs-CP32B7dbab0hgmNStJNHxeNexcUm-rHERSQVVxbvZjfFOhafCTUyrYexzxDfcW0-UYT6l2Kk8n0gStAIaExJGe3eirarhl~4RdYf0k0LeDi1al-5rXfFGkeg__",
     "title":"Finger Painting"
    }
    ,
    {
      "id":4,
      "image":"https://s3-alpha-sig.figma.com/img/a831/ca71/dc2a0762020410d3e3a031c283a566ba?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MN2yBMzSWajA0W8bZqy~ASiJSXw3JL5FAcqtaaQuyQ-A42k8VgxJvZIwjbG9pnGEh3D5z3oUIAfWgc9WkHx~6hyYI-ERI4Q2IVSYHfUhOsArtwheVs4JPA3i5j8v0ss0lI8MPJyRzaiNfnTFSrZcTX3wvarxd0rhHxk9FnEXFQ4A2jbaK3hmrnDK0jIni7X4zZ6vGlS6~I1lD7Gm5glQ5aydN-8YlqHOGMSL6LTgWjPUD0rYmRwiQfke86QwC3r1K0mR8GngZP1yfJZxfu4IBT0GK3exZsXwaqMtOYcCNpmtdaYFzcIG~MV5rCX3thJYYMjdXQzQF2b0bAx4MbA7OA__",
    "title":"Finger Painting"
    }
    ,
    {
      "id":5,
      "image":"https://s3-alpha-sig.figma.com/img/b3d7/22fa/304c3d21a234baa9692006266baf7f4c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GuwXc5p5rH8Q4NwDtkCcTXr0MmuWPMrveraM1FxITOdMtnZg7LvgQRqhjpyzwAzLnFhbEVTFbY4~3IWNQT~pzuIAXwt-E9puoU8V6GqsY~7m3D1DEUZf~t3lhr75gQiCY9CjpC8RzjFQNFxjNtJxH~qjXUQFqoFKIzu5Ab2TfdVwu7Uh266hOUlVjrG29hA2HD9xYqnMIMJnuIKI3q~oZmp57TU-lXVOW1Eyx6aQq~mqgWa9ihtw~qDRcX0eL0gZujaxCfF8es7AdZ1o7yG1R-THYFYGsX3yTW~63uZkDCaRuE-RUVwljJ3SWEoS-qRWd8UIWgzrYO0q5YNBJk9-Pg__",
      "title":"Finger Painting"
    }
    ,
    {
      "id":6,
      "image":"https://s3-alpha-sig.figma.com/img/dd7a/c676/f74e40e6648d72859f81e7f44c9de521?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BzY7g1exEqsoqeDWe~JAbrW510vs6w6XL5Hg-hY9UwWnrhEAgYdgZqBnm0mDH2e3myvzUInSgjYNX5vNHBuRgZJnJbT~hltN7Ltv4nIq81WnvEnnUl-HIpbpEqvYUNN1k0KRfFa2vXuhhLGR1NtWp74Wx-q9BRgMqWRQAozqdDfzFajfyIt3s9U1RVhu9FokmeiWlEU1maMZ1CtCGyAbkOwRxmHrlnfIh65dQAxyimK7QwF06--efmZ-mhb~iXxxQmIREkwW4px6cOiK89-YT2V0Io1I4BcbL8zQqnlvJRTmBlKlj9qDZiwwcvFPIz1ldmUaQ65Dq9PUb-mGkwRJWg__",
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