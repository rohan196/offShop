import React from 'react'
import moreLikeThis from "../assets/Home/moreLikeThis.svg"
import ProductCard from './ProductCard'
import suggestions from './suggestions.json';

const Suggestions = () => {

  return (
    <div className='m-6 mb- px-10 py-4'>
        <div className='flex flex-col items-center justify-center m-auto p-4'>
            <img src={moreLikeThis} 
            alt=""
            className='w-[500px]' 
            />
        </div>
        <div className='grid mt-8 ml-16 grid-col-3 lg:grid-cols-4 lg:gap-4'>
        {suggestions.map((product) => (
        <ProductCard
          key={product.id}
          img={product.img}
          title={product.title}
          rating={product.rating}
          price={product.price}
          id={product.id}
        />
      ))}         
        </div>
    </div>
  )
}

export default Suggestions
