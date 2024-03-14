import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";

const Filters = () => {
  return (
    <div className="w-11/12 m-auto items-center relative mt-4">
        <div className='border-2 border-gray w-2/12 p-2'>
            <div className='flex'>
                <h2>Filters</h2>
                <IoFilterOutline />
            </div>
            <div className='w-full'>
                <div className='flex justify-around'>
                    T-Shirts
                    <IoIosArrowForward />
                </div>
                <div className='flex justify-around'>
                    Shorts
                    <IoIosArrowForward />
                </div>
                <div className='flex justify-around'>
                    Shirts
                    <IoIosArrowForward />
                </div>
                <div className='flex justify-around'>
                    Hoodie
                    <IoIosArrowForward />
                </div>
                <div className='flex justify-around'>
                    Jeans
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filters
