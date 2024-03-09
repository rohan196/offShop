import React from 'react'

const ProductCard = ({ img, title, rating, price }) => (
    <div className='lg:w-[300px] lg:h-[400px] m-2'>
        <div className="image_div w-[250px] h-[225px] p-0">
            <img className="img w-full h-full" src={img} alt="product_image" />
        </div>
        <div className="prod_title m-1">
            <h2 className="text font-bold">{title}</h2>
        </div>
        <div className="prod_rating m-1">
            <p>{rating}</p>
        </div>
        <div className="prod_price m-1">
            <p className='font-bold'>${price}</p>
        </div>
        
    </div>
)
export default ProductCard
