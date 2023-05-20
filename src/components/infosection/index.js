import React from 'react'
import { Link } from 'react-router-dom'
import './info.css'
import img1 from '../../images/svg4.svg'

const InfoSection = () => {
    return (
        <>
            <div className='InfoContainer' id='about'>
                <div className='Infowrapper'>
                    <div className='InfoRow'>
                        <div className='Column1'>
                            <div className='TextWrapper'>
                                <p className='TopLine'>For Any Need</p>
                                <h1>At Door Step Pickup</h1>
                                <div className='BtnWrap'>
                                    <Link className='Button' to='/aboutcompany'>Know More</Link>
                                </div>
                            </div>
                        </div>
                        <div className='Column2'>
                            <div className='ImgWrap'>
                                <img src={img1} alt='svgImage' className='ImgWrapImg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoSection