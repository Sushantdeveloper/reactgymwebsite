// import GymSecond from "./GymSecond";
import { motion } from "framer-motion"
    
import { useState } from 'react';
import { AnimatePresence } from "framer-motion"
import arrow from '../resource/arrow-right-long.svg';
const Programs=(props)=>{
    const [selectedId, setSelectedId] = useState(false)

    
    return(
        <motion.div
        className='Programs-list'
        transition={{layout:{duration:1,type:"spring"}}}
        layout onClick={() => setSelectedId(!selectedId)}
        style={{borderRadius:"1rem",alignItems:"center",height:"auto",fontSize:"1rem"}}
        >
            
             
             <motion.span layout="size"
             >{props.heading}</motion.span>
             <AnimatePresence>
             {selectedId &&(
                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1}}
                exit={{opicity:2}}
                >
             <p>{props.detail}</p>
             </motion.div>
             )}
             </AnimatePresence>

             <motion.div className="arrow">
             <img src= {arrow} alt=''/>
             </motion.div>

             </motion.div>

    )
 
// {Programs.map(item => (
//   <motion.div  className='Programs-list' layoutId={item.id} onClick={() => setSelectedId(item.id)}>
//     <motion.h5>{props.heading}</motion.h5>
//     <motion.div className="arrow">
//             <img src= {arrow} alt=''/>
//              </motion.div>
//   </motion.div>
// ))}

// <AnimatePresence>
//   {selectedId && (
//     <motion.div layoutId={selectedId}>
//       <motion.h5>{props.heading}</motion.h5>
//       <motion.h2>{props.details}</motion.h2>
//       <motion.button onClick={() => setSelectedId(null)} />
//     </motion.div>
//   )}
// </AnimatePresence>
}
export default Programs
 