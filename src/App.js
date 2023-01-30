
import './App.css';
import GymSecond from './Component/GymSecond';
import Third from './Component/Third';
import Plans from './Component/Plans';
import Testimonial from './Component/Testimonial';
import Fotter from './Component/Fotter';
import F from './Component/F'


import { motion } from "framer-motion";

function App() {
  const transition={type:'spring',durition:1}
 
  return (
  <motion.div
  initial={{bottom:"100px"}}
  whileInView={{bottom:'1px'}} 
  className='applist'>

    <F/>

    <GymSecond/>

    <Third/>
    <hr/>
    <Plans/>

    <Testimonial/>

    <Fotter/> 
   </motion.div>

  );
}

export default App;
