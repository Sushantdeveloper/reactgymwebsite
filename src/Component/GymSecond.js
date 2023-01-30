import { useState } from 'react';
import './GymSecond.css';
import {Program} from'./Program';
import { motion } from "framer-motion"

import Programs from './Programs';
const GymSecond=()=>{
  const [isOpen, setIsOpen] = useState(false);

   const variants = {
      visible: (custom) => ({
        opacity: 1,
        transition: { delay: custom * 0.5 }
      })
    }
    
   return(
      <div className='Programs' id='program'>
              <div className='Programs-Heading'>
    <motion.span custom={0} animate="visible" variants={variants} 
                 className='h1'>Explore our</motion.span>
    <motion.span custom={1} animate="visible" variants={variants} 
                >Programs</motion.span>
    <motion.span custom={2} animate="visible" variants={variants} 
                 className='h1'>to shape you</motion.span>
             </div>

             <motion.div
                initial={{y:100}}
                whileInView={{y:0}}
             transition={{type:'tween',bounce:0.1}}

               className='plist'>
             <Programs heading={Program[0].heading}  detail={Program[0].details}/>
    <Programs   heading={Program[1].heading}  detail={Program[1].details}/>
    <Programs  heading={Program[2].heading}  detail={Program[2].details}/>
    <Programs    heading={Program[3].heading} detail={Program[3].details}/>
             </motion.div>
    
             </div>
    )
}
export default GymSecond