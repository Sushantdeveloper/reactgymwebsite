import React, { useState } from "react";
import './Header.css';
import Logo from '../resource/Logo.png';
import { motion } from "framer-motion"
import {Link} from 'react-scroll';
import Bars from "../resource/bar.png";
const Header=(props)=>{
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
    return(
        <div className="header-f" id='header'>
  <img src= {Logo} alt='' className="logo"/>
  {(menuOpened===false && mobile===true)? (
  <div
  style={{ backgroundColor: "var(--appColor)", padding: "0.5rem", borderRadius: "5px" }}
  onClick={() => setMenuOpened(true)}
>
  <img
    src={Bars}
    alt="bars"
    style={{ width: "1.5rem", height: "1.5rem" }}
  />
</div>
) :(
<motion.ul
 variants={container}
 initial="hidden"
 animate="show"
  className='header-menu'>
    {/* <motion.li variants={item} size={50} 
     >Home</motion.li>
    <motion.li variants={item} size={50} 
     >Programs</motion.li>
    <motion.li variants={item} size={50} 
    >Why us</motion.li>
    <motion.li variants={item} size={50} 
  >Plans</motion.li>
    <motion.li variants={item} size={50} 
    >Testimonials</motion.li> */}
 <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="program"
              spy={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              spy={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
</motion.ul>
)}

             </div>
    )
}
export default Header