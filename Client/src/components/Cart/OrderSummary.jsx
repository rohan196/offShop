import React from 'react'

const OrderSummary = () => {
  return (
    <div className="flex flex-col lg:w-[550px] justify-center p-4 border-2 border-opacity-10 border-black rounded-2xl">
      <div className=''>
        <h1 className='text-2xl font-bold text-center'>Order Summary</h1>
      </div>
      <div className=''>
        <div className='promo_code flex flex-cols justify-between'>
          <p className='text-xl opacity-60 m-2'>Subtotal</p>
          <p className='text-xl opacity-60 m-2'>$500</p>
        </div>
        <div className='promo_code flex flex-cols justify-between'>
          <p className='text-xl opacity-60 m-2'>Discount</p>
          <p className='text-xl opacity-60 m-2 text-red-600'>-$100</p>
        </div>
        <div className='promo_code flex flex-cols justify-between'>
          <p className='text-xl opacity-60 m-2 mb-4'>Delivery Fee</p>
          <p className='text-xl opacity-60 m-2 mb-4'>$15</p>
        </div>
      </div>
      <div className=' border-2 border-opacity-10 border-black'></div>
      <div>
        <p className='text-xl m-2 mt-4 mb-4'>Total</p>
      </div>
      <div className='promo_code flex flex-cols justify-between'>
        <div className='m-2 w-full'>
          <input type="text" placeholder="Apply Promo Code" className='py-2 px-6 bg-gray-300 w-full rounded-full'></input>
        </div>
        <div className='py-2 px-6 m-2 text-center text-white bg-black rounded-full'>
          <button>Apply</button>
        </div>
      </div>
      <div className="py-2 m-2 mt-4 mb-4 text-center text-white bg-black  rounded-full">
        <p>Checkout</p>
      </div>
    </div>
  )
}

export default OrderSummary
