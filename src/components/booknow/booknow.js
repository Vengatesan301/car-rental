import React from 'react'
import './booknow.css'
import svgImg from '../../images/svg7.svg'
import { Link } from 'react-router-dom'
import Booking from '../../pages/booking'


const Booknow = () => {
    return (
        <div className='TextContainer' id='booknow'>
            <div className='Textwrapper'>
                <p>Alright ! Plan Your Trip With Us</p>
                <div className='ImageCont'>
                    <img src={svgImg} alt='bookNow' className='bookImg'></img>
                    <h1 className='bookNow'>Book Now</h1>
                </div>
                <div className='btnWrap'>
                <Link className='book' to='/booking' element={<Booking/>}>Click Me !</Link>
                </div>
            </div>
        </div>
    )
}

export default Booknow