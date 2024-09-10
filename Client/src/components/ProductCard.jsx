import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ img, title, price, id }) => {

  const addToCart = () => {
    console.log('Added to cart:', { id, title, price });
  }

  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="card mb-8">
        <img src={img} alt={title} className="card-img" />
        <h2 className='font-semibold text-lg px-2 py-2'>{title}</h2>

        <p className='font-semibold text-md px-2 pb-2'>${price}</p>
        <button 
          className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-2 mt-1 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          onClick={addToCart}
          >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
