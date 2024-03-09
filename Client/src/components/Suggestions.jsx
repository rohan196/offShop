import React from 'react'
import moreLikeThis from "../assets/Home/moreLikeThis.svg"
import ProductCard from './ProductCard'
import tshirt1 from "../assets/Home/tshirt1.svg"

const Suggestions = () => {
  return (
    <div className='m-6 h-[500px]'>
        <div className='flex flex-col items-center justify-center m-auto p-4'>
            <img src={moreLikeThis} 
            alt=""
            className='w-[350px]' 
            />
        </div>
        <div className='flex flex-cols m-auto justify-center'>
            <ProductCard 
                img={tshirt1}
                title="Good T-Shirt Number 1"
                rating="4/5" 
                price="500"
            />
            <ProductCard 
                img={tshirt1}
                title="Good T-Shirt Number 2"
                rating="4/5" 
                price="300"
            />
            <ProductCard 
                img={tshirt1}
                title="Good T-Shirt Number 3"
                rating="4/5" 
                price="400"
            />
            <ProductCard 
                img={tshirt1}
                title="Good T-Shirt Number 4"
                rating="4/5" 
                price="500"
            />
        </div>
    </div>
  )
}

export default Suggestions
