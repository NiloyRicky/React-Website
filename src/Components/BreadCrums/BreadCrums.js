import React from 'react'
import './BreadCrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png'
function BreadCrums(props) {
    const{product}=props
  return (
    <div className='BreadCrums'>
        HOME <img src={arrow_icon}/> SHOP<img src={arrow_icon}/> {product.category}<img src={arrow_icon}/> 
        {product.name}
    </div>
  )
}

export default BreadCrums