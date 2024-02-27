import React from 'react'
import './Offer.css'
import exclusive_image from '../Assets/exclusive_image.png'
function Offer() {
  return (
    <div className='offer'>
         <div className='offer_left'>
          <h1>Exclusive!</h1>
          <h1>Offers for You</h1>
          <p>Only on Best Seller Product</p>
      <button>Check  now</button>
         </div>
         <div className='offer_right'>
  <img src={exclusive_image} alt='offer'/>
         </div>
    </div>
  )
}

export default Offer