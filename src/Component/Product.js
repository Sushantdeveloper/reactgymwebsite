import'./Product.css'
const Product=(props)=>{
  
    return(
        <div className='prd-container'>
        <div className='item'>
{/* <div className='img'>{props.img}</div> */}
<div className="detail">
<div className='pname'>{props.pname}</div>
<div className='price'>{props.price}</div>
<button type='button' id='changevalue' > click here</button>
</div>
</div>
</div>
    )
}
export default Product