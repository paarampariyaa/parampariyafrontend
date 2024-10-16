import React from 'react'
import Header1 from '../Components/Header/Header1'
import Header2 from '../Components/Header/Header2'
import CheckoutPage from '../Components/Checkout'
import Footer from '../Components/Footer'

const Billingpage = () => {
  return (
    <div className='pt-[90px] md:pt-[140px]'>
       <Header1/>
       {/* <Header2/> */}
       <CheckoutPage/>
       <Footer/>
    </div>
  )
}

export default Billingpage
