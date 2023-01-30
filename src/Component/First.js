const First=()=>{
    return(
<div className="First-1">
<div className="g-l">
<Header/>
<div className="m-Head">
<motion.div custom={0} animate="visible" variants={variants} className='h1'>the </motion.div>
            <motion.div custom={1} animate="visible" variants={variants} className='h2'> gour's</motion.div>
            <motion.div custom={2} animate="visible" variants={variants}className='h3'>gym</motion.div>

</div>
<div className="Gym-para">
 <span>Powered By AFTON </span>
        </div>
<div className="G-symbol">
    
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
</div>
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
<div></div>
</div>
    )
}
export default First