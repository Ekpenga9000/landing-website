import React from "react";
import "./Section3.css";
import Description from "../description/Description";

const Section3 = ({ headerText, body, desc = [], desc2 = [], marginTop }) => {
  return (
    <div className="section3-container">
      <div className="about">
        <h1>{headerText}</h1>
        <p>{body}</p>
      </div>
      <div>
        <div className="details-container">
          {desc.map((item) => (
            <div key={item.id}>
              <Description
                Img={item.img}
                imgLabel={item.imglabel}
                header={item.header}
                body={item.body}
                width={item.width}
              />
            </div>
          ))}
        </div>
        <div className="details-container" style={{"marginTop": marginTop}}>
          {desc2.map((item) => (
            <div key={item.id}>
              <Description
                Img={item.img}
                imgLabel={item.imglabel}
                header={item.header}
                body={item.body}
                width={item.width}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
