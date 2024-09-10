import React from "react";

import crossImg from "../assets/Home/Frame.svg";
import { IoMdClose } from "react-icons/io";

const HomeDiscountSection = () => {
  return (
    <>
      <div className="bg-black  relative py-[9px]  flex justify-center items-center ">
        <div className="flex flex-col gap-1 sm:flex-row items-center ">

        {/* <marquee className="text-white text-sm  font-normal  ">
          Sign up now and get 20% off your first order{" "}
        </marquee> */}
        <p className="text-white text-sm  font-normal  ">
          Sign up now and get 20% off your first order{" "}
        </p>
          <span className="text-white text-sm font-medium  underline">
            Sign Up now
          </span>
        </div>

        <div className="absolute  sm:right-10 right-2  ">
        <IoMdClose className="text-white " size={27}/>

        </div>
      </div>
    </>
  );
};

export default HomeDiscountSection;
