import React, { useState } from 'react'
import '../components/booking/booking.css'
import Menu from '../components/booking/bookingdata'
import { Link } from 'react-router-dom' 

const Booking = () => {

  const [data, setData] = useState(Menu);

  const filterResult = (carItem) => {
    const result = Menu.filter((curData) => {
      return curData.category === carItem;
    });

    setData(result);
  }


  return (
    <>
      <div className='bookCont'>
        <div className='bookContH1'>
          <h1 className='bookContH1h1'>Find Your Cars Here</h1>
        </div>
        <div className='bookSearch'>
          <button className='searchBut' onClick={() => setData(Menu)}>All</button>
          <button className='searchBut' onClick={() => filterResult('Hatchback')}>Hatchback</button>
          <button className='searchBut' onClick={() => filterResult('Sedan')}>Sedan</button>
          <button className='searchBut' onClick={() => filterResult('SUV')}>SUV</button>
          <button className='searchBut' onClick={() => filterResult('MUV')}>MUV</button>
        </div>
        {data.map((values) => {
          const { carname, category, image, alt , description} = values;
          return (
            <>
              <div className='mainContainer'>
                <div className='cardContainer'>
                  <div className='imgContainer'>
                    <img src={image} alt={alt} className='imgArea'></img>
                  </div>
                  <div className='textArea'>
                    <div className='carTitle'>
                      <h3>{carname}</h3>
                    </div>
                    <div className='carPara'>
                      <p>{description}</p>
                    </div>
                    <div className='carBut'>
                      <Link to={`/booknow/${carname}`} className='carButLink'>Book Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Booking