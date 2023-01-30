import './fot.css'
import insta from'../resource/Instagram_icon.webp'
import Fb from'../resource/fb.webp';
import { motion } from "framer-motion"

import twitter from'../resource/twiter.png'


const Fot=()=>{
    return(
<div className='fot'>
    <hr/>
    <motion.div 
      initial={{y:50}}
      whileInView={{y:0}}
  //  transition={{type:'tween',bounce:0.1}}
   className='fotter'>
    <motion.a
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.8 }} href='#'><img src={twitter} alt=""/></motion.a> 
    <motion.a
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.8 }}
 href='#'> <img src={insta} alt=""/></motion.a> 
        <motion.a
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.8 }} href='#'><img src={Fb} alt=""/></motion.a>  
    </motion.div>
    <div className='blur blur-f-1'></div>
    <div className='blur blur-f-2'></div>

</div>
    )
}
export default Fot