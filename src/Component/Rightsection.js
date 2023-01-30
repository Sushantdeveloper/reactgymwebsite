import'./Right.css';
import GYM from '../resource/GYM.jfif';
import hert from '../resource/heart.jpg';
import calories from '../resource/calories.webp';
import { motion } from "framer-motion"

const Rightsection=()=>{

    return(
        // right section 
        <div className="Gym-R"> 
        <div className="Gym-button"> 
        <motion.button
     
         type="button" >Contact us</motion.button>
        </div>
        {/* heart rate section  */}
        <motion.div
        className="Gym-hert"
        initial={{x:0}}
        whileInView={{x:100,rotate:360}}
        // animate={{x:100,rotate:360}}
        transition={{type:'tween',bounce:0.8}}> 
        <img src= {hert} alt=''/>
        <span>Heart-Rate:</span>
              <span>116ppm</span>
        </motion.div>
        <motion.div 
         whileHover={{ scale: 1, rotate: 360 }}
         whileTap={{
           scale: 0.,
           rotate: 360,
           borderRadius: "100%",
    // type:'tween',bounce:0.1

         }}className="Gym-img"> 
        <img  className='gym' src= {GYM} alt=''/>
        </motion.div>
        {/* calories section  */}
        <motion.div className="Gym-calories"
    initial={{x:100}}
    whileInView={{x:-100}}
    // animate={{x:100,rotate:360}}
    transition={{type:'tween',bounce:0.1}}> 
        
          
        <img src= {calories} alt=''/>
        <div>
        <span> Calouries Burned :</span>
              <span>116 kcal</span>
              </div>
              </motion.div>
        </div>
    )
}
export default Rightsection