import React from 'react'
import tshirt1 from "../../assets/Home/tshirt1.svg"

import CardItemsSmall from './CartItemSmall'

const CartItems = () => {
  return (
    <div className='border-2 border-opacity-10 border-black rounded-2xl'>
      <CardItemsSmall 
        img={tshirt1}
        title='Gradient Graphic T-shirt'
        size='Large'
        color='white'
        price="100"
      />
      <CardItemsSmall 
        img={tshirt1}
        title='Gradient Graphic T-shirt'
        size='Large'
        color='white'
        price="100"
      />
      <CardItemsSmall 
        img={tshirt1}
        title='Gradient Graphic T-shirt'
        size='Large'
        color='white'
        price="100"
      />
    </div>
  )
}

export default CartItems
