import React from 'react'
import Header1 from '../Components/Header/Header1'
import Header2 from '../Components/Header/Header2'
import CartPage from '../Components/Cartpage'
import Footer from '../Components/Footer'

const Cartpage = () => {
  return (
    <div className='pt-[90px] md:pt-[140px]'>
      <Header1/>
      {/* <Header2/> */}
      <CartPage/>
      <Footer/>
    </div> 
  )
}

export default Cartpage
