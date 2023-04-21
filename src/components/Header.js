import React from "react";
import bean from "./../images/bean.png"
import header from "./../images/header.png";




function Header(){
  const headerStyles = {
    textAlign: "center",
    padding: 30,
    margin: 5,
    backgroundImage:`url(${bean})`,
    backgroundSize: "15%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left top 35%",
    color: "black",
    boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
    
  }




  return (
    <React.Fragment>
      <div style={headerStyles}>
      
      <img src={header} alt="header img" />


      </div>
      
      
    </React.Fragment>
  );
}


export default Header;