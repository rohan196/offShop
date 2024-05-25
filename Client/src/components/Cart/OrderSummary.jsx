import React from 'react';

import {loadStripe} from '@stripe/stripe-js';
import CartItems from './CartItems';


const OrderSummary = ({ subtotal, discount, deliveryFee, total }) => {

  const makePayment = async() => {
    const stripe = await loadStripe("pk_test_51PGXVmSI1Em3Nyx1TsiMebBQ5Ebcv6U7AHB3EpbECt1bZK0BWGZQEmx62B5saN3DzNuTalQktUGXseNKRwnbo9GO00n2rQ5Vno")

    const body = {
      products: CartItems
    }

    const headers = {
      "Content-Type": "application/json"
    }

    const response = await fetch(`${apiURL}/create-checkout-session`,{
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    })

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id
    });

    if(result.error) {
      console.log(result.error);
    }

  }

  return (
    <div className="flex flex-col lg:w-[500px] justify-center p-4 border-2 border-opacity-10 border-black rounded-2xl">
      <div className=''>
        <h1 className='text-4xl font-bold text-center mb-10'>Order Summary</h1>
      </div>
      <div className=''>
        <div className='promo_code flex flex-cols justify-between'>
          <p className='text-xl opacity-60 m-4'>Subtotal</p>
          <p className='text-xl opacity-60 m-4'>${subtotal}</p>
        </div>
        <div className='promo_code flex flex-cols justify-between'>
          <p className='text-xl opacity-60 m-4'>Discount</p>
          <p className='text-xl opacity-60 m-4 text-red-600'>-${discount}</p>
        </div>
        <div className='promo_code flex flex-cols justify-between'>
          <p className='text-xl opacity-60 m-4'>Delivery Fee</p>
          <p className='text-xl opacity-60 m-4'>${deliveryFee}</p>
        </div>
      </div>
      <div className=' border-2 border-opacity-10 border-black m-4'></div>
      <div className='promo_code flex flex-cols justify-between'>
          <p className='text-xl opacity-60 m-4'>Total</p>
          <p className='text-xl opacity-60 m-4'>${total}</p>
        </div>
      <div className="py-2 m-2 mt-4 mb-4 text-center text-white bg-black  rounded-full">
        <button onClick={makePayment}>Checkout</button>
      </div>
    </div>
  );
}

export default OrderSummary;


// import React from 'react'

// const OrderSummary = () => {
//   return (
//     <div className="flex flex-col lg:w-[500px] justify-center p-4 border-2 border-opacity-10 border-black rounded-2xl">
//       <div className=''>
//         <h1 className='text-4xl font-bold text-center mb-10'>Order Summary</h1>
//       </div>
//       <div className=''>
//         <div className='promo_code flex flex-cols justify-between'>
//           <p className='text-xl opacity-60 m-4'>Subtotal</p>
//           <p className='text-xl opacity-60 m-4'>$500</p>
//         </div>
//         <div className='promo_code flex flex-cols justify-between'>
//           <p className='text-xl opacity-60 m-4'>Discount</p>
//           <p className='text-xl opacity-60 m-4 text-red-600'>-$100</p>
//         </div>
//         <div className='promo_code flex flex-cols justify-between'>
//           <p className='text-xl opacity-60 m-4'>Delivery Fee</p>
//           <p className='text-xl opacity-60 m-4'>$15</p>
//         </div>
//       </div>
//       <div className=' border-2 border-opacity-10 border-black m-4'></div>
//       <div>
//         <p className='text-xl m-4 mb-8'>Total</p>
//       </div>
//       <div className="py-2 m-2 mt-4 mb-4 text-center text-white bg-black  rounded-full">
//         <p>Checkout</p>
//       </div>
//     </div>
//   )
// }

// export default OrderSummary
