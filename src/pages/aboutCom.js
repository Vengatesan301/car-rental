import React from 'react'
import {Link} from'react-router-dom'
import '../../src/components/aboutCom/aboutCom.css'
import {MdArrowBack} from 'react-icons/md'

const AboutCom = () => {
  return (
    <div className='aboutCompany'>
      <div className='aboutH1'>
        <h1>gigo corp.</h1>

        <div className='aboutPara'>
          <h3>About Business Overview</h3>
          <p>
            Gigo Corp. Car Rentals is a new, independently-owned car rental service in Coimbatore. 
            It will be solely-owned by local entrepreneur Gigo Corp Montgomery. Gigo Corp will provide car rentals to residents of Coimbatore and visitors to the city who need a vehicle for a few days. 
            Gigo Corp. initial fleet of vehicles will include 2 sedans, 2 large SUVs, and 2 luxury vehicles. Through his market research, Gigo Corp found that visitors to the city need a sedan to get them around for a few days so that they don’t have to rely on public transportation. 
            There are also residents who sometimes need to rent a truck for a day or two while they move something large. There is also a demand for people to want to rent a luxury vehicle for a few days so they can use it for a special occasion without having to put a large investment to purchase one of their own.
            <br></br>
            Gigo Corp. Fine Car Rentals will be located near the airport in the central part of town. For now, he will run the business himself and will handle all client communication and management of his fleet.
          </p>
        </div>
        <div className='goHome'>
          <MdArrowBack className='arrowBack'/>
          <Link to='/' className='linkGo'>Go To Home</Link>
        </div>
      </div>

    </div>
  )
}

export default AboutCom