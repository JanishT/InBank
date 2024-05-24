import React from "react";
import Background from "./imgs/background.jpg"
import Services from "./Services";
import Balanace from "./Balanace";
import Footer from "./Footer";


function Mainpart() {
  return (
    <div className="main_full">
      <div className="main__f">
        <div className="left_main">
        <span className="sav_on">SAVE AND SECURE</span>
        <h2>
          In <br />
          Bank
        </h2>
     </div>
      <div className="right_main">
        <img width="700px" height="700px"className="main_img"src={Background} alt="" />
         </div>  </div> 
      <Balanace/>
      <Services/>
      <Footer/>
  
     
    </div>
  );
}

export default Mainpart;
