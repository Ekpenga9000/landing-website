import React from "react";
import "./Footer.css";
import Logo from "../../images/logo.png";
import Group from "../../images/group.png";
import FooterItem from "../footerItems/FooterItem";

const Footer = () => {
  return (
    <div className="footer-main-container">
    <div className="footer-super-container">
      <div className="footer-container">
        <div>
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>
            <img src={Group} alt="" srcset="" />
          </div>
          <div style={{"marginTop":"1em"}}>
            <p>
              We build custom software that allows<br/> businesses to meet their
              needs and <br/>constraints.
            </p>
          </div>
        </div>
        <div>
          <FooterItem
            title={"Company"}
            items={["About us", "Portfolio", "Career", "Contact"]}
          />
        </div>
        <div>
          <FooterItem
            title={"Service"}
            items={[
              "Design",
              "Development",
              "DevOps",
              "Digital Marketing & Strategy",
            ]}
          />
        </div>
        <div>
          <FooterItem
            title={"Social"}
            items={["Twitter", "LinkedIn", "Facebook", "GitHub"]}
          />
        </div>
      </div>
      <div className="divider-container">
        <div className="divider"></div>
      </div>
      <div className="footer-b-container">
        <p>© 2077 Untitled UI. All rights reserved.</p>
      </div>
      </div>
      </div>
  );
};

export default Footer;
