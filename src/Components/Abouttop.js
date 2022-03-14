import { useState } from "react";
import { ImageData } from "./ImageData";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
function Abouttop(sliders) {
  const [current, setCurrent] = useState(0)
  const length = sliders.length
  const nextSlide = (event) => {
    setCurrent(current === length - 1 ? 0 : current + 1 )
  }
  console.log(current)

  // if(!Array.isArray(sliders) || sliders.length <= 0){
  //   return null
  // }

  return (
    <div className='carousel_container'>
      <div className='carousel'>
        <div className='slider'>
          <BsArrowLeftCircleFill className='leftarrow' />
          {
            ImageData.map((slide, index) => {
              return(
                <div className='image' key={slide.id}>
                  <img src={slide.image} className='slide' alt='image_alternative'></img>
                </div>
              )
            })
          }
          <BsArrowRightCircleFill className='rightarrow' onClick={nextSlide}/>
        </div>
      </div>
    </div>
  );
}

export default Abouttop;
