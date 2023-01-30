import './GymFirst.css';
import Header from './Header.js'
import Rightsection from './Rightsection';
import { motion } from "framer-motion"

const GymFirst=()=>{
    const variants = {
        visible: (custom) => ({
          opacity: 1,
          transition: { delay: custom * 0.2 }
        })
      }
    const transition={type:'spring',durition:3}
return(
     <div className="Gym-F">
<div className="blur-h"></div>

           <div className="Gym-L">
        
           <Header/>
           {/* this is the add heading */}
           <div className="best-add">

            <motion.div
            initial={{left:'350px'}}
            whileInView={{left:'10px'}}
            transition={{...transition,type:'tween'}}
            ></motion.div>
            <span>The best fitness club in the town</span>
           </div>
                    {/* main heading of the website */}
<div className="main-heading">

<motion.div custom={0} animate="visible" variants={variants} className='h1'>the </motion.div>
            <motion.div custom={1} animate="visible" variants={variants} className='h2'> gour's</motion.div>
            <motion.div custom={2} animate="visible" variants={variants}className='h3'>gym</motion.div>

            <div className="Gym-para">
 <span>Powered By AFTON </span>
        </div>
           </div>
           <motion.div className="Gym-symbol"
          // initial={{x:-300}}
          // whileInView={{x:130}}
        
          // transition={{type:'tween',bounce:0.1}}
              > 
    
          <div>
          <span>+20</span>
              <span>Expert coaches</span>
          </div>
          <div>
          <span>+980</span>
              <span>members joined</span>
          </div>
          <div>
          <span>+120</span>
              <span>fitness Programs</span>
          </div>
        </motion.div>
        

           
        <motion.div 
     initial={{y:50,x:100}}
     whileInView={{y:0,x:100}}
   
     transition={{type:'tween',bounce:0.1}}
        className="Gym-btn"> 
        
        <motion.button 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }} type="button" >Contact us</motion.button>
        <motion.button className='b1'
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }} type="button" >Contact us</motion.button>
        </motion.div>
       

           </div>


           <div className="Gym-R"> 
          <Rightsection/>
 </div>
      
             </div>
    )
}
export default GymFirst