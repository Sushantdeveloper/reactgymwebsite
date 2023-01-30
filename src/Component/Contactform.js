import './contact.css';
import { useState } from 'react';
import React, { useRef } from 'react';
import { motion } from "framer-motion"

const Contactform=()=>{
    const [inputs, setInputs] = useState({});

   
   
    return(
       <div className='contact' id='contact'>
        <h1>Contact us</h1>
        <form  action='https://formspree.io/f/xrgvelkp' method='POST'>
                <input type='text' 
                name='name' placeholder='Name'  
         autoComplete='off'
         required/>
             
                <input type='email'
                 name='email'
                  placeholder='E-mail' 
                  autoComplete='off'
                  required
              />
              
                <input type='number'
                name='Phoneno' 
                placeholder='Phone no' 
                autoComplete='off'
                required 
          />
          
            <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            class="submit-form" type='submit' > Send</motion.button>
        </form>
    </div>
    )
}
export default Contactform;