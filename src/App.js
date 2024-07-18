import "./App.css";
import Footer from "./Components/FooterCom/footer";
import NavbarCom from "./Components/NavbarCom/navbar";
import SectionCom1 from "./Components/Section1/section1";
import SectionCom2 from "./Components/Section2/section2";
import SectionCom3 from "./Components/Section3/section3";
import SectionCom4 from "./Components/Section4/section4";
import SectionCom5 from "./Components/Section5/section5";
import SectionCom6 from "./Components/Section6/section6";

function App() {
  return (
    <div style={{ width: "1920px",margin:"1%" }}>
      <div
        style={{
          width: "1920px",
          height: "161px",
          position: "sticky",

          top: "0",
          " z-index": "10",
          left: "-2px",
          background: " #FFFFFF",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          boxShadow: " 0px 4px 4px 0px #00000040",
        }}
      >
        <NavbarCom />
      </div>
      <SectionCom1 />
      <SectionCom2 />
      <SectionCom3/>
      <SectionCom4/>
      <SectionCom5/>
      <SectionCom6/>
      <Footer/>
     
    </div>
  );
}

export default App;
