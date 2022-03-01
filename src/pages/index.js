import React, {useState} from 'react'
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
    </>
  )
}

export default Home