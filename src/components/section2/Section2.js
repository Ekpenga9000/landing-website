import React from 'react';
import Button from '../button/Button';
import "./Section2.css"

const Section2 = ({headerText, body1, body2, btnTitle, ImgLinks=[]}) => {
  return (
      <div className='section2-container'>
          <div className='about'>
              <h1>{ headerText }</h1>
              <p>{body1}</p>
              <p>{ body2 }</p>
              <Button title={btnTitle} background={"#09063C"} borderLine={"white"} />
          </div>
          <div className='img-super-container'>
              {
                  ImgLinks.map((img, index) => (
                    <div className='img-container'>
                        <img src={img} alt={ `number ${index}` } />
                    </div>
                  ))
              }
          </div>
    </div>
  )
}

export default Section2