import React from 'react'

import HomeDiscountSection from './HomeDiscountSection'
import HomeNavbarSection from './HomeNavbarSection'
import Cart from './Cart/Cart'
import HomeFooter from './HomeFooter'


const CartRouter = () => {
  return (
    <>
        <HomeDiscountSection/>
        <HomeNavbarSection/> 
        <Cart/>
        <HomeFooter/>
    </>
  )
}

export default CartRouter
