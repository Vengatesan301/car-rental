import React,{useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/infosection'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Services from '../components/services/services'
import Footer from '../components/footer/footer'
import Booknow from '../components/booknow/booknow'
import Signup from '../components/signup/signup'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
    <Navbar toggle={toggle}></Navbar>
    <HeroSection></HeroSection>
    <InfoSection />
    <Booknow></Booknow>
    <Services></Services>
    <Signup></Signup>
    <Footer></Footer>
    </>
  )
}

export default Home