import React, {useState} from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { HeaderData } from './headerData';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";


function Header() {

  const [ click, setClick ] = useState(false)
  const [ isHovered, setisHovered ] = useState(false)


  const handleClick = (event) => {
    event.preventDefault()
    setClick(!click)
  }
  const handleHover = (event) => {
    event.preventDefault()
    setisHovered(true)
  }

  return (
    <div className='main_nav'>
      <div className='logo_nav'>
      <ul className={click ? "nav-options active" : "nav-options"}>
        {HeaderData.map((item) => {
        return(
              <Link to={item.path} onMouseEnter={handleHover} className={isHovered ? "nav_link after":"nav_link"} onMouseLeave={handleHover}>
                <li className="option mobile-option">{item.title}</li>
              </Link>
        )
        })}
      </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <AiOutlineClose className="menu-icon"/>
              ) : (
              <GiHamburgerMenu className="menu-icon" />
            )}
      </div>
    </div>
    );
}

export default Header;
