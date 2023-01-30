import './Third.css';
import gym1 from '../resource/gym1.jpg';
import gym2 from '../resource/gym2.jpg';
import gym3 from '../resource/Logo2.jpg';
import check from '../resource/check.svg';
import { motion } from "framer-motion"


const Third=()=>{
    return(
        <motion.div 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{type:'tween',bounce:0.1}}
        className='Reasons' id='reasons'>
             <div className='L-reason'>
             <img src= {gym2} alt=''/>
             <img src= {gym1} alt=''/>

             <img src= {gym3} alt=''/>
             {/* <img src= {gym3} alt=''/> */}
             </div>
             <div className='R-reason'>
                <span className='t1'>Some Reasons</span>
                <div className='r-name'>
                <span className='h1'>Why</span>
                <span className='t2'> choose us</span>
             </div>
             <div className='details-r'>
             <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}><img src= {check} alt=''/><span>OVER 50+ EXPERT COACHES</span></motion.div>
              <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}><img src= {check} alt=''/><span> TRAINS SMATER AND FASTER THAN BEFORE</span></motion.div>
             {/* <div><img src= {check} alt=''/><span>1 FREE PROGRAM FOR NEW MEMBER</span></div> */}
             <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}><img src= {check} alt=''/><span>DIET COUNSELLING</span></motion.div>
             <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}><img src= {check} alt=''/><span>YOGA & BOXING</span></motion.div>
                          <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}><img src= {check} alt=''/><span>AEROBIC TRAININGS</span></motion.div>
                          <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}><img src= {check} alt=''/><span>CARDIO TRAININGS</span></motion.div>

<motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}><img src= {check} alt=''/><span>CROSS FUNCTIONAL TRAININGS</span></motion.div>
                          <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}><img src= {check} alt=''/><span>CUSTOMIZED WORKOUT PLANS</span></motion.div>
                          <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}><img src= {check} alt=''/><span>SUPPLEMENT COUNSELLING</span></motion.div>

             {/* <div><img src= {check} alt=''/><span>RELIABLES PARTNERS</span></div> */}
                {/* <div className='afton'>Powered By AFTON</div> */}
             </div>
             </div>
            
        </motion.div>
    )
}
export default Third 