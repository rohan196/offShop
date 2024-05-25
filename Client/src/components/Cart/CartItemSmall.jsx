import React, { useState } from 'react';
import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";

const CartItemSmall = ({ img, title, price }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };

    return (
        <div className='lg:w-[800px] lg:h-[124px] m-2'>
            <div className='flex flex-cols'>
                <div className="cart_item_image lg:w-[124px] lg:h-[124px] p-2">
                    <img className="img w-full h-full" src={img} alt="product_image" />
                </div>
                <div className='cart_item_details lg:w-[527px] lg:h-[124px] p-2'>
                    <div className="prod_title">
                        <h2 className="text-lg font-bold">{title}</h2>
                    </div>
                    <div className="prod_price">
                        <p className='text-lg font-bold mt-12'>${price}</p>
                    </div>
                </div>
                <div className='cart_item_Quantity_delete p-2'>
                    <div className='mb-6'>
                        <p className='text-center'>Delete</p>
                    </div>
                    <div>
                        <div className="increase_number p-1 bg-[#EFEFEF] rounded-full flex items-center justify-center gap-4 lg:w-[80px]">
                            <button onClick={handleDecrease}>
                                <LuMinus />
                            </button>
                            <p>{quantity}</p>
                            <button onClick={handleIncrease}>
                                <LuPlus />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-2 border-opacity-10 border-black'></div>
        </div>
    );
};

export default CartItemSmall;


// import React, { useState } from 'react';
// import { LuMinus } from "react-icons/lu";
// import { LuPlus } from "react-icons/lu";

// const CartItemSmall = ({ img, title, size, color, price }) => {
//     const [quantity, setQuantity] = useState(1);

//     const handleIncrease = () => {
//         setQuantity(prevQuantity => prevQuantity + 1);
//     };

//     const handleDecrease = () => {
//         setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
//     };

//     return (
//         <div className='lg:w-[800px] lg:h-[124px] m-2'>
//             <div className='flex flex-cols'>
//                 <div className="cart_item_image lg:w-[124px] lg:h-[124px] p-2">
//                     <img className="img w-full h-full" src={img} alt="product_image" />
//                 </div>
//                 <div className='cart_item_details lg:w-[527px] lg:h-[124px] p-2'>
//                     <div className="prod_title">
//                         <h2 className="text-lg font-bold">{title}</h2>
//                     </div>
//                     {/* <div className="prod_rating">
//                         <p className='text-sm font-normal'>Size: {size}</p>
//                     </div>
//                     <div className="prod_rating">
//                         <p className='text-sm font-normal'>Color: {color}</p>
//                     </div> */}
//                     <div className="prod_price">
//                         <p className='text-lg font-bold mt-12'>${price}</p>
//                     </div>
//                 </div>
//                 {/* <div className='cart_item_Quantity_delete p-2'>
//                     <div className='mb-6'>
//                         <p className='text-center'>Delete</p>
//                     </div>
//                     <div>
//                         <div className="increase_number p-1 bg-[#EFEFEF] rounded-full flex items-center justify-center gap-4 lg:w-[80px]">
//                             <button onClick={handleDecrease}>
//                                 <LuMinus />
//                             </button>
//                             <p>{quantity}</p>
//                             <button onClick={handleIncrease}>
//                                 <LuPlus />
//                             </button>
//                         </div>
//                     </div>
//                 </div> */}
//                  <div className='flex flex-col items-end'>
//         <input 
//           type='number' 
//           value={quantity} 
//           min='1' 
//           onChange={(e) => onQuantityChange(parseInt(e.target.value, 10))} 
//           className='w-12 text-center border rounded'
//         />
//         <button onClick={onDelete} className='text-red-600 mt-2'>Delete</button>
//       </div>
//             </div>
//             <div className='border-2 border-opacity-10 border-black'></div>
//         </div>
//     );
// };

// export default CartItemSmall;
