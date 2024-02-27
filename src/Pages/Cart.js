import React from 'react'
import { useGlobal } from '../Context/Context'
import './Css/Login.css';

import { RiChatDeleteLine } from "react-icons/ri";
function Cart() {
  const {all_product,cartItems,removeFromCart,getCartAmount}=useGlobal();

  return (
    <div className='Cart'>
      <div className='CartItem_format_main'>
      <p>Products</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>
      </div>
      <hr/>
      {
        all_product.map((e)=>{
if(cartItems[e.id]>0){
  return <div>
        <div className='cartItem_format CartItem_format_main'>
          <img src={e.image}/>
          <p>{e.name}</p>
          <p>${e.new_price}</p>
          <button className='cartItem_quantity'>{cartItems[e.id]}</button>
          <p>{e.new_price*cartItems[e.id]}</p>
          <RiChatDeleteLine style={{width:'15px',
    cursor: 'pointer',
    margin:'0 40px'}} onClick={()=>{removeFromCart(e.id)}}/>
        </div>
        <hr/>
      </div>
}
return null;
        })
      }
      <div className='cartItems_down'>
      <div className='cartItems_total'>
        <h1>Cart Total</h1>
        <div>
          <div className='cartItems_totalItem'>
            <p>Subtotal</p>
            <p>${getCartAmount()}</p>
          </div>
          <hr/>
          <div className='cartItems_totalItem'>
            <p>Shipping Fees</p>
            <p>Free</p>
          </div>
          <hr/>
          <div className='cartItems_totalItem'>
            <h3>Total</h3>
            <h3>${getCartAmount()}</h3>
          </div>
          <button>Proceed to Check Out</button>
        </div>

        </div> 
      </div>
    </div>
  )
}

export default Cart