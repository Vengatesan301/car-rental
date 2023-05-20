import React from 'react'
import './services.css';
import Icon1 from '../../images/svg11.svg';
import Icon2 from '../../images/svg9.svg'
import Icon3 from '../../images/svg12.svg'

const Services = () => {
  return (
    <>
    <div className='ServicesContainer' id="services">
        <h1>Our Services</h1>

        <div className='ServicesWrapper'>
            <div className='ServicesCard'>
                <img className='ServicesIcon' src={Icon1} alt="img"></img>
                <h2>Trust Worthy</h2>
                <p>No.1 In This Business So Far</p>
            </div>
       
            <div className='ServicesCard'>
                <img className='ServicesIcon' src={Icon3} alt="img"></img>
                <h2>Payment Method</h2>
                <p>All Types Of Payment Are Accepted</p>
            </div>
      
            <div className='ServicesCard'>
                <img className='ServicesIcon' src={Icon2} alt="img"></img>
                <h2>Customer Support</h2>
                <p>24/7 Customer Service</p>
            </div>
        </div> 
    </div>
    </>
  )
}

export default Services