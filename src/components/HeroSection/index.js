import React from 'react'
import { useState } from 'react'
import Image from '../../images/slider-3.jpg'
import { Button } from '../buttonelement'
import { HeroContainer , HeroBg , ImgBg , HeroContent , HeroH1 , HeroP , HeroBtnWrapper , ArrowForward , ArrowRight} from './heroelements'


const HeroSection = () => {

  const [hover , setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer id='home'>
        <HeroBg>
            <ImgBg src={Image} type='image/jpg'></ImgBg>
        </HeroBg>
        <HeroContent>
         <HeroH1>Car Rental Made Easy</HeroH1>
         <HeroP>Sign Up for a New Account and receive upto 10% discount.</HeroP>
         <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>Get Started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
         </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection