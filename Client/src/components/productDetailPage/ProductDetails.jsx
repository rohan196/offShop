import React, { useState, useEffect } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { useParams } from "react-router-dom";
import axios from "axios";
import HomeFooter from "../HomeFooter";
import HomeNavbarSection from "../HomeNavbarSection";
import products from "../../components/products.json";

const ProductDetails = () => {
  const { id: productId } = useParams();
  const userId = 1; // Replace with actual user ID

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null); // State to hold the product details

  useEffect(() => {
    // Find the product with the matching productId
    const foundProduct = products.find(item => item.id === parseInt(productId));
    setProduct(foundProduct);
  }, [productId]);

  const addProductToOrder = async (userId, productId, quantity) => {
    try {
      const response = await axios.post('/api/orders/add', { userId, productId, quantity });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Failed to add product to order');
    }
  };

  const handleAddToCart = async () => {
    try {
      const response = await addProductToOrder(userId, productId, quantity);
      console.log("Product added to cart:", response);
      // Show a success message or update the cart state here
    } catch (error) {
      console.error("Failed to add product to cart:", error.message);
      // Handle the error (show error message to user, etc.)
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  return (
    <div className="flex flex-col gap-10">
      <HomeNavbarSection />

      {product && (
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center mb-48 mt-12">
          <div className="m-auto container flex flex-col w-11/12 items-center justify-center lg:ml-[50px] lg:items-end">
            <div className="top flex flex-col lg:flex-row lg:mr-[110px] lg:mt-[0px]">
              <div className="big_image">
                <img className="lg:h-[380px]" src={product.img} alt={product.title} />
              </div>
            </div>
          </div>

          <div className="reviews flex flex-col m-auto w-11/12 lg:px-5">
            <div className="name_stars_price_desc flex flex-col gap-4 border-b border-opacity-10 border-black py-5">
              <h2 className="product name font-bold text-4xl">{product.title}</h2>
              <h3 className="price text-2xl">${product.price}</h3>
              <p className="prod desc text-base lg:w-2/3">{product.description}</p>
            </div>

            <div className="product_sizes border-b border-opacity-10 border-black py-4">
             <div>
               <p className="text-base text-black text-opacity-70 font-semibold">Choose size</p>
             </div>
             <div className="flex mt-4 gap-2">
               <div className="hover:bg-sky-700 hover:text-white px-6 font-semibold p-3 rounded-full bg-[#EFEFEF]">
                 <p>S</p>
               </div>
               <div className="hover:bg-sky-700 hover:text-white px-6 font-semibold p-3 rounded-full bg-[#EFEFEF]">
                 <p>M</p>
               </div>
               <div className="hover:bg-sky-700 hover:text-white px-6 font-semibold p-3 rounded-full bg-[#EFEFEF]">
                 <p>L</p>
               </div>
               <div className="hover:bg-sky-700 hover:text-white px-6 font-semibold p-3 rounded-full bg-[#EFEFEF]">
                 <p>XL</p>
               </div>
             </div>
           </div>

           <div className="add_to_cart border-b border-opacity-10 border-black py-4 flex justify-between gap-2 mb-3 lg:w-2/4">
             <div className="increase_number w-1/4 px-2 bg-[#EFEFEF] rounded-full flex items-center justify-center gap-6 lg:w-[100px]">
               <LuMinus className="hover:bg-sky-700 hover:text-white " onClick={handleDecreaseQuantity} />
               <p>{quantity}</p>
               <LuPlus className="hover:bg-sky-700 hover:text-white " onClick={handleIncreaseQuantity} />
             </div>
             <div className="hover:bg-red-700 hover:text-white cart w-3/4 py-2 text-center text-white bg-black rounded-full" onClick={handleAddToCart}>
               <p>Add to Cart</p>
             </div>
           </div>
         

            {/* Other product details and components */}

          </div>
        </div>
      )}
      <HomeFooter />
    </div>
  );
};

export default ProductDetails;


// import React, { useState } from "react";
// import { LuMinus, LuPlus } from "react-icons/lu";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import HomeFooter from "../HomeFooter";
// import HomeNavbarSection from "../HomeNavbarSection";
// import tshirt1 from "../../assets/Home/tshirt1.svg";

// const ProductDetails = () => {
//   const { id: productId } = useParams();
//   const userId = 1; // Replace with actual user ID
  
//   const [quantity, setQuantity] = useState(1);

//   const addProductToOrder = async (userId, productId, quantity) => {
//     try {
//       const response = await axios.post('/api/orders/add', { userId, productId, quantity });
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response?.data?.error || 'Failed to add product to order');
//     }
//   };

