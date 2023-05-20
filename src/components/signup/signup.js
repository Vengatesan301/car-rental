import React from 'react'
import './signup.css'

const Signup = () => {
  return (
    <div className='signupCont' id='signup'>
    <div className='signH1'>
    <h1>Hurray ! Signup Now</h1>
    </div>
    <div className='formCont'>  
    <form>
    <div className="containerForm">
        <div className='para'>
    <p>Please fill this form to create an account</p>
    </div>
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Your Email Id" name="email" id="email" required/>

    <label for="password"><b>Password</b></label>
    <input type="text" placeholder="Enter Your Password" name="email" id="email" required/>

    <label for="confirm"><b>Confirm Password</b></label>
    <input type="text" placeholder="Enter Your Password Again" name="email" id="email" required/>
    
    <button type="submit" class="registerbtn">Register</button>
    </div>
    </form>
    </div>
    </div>
  )
}

export default Signup