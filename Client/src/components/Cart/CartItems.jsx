import React from 'react';
import products from './cartItems.json';
import CartItemSmall from './CartItemSmall';

const CartItems = ({ updateQuantity, deleteItem }) => {
  return (
    <div className='border-2 border-opacity-10 border-black rounded-2xl'>
      {products.map((product, index) => (
        <CartItemSmall 
          key={index}
          img={product.img}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          onQuantityChange={(quantity) => updateQuantity(index, quantity)}
          onDelete={() => deleteItem(index)}
        />
      ))}
    </div>
  );
}

export default CartItems;


// import React from 'react';
// import products from './cartItems.json'; // Adjust the path as necessary
// import CartItemSmall from './CartItemSmall';

// const CartItems = () => {
//   return (
//     <div className='border-2 border-opacity-10 border-black rounded-2xl'>
//       {products.map((product, index) => (
//         <CartItemSmall 
//           key={index}
//           img={product.img}
//           title={product.title}
//           // size={product.size}
//           // color={product.color}
//           price={product.price}
//         />
//       ))}
//     </div>
//   );
// }

// export default CartItems;
