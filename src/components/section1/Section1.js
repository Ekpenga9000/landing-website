import React from 'react';
import "./Section1.css";
import Button from "../button/Button";

const Section1 = ({header, body, btnTitle}) => {
  return (
      <div className='head-content'>
      <h1>{ header }</h1>
      <p>{ body }</p>
          <Button background={"none"} borderLine={ "white" } title={btnTitle} />

    </div>
  )
}

export default Section1