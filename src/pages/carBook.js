import React from 'react'
import { useParams } from 'react-router-dom';
import Menu from '../components/booking/bookingdata';
import '../../src/components/booking/carBook.css'

const CarBook = () => {
    const {slug} = useParams();
    const singleCarItem = Menu.find((item) => item.carname === slug);
  return (
    <>
    <div className='carBookingFil'>
        <div className='carBgImage'>
            <img src={singleCarItem.bgImg} alt={singleCarItem.altBg} className="carBgImg"></img>
        </div>
    </div>
    </>
  )
}

export default CarBook