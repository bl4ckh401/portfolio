import React from 'react';
import { FooterData } from './footerData';

function Footer() {
  return (
    <div className='footer_main'>
      {FooterData.map((item) => {
        return (
          <div className='footer_content' key={item.id}>
            <a className='footer_link' href={item.path}>
              <p>{item.title}</p>
            </a>
          </div>
        )
      })}
      <div className='footer content'>
        <h4>2022</h4>
      </div>
    </div>
  );
}

export default Footer;
