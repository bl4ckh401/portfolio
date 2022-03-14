import Abouttop from "../Components/Abouttop";
import AboutMid from "../Components/AboutMid";


function About(props) {
    const imageData = [];

  return (
    <div className='About'>
        {/* <div className='abouttop'>
            <Abouttop sliders={imageData}/> 
        </div> */}
        <div className='aboutme'>
            <AboutMid />
        </div>
    </div>);
}

export default About;

