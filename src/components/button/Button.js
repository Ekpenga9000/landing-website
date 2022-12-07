import React from 'react';
import './Button.css';

const Button = ({title,background, borderLine}) => {
  const border = {
    "white": "1px solid #fff",
    "none" : "none"
  }

  return (
    <button className='btn' style={{
      "background": background,
      "border": border[borderLine]
      }}>
      {title}
    </button>
  )
}

export default Button