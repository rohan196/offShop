import React, {useState} from 'react'
import ProductCard from './ProductCard'
import allProducts from './products.json';

import { useNavigate } from "react-router-dom";
import { Link, useLocation } from 'react-router-dom';


const AllProducts = () => {
    const navigate = useNavigate()
    const location=useLocation();
    const [current, setcurrent]=useState("/");
        
    return (
        <div className='m-6 mb- px-10 py-4'>
            <div className='flex flex-col items-center justify-center m-auto p-4'>
                <h1 className='text-4xl font-bold'>All Products</h1>
            </div>
            <div className='grid mt-8 ml-16 grid-col-3 lg:grid-cols-4 lg:gap-4'>
            {allProducts.map((product) => (
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

export default AllProducts