//   const handleAddToCart = async () => {
//     try {
//       const response = await addProductToOrder(userId, productId, quantity);
//       console.log("Product added to cart:", response);
//       // Show a success message or update the cart state here
//     } catch (error) {
//       console.error("Failed to add product to cart:", error.message);
//       // Handle the error (show error message to user, etc.)
//     }
//   };

//   const handleIncreaseQuantity = () => {
//     setQuantity(prevQuantity => prevQuantity + 1);
//   };

//   const handleDecreaseQuantity = () => {
//     setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
//   };

//   return (
//     <div className="flex flex-col gap-10">
//       <HomeNavbarSection />

//       <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center mb-16">
//         <div className="m-auto container flex flex-col w-11/12 items-center justify-center lg:ml-[50px] lg:items-end">
//           <div className="top flex flex-col lg:flex-row lg:mr-[110px] lg:mt-[0px]">
//             <div className="big_image">
//               <img className="lg:h-[380px]" src={tshirt1} alt="T-shirt" />
//             </div>
//             <div className="small_images flex gap-1 lg:flex-col lg:gap-2 lg:ml-2">
//               <img className="w-[150px] rounded-2xl" src={tshirt1} alt="T-shirt" />
//               <img className="w-[150px] rounded-2xl" src={tshirt1} alt="T-shirt" />
//               <img className="w-[150px] rounded-2xl" src={tshirt1} alt="T-shirt" />
//             </div>
//           </div>
//         </div>

//         <div className="reviews flex flex-col m-auto w-11/12 lg:px-5">
//           <div className="name_stars_price_desc flex flex-col gap-4 border-b border-opacity-10 border-black py-5">
//             <h2 className="product name font-bold text-4xl">One Life GRAPHIC TSHIRT</h2>
//             <h3 className="price text-2xl">$260</h3>
//             <p className="prod desc text-base lg:w-2/3">
//               This graphic t-shirt which is perfect for any occasion. Crafted from
//               a soft and breathable fabric, it offers superior comfort and style.
//             </p>
//           </div>

//           {/* <div className="product_colours flex border-opacity-10 flex-col gap-3 border-b border-black py-4">
//             <p className="text-black text-base text-opacity-70">Select colors</p>
//             <div className="flex gap-2">
//               <span className="w-[22px] h-[22px] rounded-full bg-blue-950"></span>
//               <span className="w-[22px] h-[22px] rounded-full bg-blue-950"></span>
//               <span className="w-[22px] h-[22px] rounded-full bg-blue-950"></span>
//             </div>
//           </div> */}

//           <div className="product_sizes border-b border-opacity-10 border-black py-4">
//             <div>
//               <p className="text-base text-black text-opacity-70">Choose size</p>
//             </div>
//             <div className="flex mt-4 gap-2">
//               <div className="px-6 py-3 rounded-full bg-[#EFEFEF]">
//                 <p>S</p>
//               </div>
//               <div className="px-6 py-3 rounded-full bg-[#EFEFEF]">
//                 <p>M</p>
//               </div>
//               <div className="px-6 py-3 rounded-full bg-[#EFEFEF]">
//                 <p>L</p>
//               </div>
//               <div className="px-6 py-3 rounded-full bg-[#EFEFEF]">
//                 <p>XL</p>
//               </div>
//             </div>
//           </div>

//           <div className="add_to_cart border-b border-opacity-10 border-black py-4 flex justify-between gap-2 mb-3 lg:w-2/4">
//             <div className="increase_number w-1/4 px-2 bg-[#EFEFEF] rounded-full flex items-center justify-center gap-6 lg:w-[100px]">
//               <LuMinus onClick={handleDecreaseQuantity} />
//               <p>{quantity}</p>
//               <LuPlus onClick={handleIncreaseQuantity} />
//             </div>
//             <div className="cart w-3/4 py-2 text-center text-white bg-black rounded-full" onClick={handleAddToCart}>
//               <p>Add to Cart</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <HomeFooter />
//     </div>
//   );
// };

// export default ProductDetails;
