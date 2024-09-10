import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from '../UI/Slider';

const Filters = () => {

    return (
        <div className="items-center relative w-full">
            <div className='border-2 border-gray p-2'>
                <div className='w-full'>
                    <div className='flex'>
                        <h2 className='mr-6'>Filters</h2>
                        <IoFilterOutline />
                    </div>
                </div>
                <div className='categories'>
                    <div className='my-2'>
                        <h2 className='font-semibold'>Colors</h2>
                        <div className='flex'>
                        
                        </div>
                    </div>
                    <div className='my-2'>
                        <h2 className='font-semibold'>Range</h2>
                        <RangeSlider />
                    </div>
                    <div className='my-2'>
                        <h2 className='font-semibold'>Brands</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters
