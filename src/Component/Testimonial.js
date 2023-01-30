import './Testimonial.css';
import React,{useState} from 'react';
import image5 from'../resource/angle-left.svg';
import image6 from'../resource/angle-right.svg';
import { motion } from "framer-motion"

import { TestimonialsData } from './TestimonialsData';
const Testimonial=()=>{
const [selected,setSelected]=useState(0);
const tlength=TestimonialsData.length;

    return(
<motion.div
 initial={{y:50}}
 whileInView={{y:0}}

 transition={{type:'tween',bounce:0.1}}
  className='testimonial' id='testimonials'>
<div className='left-t'>
    <span> Testimonials</span>
    <span className='H3'>What they
    </span>
    <span > say About us
    </span>
  <div className='l-t'>


  <span style={{fontFamily:"cursive"  }}>
        {TestimonialsData[selected].review}
    </span>
   
    <span>
    <span style={{color: 'white'}}>
        {TestimonialsData[selected].name}
    </span>{"  "}
        {TestimonialsData[selected].status}
    </span>

  </div>
    </div>  
    <div className='right-t'>
        <div></div>
        <div></div>

    <img src={TestimonialsData[selected].image} alt=''/>
<div className='arr'>
   <img
   onClick={()=>{
    selected===0
    ? setSelected(tlength-1)
    :setSelected((prev)=>prev-1)
   }}
   src={image5} alt=''/>
   <img
onClick={()=>{
    selected===tlength-1
    ? setSelected(0)
    :setSelected((prev)=>prev+1)
   }}
    src={image6} alt=''/>

</div>
</div>
</motion.div>

    )
};
export default Testimonial