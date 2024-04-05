import React, { useState, useEffect, useContext } from "react";

import topDown from "../assets/Home/topDown.svg";
import magnifier from "../assets/Home/magnifier.svg";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/Home/OffShopLogoTemp.svg";
import Login from "./Login/Login";
import { UserContext } from '../components/Context/UserContext'
import { Link, useLocation } from 'react-router-dom';

const HomeNavbarSection = () => {

  const [menuVisible, setMenuVisible] = useState(false);
  const [inputVisible, setInputVisible] = useState(false);
  const [isloggedin, setIsLoggedin] = useState(false);
  // const [isLogin , setIsLogin] = useState(true);
  // const [isLoginVisible, setIsLoginVisible] = useState(false);
  const { user } = useContext(UserContext)
  const location = useLocation();
  const [current, setcurrent] = useState("/");
  const [isOpen, setIsOpen] = useState(false);

  const backendUrl = "http://localhost:5000";


  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggelSearch = () => {
    setInputVisible(!inputVisible);
  }

  useEffect(() => {
    setcurrent(location.pathname);
  }, [location]);

  useEffect(() => {
    user ? setIsLoggedin(true) : null;
  }, [])


  const toggleuser = () => {
    setIsOpen(!isOpen);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleUserClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // const [selectedOption, setSelectedOption] = useState(null);

  // const handleOptionSelect = (option) => {
  //   setSelectedOption(option);
  // };

  // const options = ['On Sale', 'New Arrivals', 'Brands'];

  return (
    <div className="flex justify-center py-2">
      <div className="w-11/12 smallbox py-3 px-2 flex justify-between items-center relative border-b border-black border-opacity-10 pb-7">
        <RxHamburgerMenu className="lg:hidden " onClick={toggleMenu} />
        <img className=" w-[100px] mr-2 sm:w-[200px]" src={logo} alt="" />

        <div className={`categories  justify-center items-center absolute top-10 bg-white px-3 ${menuVisible ? 'flex' : 'hidden'}  lg:flex lg:relative lg:top-0 `}>
          <ul className=" flex flex-col gap-2 lg:flex-row lg:gap-7 xl:gap-9">

            <li className=" items-center flex ">
              <div className="shop rounded-lg text-sm text-center text-bold">
                <Link to="Home/Browsedressstyle" className={" " + (current == "/Home/Browsedressstyle" ? "text-blue-500" : "")}> Shop </Link>
              </div>
              <img src={topDown} alt="" />
            </li>
            <li className="">On Sale</li>
            <li>New Arrivals</li>

            <li>Brands</li>
          </ul>
        </div>

        <div className="flex justify-between items-center gap-[20px]">
          <div className="Search flex items-center sm:relative text-black focus-within:text-gray-800 gap-3 mr-[25px] ">
            <IoIosSearch onClick={toggelSearch} className="  absolute ml-2" />
            <input
              className={` ${inputVisible ? 'flex' : 'hidden'}  w-[100px] sm:w-[350px]  border-black pl-7 rounded-xl focus:outline-none font-semibold lg:flex`}
              type="text"
              placeholder="Search for products..."
              name=""
              id=""
            />
          </div>

          {!isloggedin
            &&
            <div className="login w-[60px] rounded-lg text-sm bg-black text-center text-white p-1 pb-2 m-auto text-bold">
              <Link to="/login" className={" " + (current == "/login" ? "text-blue-500" : "")}> Login </Link>
            </div>
          }
          <div className="cart">
            <Link to="/cart" className={" " + (current == "/cart" ? "text-blue-500" : "")}> <FiShoppingCart /> </Link>
          </div>


          {isloggedin
            &&
            <div className="user">
              <FaRegUser onClick={handleUserClick} />
              {isDropdownOpen && (
                <div className="dropdown absolute border-2 p-1">
                  Hi, username
                </div>
              )}
            </div>
          }

        </div>



      </div>
    </div>
  );
};

export default HomeNavbarSection;
