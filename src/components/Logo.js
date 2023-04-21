import React from "react";
import Logo from "./../images/Logo.png";



function Logoimg(){
  return (
    <React.Fragment>
      <img class='logo' src={Logo} alt="GG logo" />
    </React.Fragment>
  );
}


export default Logoimg;