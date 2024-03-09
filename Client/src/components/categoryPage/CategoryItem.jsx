import React from 'react'
import categoryTshirt from '../../assets/Home/category_tshirt.svg' 
import tshirt1 from "../../assets/Home/tshirt1.svg";
const CategoryItem = () => {
  return (
    <div>

        <div className='flex flex-col mt-2  gap-3'>

            

        <img className="rounded-lg  "src={tshirt1} alt="" />
            
        <div className="product_name">
            <p className='font-bold'>Gradient Graphic Tshirt</p>
        </div>

        <div className="stars">

        </div>

        <div className="cost">
            <p className='text-xl font-bold'>$145</p>
        </div>
        
        </div>


    </div>
  )
}

export default CategoryItem