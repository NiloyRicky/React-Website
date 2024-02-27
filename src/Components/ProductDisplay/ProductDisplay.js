import React from 'react'
import './ProductDisplay.css';
import  star_icon from '../Assets/star_icon.png'
import  star_dull_icon from '../Assets/star_dull_icon.png'
import { useGlobal } from '../../Context/Context';
import { Link } from 'react-router-dom';


function ProductDisplay(props) {
    const {product}=props;
    const {addToCart}=useGlobal();
    

return (
    <div className='ProductDisplay'>
        <div className='ProductDisplay_left'>
        <div className='ProductDisplay_imgList'>
            <img src={product.image}/>
            <img src={product.image}/>
            <img src={product.image}/>
            <img src={product.image}/>
        </div>
        <div className='productDisplay_img'>
            <img src={product.image}/>
        </div>
        </div>
        <div className='ProductDisplay_right'>
            <h1>{product.name}</h1>
            <div className='ProductDisplay_right_star'>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={ star_dull_icon}/>
                <p>(122)</p>
            </div>
            <div className='productDisplay_rightprices'>
                <div className='old'>${product.old_price}</div>
                <div className='new'>${product.new_price}</div>
            </div>
            <div className='description'>vWR KNITTED SEWETR LKMVFS osijcev ovjaoplksnv l oenveosdv vodf</div>
        <div className='size'>
            <h1>Select Sizes</h1>
            <div className='right_size'> 
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            
            
            </div>
           <Link to={'/Cart'}> <button onClick={()=>{addToCart(product.id);window.scrollTo(0,0)}}> Add to Cart</button></Link>
        </div>
        </div>
    </div>
  )
}

export default ProductDisplay