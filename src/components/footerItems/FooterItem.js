import React from 'react';
import "./FooterItem.css";

const FooterItem = ({title, items=[]}) => {
  return (
      <div className='footerItems-container'>
          <p>{title}</p>
          
          <ul>
              {
                  items.map(item => (
                      <li key={item}>{ item }</li>
                  ))
              }
          </ul>
    </div>
  )
}

export default FooterItem