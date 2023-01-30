import './Plans.css';
import Psection from './Psection';
import { motion } from "framer-motion"

const Plans=()=>{
    const transition={type:'spring',durition:3};

    return(
        <div className='Plans' id='plans'>
          <motion.div
           
className='Plans-heading'>
            <motion.span 
         initial={{x:-200}}
         whileInView={{x:0}}
       
        //  transition={{type:'tween',bounce:0.1}}
      
            className='H1'>READY TO START </motion.span>
            <motion.span 
            
            initial={{x:-200}}
            whileInView={{x:0}}
            //  transition={{type:'tween',bounce:0.1}}
            className='H2' > YOUR JOURNEY</motion.span>
            <motion.span 
             initial={{x:-200}}
             whileInView={{x:0}}
           
             transition={{type:'tween',bounce:0.1}}
            className='H3'>NOW WITH US</motion.span>
        </motion.div>
<div className='p-section'>
    <Psection/>
</div>

        </div>
    )
}
export default Plans