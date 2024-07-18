import React from 'react'
import "./section5.css"
const SectionCom5 = () => {
    const data=[
        "https://s3-alpha-sig.figma.com/img/6122/aa6b/9b8f49ee93d012c8987ee2207f5904f1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WNqhOSOMqCBpe98YfB8ixw0U6~h8Urqj-qAnE4l-GoSL3cRQ-M7shgUxR7sNk0B8aawnIx1w~StMGAGjRnOlWwBMG64Zde~p8LHfMicS4eA~Dl8pP5Umdhu8y6DkzT7be9oKE1TyT6eVYW1KB~1LxsQU2jlODRZjhtHW2J5U66dIarI8IUQTHbFuWycWKMJcllr5ecZ4Rq2sQ3Acu-c6oJM93nWt1-T54W~Xy0SG1VvKQ0dJzuqk9~YHc-p8HOagYjYDkLbhgurAsW99ukKYXX9FCOygHDzZHspQf~-avOOep-qoK38J7285FuvdbG6XIpbv7WDrXxN4NCR32UNhxQ__",
        "https://s3-alpha-sig.figma.com/img/3792/fbde/eebbf9b0e80bc61621b32f8e693de9c0?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KVSS-vCunp6~m2aou-Zr3H0kGgQo73Cl-i1aNlVLcddwtRiR5JJealR67~LAh4Kh-wAhLTu8CFTlKavYti5bzh~Ax7KTtpX~WPMwqValWMN8NfL3V5QO9TpzL1pRXG0cSJrWbTDQLYgzbSvQi-k3DQLoXv0OazXYmzSRyvfjqBr1607XwUN4j4zs483Q9vSnK0Ll6gg3Taj6w6envdSumfTrAkVAItUP21yfo1pGc1Y5okfN-f779nKJRZQEJny~ekjrre4JfWd9n-HDSS088ZuN7zQbKb2oCk5~THIrJlF5wcclu7V96nvNhlIGZJvl21w~167Rsq2UPauHDkoOdw__",
        "https://s3-alpha-sig.figma.com/img/da13/0816/4278575f20d7b33e986597976984de2e?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lgUyd2igm~9HhctWNGw2c720lvpBpL0JOikVpkCjiXf6D3iX34ThjKn1~hBqKWDZJC3S70Pk3ezcVt5LlWuVfNZ-pIb7pFecPsly4qtuM4YiLT~0wfPMhYgS2znbJrSmb0-W5WTC-zHD04RFRn44JOPiVdBnysHXB~HfKtoG1-~syoYwTYtNqnqtP~b6bfG0tTkLU4xwISkK1-~d3VpCBoHVTy~EwxQCIQxDfxj8fSnylW0M0xwfmDVAZ-fwYymZTW9zMYc4vz-7R27moaAMOLvq7G99IJN86C~9-B9BTRXZtzDQbolMxoaox8C4B0kbkZnIKSfL28kkeZiK7K1sQg__",
        "https://s3-alpha-sig.figma.com/img/93c5/cdba/ac5f3ccda4bb7847bd18b387094d1e71?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HBw0b9X9NBNZJyoVgdVKbkR5QGSUyVoQAOACuTMD1BAp-xvLs~ZbgTQTtTpas~4YZ2wzvO~oJ5ZDB82yJG1zB50MV4vYB0NECUa1vK3DQ07NUNxu3kz8HMi7yfaROu-mgTiVJ~kJLBbY3vViNzpAqzbkjWAUiSuhn07ICRKR9q3wNHtXZJoHx953n~VOUTfQTEmDKJCaMqewHzLZGM-uxUeHRbHvcA7WSm5l04gJS5s~d6zR2OQ8vHzfk3FDqagHcMJC~okpFxF638sGFgwUoutl-O6XzhCrtxbqHquXVhsmQu8gOtGT4xT~1CCE9g9QendrkKt7hZJ9hS9dGpjKyQ__",
        "https://s3-alpha-sig.figma.com/img/922d/2c0c/d8f46efeae854bcc2418f008e850753d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D7bs6F3~hgnt7PoC6T3w8L2x~mvlm897wXLgM8ZdPYJk4USjg8ortVTq~Un6bihT7wfJjdp9W87j-nZjlrEaobovHJsqNplzZjmaztD5hCcehDE76FyYcQe0UqTLFFV3~UMyA~LqKogDRpuLv7p9JWISylkFUQbs667L4fBLA5uDpylquapNIqC2Q3FlZB7qpurTgrLLUhxIj6fXyqllifvkkwbmJyawTiwBSty-FwFLvUqobpRc1hDkj1MEcUHpGW-EIpWvDOhHifuZpzfXEeSOMGMIlPY~cxiRLfSoopr4onChXlIzGYf4Xq5Xqo0Avq413N9c-8FUMeL6gpZJNA__",
        "https://s3-alpha-sig.figma.com/img/2dc1/0fae/93a1704c2ff5db27869add9524f4e565?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PvEIrb2FJFhG7GRYzwj6aKRutc3zeP8RE2Wvgi3RxKAlQcNGj3tl0a5aoJUmfAl~nawVGuISnZF3nN8Cg4-K6K4~IDLuFbnMNI7cNh5N~si9ed~tg0rEtwV0WQUpTqpArhwlRVW1zyDVtpUD7tiipxdVYgdzY1NnoEojJXzUiq7tThUUTaorde2A2chaBN-FOywqAvASlITd0e~HUtlcfrf5W3-W-XD9uN3WG-CW7iHNfwbRTdUb5p4UmS2u3ThaQGNhBxoakBcLGaHx6PA1VXHj58jM~1MTwAg-cUs~-rWKEsuwl~0TDVHrPDvXrhVG-qOIivAAb3FIhz~AMeoyvA__",
        "https://s3-alpha-sig.figma.com/img/eb9a/6e12/87b21e493e60f3d22d27dfbbf4100f7a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ccpbMGsMlpI1NZQfzXt1hrYb35sO6Ka4NByRU9zKM~K86y93t8awNECiCniOB0XP2qEqE1886XS2Wz-XigbTARD4x87U8Dl898ixalbegY3T95t92UYyqmjemSVKepUSvhU8ZG0-SXg3AVI7ZKzEO4NOqo0QeWEmF88uyA47DJqRLOQNyTx~X2Ep6b8Fn6vTSsEvY3JWH~oGUnhFH3UwckNVyKmNpcrys08XqfcheGxQ4vM3W2EJ0dCnWsB3SlxFKA5yBmqTB3SKOMH0zVirVL8aGMAi8CIbR14C9qWD8uNUq5IYaKM8oVhLPcLnHIHinxddRTayqyzSJ5D~snEpWw__"
    ]
  return (
    <>
    <div>
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