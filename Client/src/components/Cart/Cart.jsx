import React, { useState, useEffect } from 'react';
import products from './cartItems.json'; // Adjust the path as necessary
import CartItems from './CartItems';
import OrderSummary from './OrderSummary';

const CartPage = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(products);
    }, []);

    const updateQuantity = (index, quantity) => {
        const newCart = [...cart];
        newCart[index].quantity = quantity;
        setCart(newCart);
    };

    const deleteItem = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    };

    const calculateSubtotal = () => {
        return cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    };

    const calculateDiscount = () => {
        // Assuming a flat $100 discount for simplicity
        return 100;
    };

    const calculateDeliveryFee = () => {
        // Assuming a flat $15 delivery fee for simplicity
        return 15;
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const discount = calculateDiscount();
        const deliveryFee = calculateDeliveryFee();
        return subtotal - discount + deliveryFee;
    };

    return (
        <div className="flex justify-center py-2 pb-14">
            <div className='w-11/12 py-3 px-2 justify-between items-center'>
                <div className="w-full mb-6">
                    <h1 className='text-4xl font-bold'>Your Cart</h1>
                </div>
                <div className='flex flex-cols justify-between gap-5'>
                    <CartItems cart={cart} updateQuantity={updateQuantity} deleteItem={deleteItem} />
                    <OrderSummary
                        subtotal={calculateSubtotal()}
                        discount={calculateDiscount()}
                        deliveryFee={calculateDeliveryFee()}
                        total={calculateTotal()}
                    />
                </div>
            </div>
        </div>
    );
};

export default CartPage;

// import React from 'react'

// import OrderSummary from './OrderSummary'
// import CardItems from './CartItems'

// const Cart = () => {
//     return (
//         <div className="flex justify-center py-2 pb-14">
//             <div className='w-11/12 py-3 px-2 justify-between items-center'>
//                 <div className="w-full mb-6">
//                     <h1 className='text-4xl font-bold'>Your Cart</h1>
//                 </div>
//                 <div className='flex flex-cols justify-between gap-5'>
//                     <CardItems />
//                     <OrderSummary />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Cart
