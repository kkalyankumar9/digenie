import "./App.css";
import Footer from "./Components/FooterCom/footer";
import NavbarCom from "./Components/NavbarCom/navbar";
import SectionCom1 from "./Components/Section1/section1";
import SectionCom2 from "./Components/Section2/section2";
import SectionCom3 from "./Components/Section3/section3";
import SectionCom4 from "./Components/Section4/section4";
import SectionCom5 from "./Components/Section5/section5";
import SectionCom6 from "./Components/Section6/section6";
import SectionCom7 from "./Components/Section7/section7";

function App() {
  return (
    <div >
      
        <NavbarCom />
   
      <SectionCom1 />
      <SectionCom2 />
      <SectionCom3/>
      <SectionCom4/>
      <SectionCom5/>
      <SectionCom6/>
      <SectionCom7/>
      <Footer/>
     
    </div>
  );
}

export default App;
