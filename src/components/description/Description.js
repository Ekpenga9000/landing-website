import React from 'react';
import "./Description.css";

const Description = ({Img, imgLabel, header, body, width}) => {
  return (
      <div className='description-container' style={{"width" : width}}>
          <div>
              <img src={Img} alt={ imgLabel } />
          </div>
        
        <h3>{ header }</h3>
    
          <p>{ body }</p>
    </div>
  )
}

export default Description