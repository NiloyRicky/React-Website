import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
function Footer() {
  return (
    <div className='footer'>
         <div className='footer_logo'>
            <img src={footer_logo} alt='logo'/>
            <p>Shopper Stop</p>
         </div>
         <ul className='foooter_link'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
         </ul>
         <div className='footer_social_icons'>
         <div className='footer_icons_container'>
            <img src={instagram_icon}/>
            </div>

            <div className='footer_icons_container'>
            <img src={pintester_icon}/>
            </div>
            <div className='footer_icons_container'>
            <img src={whatsapp_icon}/>
            </div>
       </div>  
         </div>
    
  )
}

export default Footer
