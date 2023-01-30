import'./p.css'
import { motion } from "framer-motion"
import {Link} from 'react-scroll';

const Psection = () => {
  return (
    <motion.div 
    initial={{y:80}}
    whileInView={{y:0}}
    transition={{type:'tween',bounce:0.1}}
    className="p-section">
      <div className="p">
      <div className="p1">

        <div>MONTHLY PLAN</div>
        <span>Rs:</span>
        <span>1,200</span></div>
        <ul className='menu'>
    <li>2 hours of exercises per day</li>
    <li>Free consultation to coaches</li>
    <li>Access to the Community</li>
    <li>ADDITIONAL FEE: Personal Trainer</li>

</ul>
        <div className="p1-btn">
        <Link to = 'contact'>
        <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }} type="button">Contact us</motion.button>
        </Link>
        </div>
      </div>
      <div className="p">
      <div className="p1">

      <div>3 MONTHS PREMIUM PLAN</div>
        <span>Rs:</span>
        <span>3,000</span>
        </div>
        <ul className='menu'>
        <li>3 hours of exercises per day</li>
    <li>Free consultation to coaches</li>
    <li>Access to the Community</li>
    <li>ADDITIONAL FEE: Personal Trainer</li>
</ul>
        <div className="p1-btn">
        <Link to = 'contact'>
        <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }} type="button">Contact us</motion.button>
        </Link>
        </div>
      </div>
      <div className="p">
      <div className="p1">

        <div> YEARLY ADVANCED PLAN</div>
        <span>Rs.</span>
        <span>11,000</span>
        </div>
        <ul className='menu'>
        <li>25 hours of exercises</li>
    <li>Free consultation to coaches</li>
    <li>Access to the Community</li>
    <li>ADDITIONAL FEE: Personal Trainer</li>
</ul>
        <div className="p1-btn">
        <Link to = 'contact'>
        <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }} type="button">Contact us</motion.button>
        </Link>
        </div>
      </div>
    </motion.div>
  );
};
export default Psection;
