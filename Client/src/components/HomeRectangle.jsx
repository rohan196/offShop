import React from "react";
import findclothes from "../assets/Home/findclothes.svg";
import branch1 from "../assets/Home/200+.svg"
import branch2 from "../assets/Home/2,000+.svg"
import branch3 from "../assets/Home/30,000+.svg"
import homeImage from '../assets/Home/homeImage.jpg'
import smallVector from '../assets/Home/Vector.svg'
import bigVector  from '../assets/Home/bigVector.svg'
const HomeRectangle = () => {
  
  return (
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:h-[82vh] lg:bg-[#F2F0F1]">

        <div className="top flex flex-col px-3  lg:h-full justify-center lg:w-[700px]   ">
          <div className="top_image w-11/12 py-5 ">
            <img src={findclothes} alt="" />
          </div>
          <p className="py-3 font-normal text-opacity-60  text-sm lg:w-[600px] lg:text-base ">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <div className="shopNowButton  rounded-full bg-black text-white py-3 mt-4 px-4 flex justify-center lg:w-[200px]">
              <h2>Shop Now</h2>
          </div>

            <div className="brandsfields flex flex-col items-center justify-center mt-7 gap-7 lg:flex-row lg:justify-start lg:mt-[50px]   ">
              <div className=" flex flex-row w-4/5  justify-between items-center lg:w-[350px] ">
                  <div className="brandField pr-7 border-r border-black">
                    <img className="w-[60px] lg:w-[100px]" src={branch1} alt="" />
                    <p className="text-xs lg:text-sm lg:pt-1">Internation brands</p>
                  </div>
                  <div className="highqualitproducts ml-3 lg:border-r lg:border-black lg:pr-4">
                    <img  className="w-[80px] lg:w-[120px]"  src={branch2} alt="" />
                    <p className="text-xs lg:text-sm lg:pt-1">High-Quality Products</p>
                  </div>
              </div>
              <div className="happyCustomers ">
                <img  className="w-[90px] lg:w-[140px]" src={branch3} alt="" />
                <p className="text-xslg:text-sm lg:pt-1">Happy customers</p>
              </div>
            </div>
          
          <div>
           </div>
          
          
                 </div>
        <div className="bottom lg:h-full  ">
          <div className="homePhoto relative h-[400px] overflow-hidden mt-4 lg:h-full lg:mt-0  ">
            <img className="w-[40px] absolute top-[140px] left-4 lg:w-[50px] lg:top-[300px]"src={smallVector} alt="" />
            <img className="lg:w-[650px]"src={homeImage} alt="" />
            <img className="w-[70px] right-4 absolute top-10 lg:top-[130px] lg:w-[90px]"src={bigVector} alt="" />
          </div>


        </div>

      </div>
  );
};

export default HomeRectangle;
