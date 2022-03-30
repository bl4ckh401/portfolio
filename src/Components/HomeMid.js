import React from 'react';
import {ReactComponent as Creativity} from '../showcreativity.svg';
function HomeMid() {
    const Available = new Date()
    const month = Available.getMonth()
    const date = Available.getDate()
  return (
  <div className='section_intro'>
      <div className='homemid_main'>
      <div className='svg_contents'>
        <span className='svg_content'>
                <div className="title_active">
                    <div className="availability_active" data-day="" data-month="">
                        <span className="month">
                            <span className="s-03">
                                <span className="data">{date}</span>
                            </span>
                        </span>
                        <span className="info1">
                            <span className="info"><span className="data">{month}</span></span>
                            <span className="info"><span>available for work</span></span>
                        </span>
                    </div>
                    <div>
                        <span className="s-03"><span>show</span></span><br />
                        <span className="s-03"><span>creativity</span></span>
                    </div>
                </div>
        </span>
        </div>
      </div>
      <div className='smallabout'>
        <span className='content'>
            <p className='content'>
            Hi there. My friends call me Pav but for you, Call me Pavin. I'm a Student, front-end developer, troublemaker, aspiring enterprenuer and future chinese speaker.
            I'm intrigued by design, traveling, photography, music, writing, art, fabulous food and good conversations.
            </p>
        </span>
      </div>
      {/* <div className='homemidright_content'>
          <div>
              <button className='btn_expose'>See my previous Work</button>
          </div>
        </div> */}
    </div>
    );
}

export default HomeMid;
