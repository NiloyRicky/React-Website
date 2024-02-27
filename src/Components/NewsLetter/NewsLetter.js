import React from 'react'
import './NewsLetter.css'
function NewsLetter() {
  return (
    <div className='news_letter'>
        <h1>Get Exclusive Offers on your Email</h1>
        <p>Subscribe to our NewsLetter & stay updated!</p>
        <div>
            <input type='text' placeholder='Enter your Email'/>
            <button>Subscibe</button>
        </div>
    </div>
  )
}

export default NewsLetter