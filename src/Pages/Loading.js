import React from 'react';
import { BallTriangle } from  'react-loader-spinner'

function Loading() {
  return (
    <div className='loading_main'>
        <img src='freesvgshop_com.png' className='homemid_img' alt='but first coffee'></img>
        <div>
            <BallTriangle color="gold" height={80} width={80} />
        </div>
    </div>
  );
}

export default Loading;
