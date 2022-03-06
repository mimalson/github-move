import React, {useState} from 'react'
import HeroSection from '../component/HeroSection'
import InfoSection from '../component/InfoSection'
import {homeObjOne, homeObjThree, homeObjTwo} from '../component/InfoSection/Data'
import Navbar from '../component/Navbar'
import Sidebar from '../component/sidebar'

const Home = () => {
    const [isOpen,seIsOpen] = useState(false)
    
    const toggle =() => {
        seIsOpen(!isOpen)
    }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default Home