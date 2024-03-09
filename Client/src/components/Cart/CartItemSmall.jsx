import React from 'react'

import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";

const CartItemSmall = ({ img, title, size, color, price }) => (
    <div className='lg:w-[800px] lg:h-[124px] m-2'>
        <div className='flex flex-cols'>
            <div className="cart_item_image lg:w-[124px] lg:h-[124px] p-2">
                <img className="img w-full h-full" src={img} alt="product_image" />
            </div>
            <div className='cart_item_details lg:w-[527px] lg:h-[124px] p-2'>
                <div className="prod_title">
                    <h2 className="text-lg font-bold">{title}</h2>
                </div>
                <div className="prod_rating">
                    <p className='text-sm font-normal'>Size: {size}</p>
                </div>
                <div className="prod_rating">
                    <p className='text-sm font-normal'>Color: {color}</p>
                </div>
                <div className="prod_price">
                    <p className='text-lg font-bold'>${price}</p>
                </div>
            </div>
            <div className='cart_item_Quantity_delete p-2 '>
                {/* <div className='flex flex-row'> */}
                    <div className='mb-6'>
                        <p className='text-center'>Delete</p>
                    </div>
                    <div className="increase_number p-1 bg-[#EFEFEF] rounded-full flex items-center justify-center gap-4 lg:w-[80px] ">
                        <LuMinus />
                        <p>1</p>
                        <LuPlus />
                    </div>
                {/* </div> */}
            </div>
        </div>
        <div className=' border-2 border-opacity-10 border-black'></div>
    </div>
)

export default CartItemSmall
