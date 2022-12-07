import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import Button from "../button/Button";

const Navbar = ({ logo, imgAlt, navItems = [] }) => {
  const [display, setDisplay] = useState("none");

  const activeMenu = () => {
    if (display === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };
    return (
      <>
    <nav className="navbar-super-container">
      <div className="logo-navigation-group">
        <div className="logo">
          <img src={logo} alt={imgAlt} />
        </div>
        <ul className="desktop-view">
          {navItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="button-group desktop-view">
        <Button title={"Our work"} background={"none"} borderLine={"white"} />
        <Button
          title={"Get in Touch"}
          background={"#85BC24"}
          borderLine={"none"}
        />
      </div>
      <div className="mobile-view">
        <GiHamburgerMenu onClick={activeMenu} />
      </div>
      </nav>
       <div  className="navbar-dropdown" style={{"display": display}}>
       <div>
         <ul>
           {navItems.map((item) => (
             <li key={item}>{item}</li>
           ))}
                    </ul>
        <div className="btn-group-container">
         <div className="button-group">
           <Button
             title={"Our work"}
             background={"none"}
             borderLine={"white"}
           />
           <Button
             title={"Get in Touch"}
             background={"#85BC24"}
             borderLine={"none"}
           />
                        </div>
                        </div>
       </div>
            </div>
            </>
  );
};

export default Navbar;
