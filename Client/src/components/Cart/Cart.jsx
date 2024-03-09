import React from 'react'

import OrderSummary from './OrderSummary'
import CardItems from './CartItems'

const Cart = () => {
    return (
        <div className="flex justify-center py-2">
            <div className='w-11/12 py-3 px-2 justify-between items-center'>
                <div className="w-full mb-6">
                    <h1 className='text-4xl font-bold'>Your Cart</h1>
                </div>
                <div className='flex flex-cols justify-between gap-5'>
                    <CardItems />
                    <OrderSummary />
                </div>
            </div>
        </div>
    )
}

export default Cart
