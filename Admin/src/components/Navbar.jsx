import React from 'react'

import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import logo from "../assets/OffShopLogoTemp.svg";

const Navbar = () => {
  return (
    <div className="flex justify-center">
        <div className="h-[100vh] w-2/12 bg-slate-300 py-3 px-4 border-b absolute left-0 border-black border-opacity-10 pb-7">
            {/* <RxHamburgerMenu className="lg:hidden " onClick={toggleMenu} /> */}
            <img className=" w-[100px] sm:w-[150px] my-2" src={logo} alt="" />

            <div className="categories justify-center mt-10 items-center gap-5 px-3">
                <h4 className='text-sm font-semibold mb-4'>Menu</h4>
                <ul className="text-lg font-semibold">
                    <li className='my-4'>
                        Dashboard
                    </li>
                    <li className='my-4'>
                        Authentication
                    </li>
                    <li className='my-4'>
                        Apps
                    </li>
                    <li className='my-4'>
                        Pages
                    </li>
                </ul>
            </div>
            </div>
        </div>
  )
}

export default Navbar
