import React from 'react'
import './Css/Login.css'
function Login() {
  return (
    <div className='log_in'>
      <div className='login_container'>
      <h1>Sign Up</h1> 
      <div className='login_fields'>
        <input type='text' placeholder='Your Name'/>
        <input type='email' placeholder='Your email id'/>
        <input type='password' placeholder='Your password'/>
      </div>
      <button>Continue</button>
      <p className='signup'>Already have an account?<span>Log in</span></p>
      <div className='signup_agree'>
      <input type='checkbox' name='' id='' />
      <p>By Continuing,I agree to the terms & conditions</p>
      </div>
      </div>
    </div>
  )
}

export default Login