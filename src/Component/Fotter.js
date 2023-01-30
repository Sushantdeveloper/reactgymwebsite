import './fotter.css';
import Map from './Map.js';
import Fot from './Fot';
import F from './F';
// import CountUp from 'react-countup';
import { motion } from "framer-motion"

// import Contactform from './Component/Contactform.js';

import Contactform from './Contactform';


const Fotter=()=>{
    return(
        <motion.div 
        initial={{y:50}}
        whileInView={{y:0}}
    //  transition={{type:'tween',bounce:0.1}}
        className='f1'>
               <div className="Fotter">
        <div className="L-fotter">
            <Contactform/>
            {/* <F/> */}
        </div>
        <div className="R-fotter">
            <Map/>
        </div>

        </div>
        <div className='fot'>
         <Fot/>

        </div>
     
        </motion.div>
    )
}
export default Fotter