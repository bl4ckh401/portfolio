import React from 'react';
import { FooterData } from './footerData';

function Footer() {
  return (
    <div className='footer_main'>
      {FooterData.map((item) => {
        return(
          <div className='footer_content' key={item.id}>
            <a className='footer_link' href={item.path}>
              <div className='footer_title'>
              <p>{item.title}</p>
            </div>
            </a>
         </div>
        )
      })}
        <div>
          <div className='footer_rights'>
            <h4>2022</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
