import React,{useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '..//Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useGlobal } from '../../Context/Context'
function Navbar() {
    const{getTotalCartitems}=useGlobal();
    
    const[menu,setMenu]=useState('Shop')
  return (
    <div className='navbar'>
        <div className='nav_logo'>
            <img src={logo}/>
            <p>Shopper Stop</p>
        </div>
        <ul className='nav_menu'>
            <li onClick={()=>setMenu('Shop')}><Link to={'/'}>Shop{menu=='Shop'?<hr/>:''}</Link></li>
            <li onClick={()=>setMenu('Women')}><Link to={'/Women'}>Women{menu=='Women'?<hr/>:''}</Link></li>
            <li onClick={()=>setMenu('Men')}><Link to={'/Men'}>Men{menu=='Men'?<hr/>:''}</Link></li>
            <li onClick={()=>setMenu('Kids')}><Link to={'/Kids'}>Kids{menu=='Kids'?<hr/>:''}</Link></li>

        </ul>
        <div className='login_cart'>
        <Link to={'/Login'}><button>Log in</button></Link>
        <Link to={'/Cart'}> <img src={cart_icon}/></Link>
            <div className='cart_count'>{getTotalCartitems()}</div>
        </div>

    </div>
  )
}

export default Navbar