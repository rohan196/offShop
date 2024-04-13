import React from 'react'

import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const handleUserClick = () => {

  };

const Header = () => {
  return (
    <div className="h-[60px] bg-slate-300 border border-opacity-20   border-black border-1">
        <div className="Search">
            <div className="flex items-center text-black focus-within:text-gray-800 absolute my-3 mx-8">
                <IoIosSearch className="absolute ml-3" />
                <input
                className="w-[250px] border-black pl-10 py-1 rounded-xl focus:outline-none font-semibold lg:flex"
                type="text"
                placeholder="Search for products..."
                name=""
                id=""
                />
            </div>
        </div>
        <div className="user right-0 absolute mx-8 my-5">
            <div>
            <FaRegUser onClick={handleUserClick} />
            </div>
        </div>
    </div>
  )
}

export default Header
