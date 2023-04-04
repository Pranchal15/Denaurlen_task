import React from 'react'
import './Signin.css'

export default function Signin() {
  return (
    <div className='container'>
        <p className='title'>Enter your details</p>
        <form className='form'>
  
    <input className='inputbox' type="text" placeholder="Enter your name" />
    
    <input className='inputbox' type="text" placeholder="Enter your username" />

  <input type="submit" className='submit-button' value="Submit" />
</form>
        </div>
  )
}
