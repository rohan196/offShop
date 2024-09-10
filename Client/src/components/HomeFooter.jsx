import React from 'react'
import { IoIosMail } from "react-icons/io";
import logo from "../assets/Home/OffShopLogoTemp.svg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import pay  from '../assets/Home/pay.png'
// import { TfiEmail } from "react-icons/tfi";

const HomeFooter = () => {
  return (
    <div className="relative  w-full bg-[#F2F0F1]">
        <div className='static bg-white w-full h-[90px]'>
            <div className='absolute top-0 mt-0 m-auto left-12 right-12 w-10/12 h-[180px] pl-10 pr-10 bg-black rounded-2xl p-5'>
                <div className='flex flex-row'>
                    <div className='flex-1 justify-between'>
                        <h1 className="text-white text-4xl font-bold">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                    </div>
                    <div className='flex-1'>
                        {/* <div className='m-auto w-[349px] m-1'> */}
                        <div className='w-[349px] m-auto'>
                        {/* <TfiEmail size={15}/> */}
                            <IoIosMail />
                            <input 
                            className=' w-full  border-black pl-5 rounded-2xl focus:outline-none p-2'
                            placeholder="Enter your email address"/>
                        </div>
                        <div className="bg-white w-[349px] m-auto mt-2 rounded-2xl p-2 pl-5 items-center">
                            <button className='w-full justify-center text-center'>Subscribe to Newsletter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='p-36 pb-5 w-full'>
            <div className='flex flex-cols pb-16 border-b border-black border-opacity-10 '>
            <div className='flex-1 p-0'>
                <img className=" h-[35px]" src={logo} alt="" />
                <p className='mt-4 text-base font-normal'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <div className='SocialLogos flex flex-rows mt-6 gap-6'>
                    <FaTwitter size={28} />
                    <FaFacebook size={28} />  
                    <FaInstagram size={28} />
                    <FaGithub size={28} />
                </div>                 
            </div>
            <div className='flex-auto ml-36'>
                <div className='flex flex-cols gap-10'>
                    <div className='flex-1 flex flex-col gap-[10px] justify-between '>
                            <h1 className='font-bold'>Company</h1>
                            <h2>About</h2>
                            <h2>Features</h2>
                            <h2>Works</h2>
                            <h2>Career</h2>
                    </div>
                    <div className='flex-1 flex flex-col gap-[10px] justify-between'>
                            <div><h1 className='font-bold'>Help</h1></div>
                            <h2>Customer Support</h2>
                            <h2>Delivery Details</h2>
                            <h2>Terms & Conditions</h2>
                            <h2>Privacy Policy</h2>
                    </div>
                    <div className='flex-1 flex flex-col gap-[10px] justify-between'>
                            <div><h1 className='font-bold'>FAQ</h1></div>
                            <h2>Account</h2>
                            <h2>Manage Deliveries</h2>
                            <h2>Orders</h2>
                            <h2>Payments</h2>
                    </div>
                    <div className='flex-1 flex flex-col gap-[10px] justify-between'>
                            <div><h1 className='font-bold'>Resources</h1></div>
                            <h2>Free eBooks</h2>
                            <h2>Development Tutorial</h2>
                            <h2>How to - Blog</h2>
                            <h2>Youtube Playlist</h2>
                    </div>  
                </div>
            </div>
            </div>
            <div className='flex flex-cols justify-between'>
                <div className="mt-4 pl-2 text-sm">
                    Shop.co © 2000-2023, All Rights Reserved
                </div>
                <div className='mt-4 pl-2 text-sm'>
                    <div><img src={pay}/></div>
                </div>
            </div>
        </div>  
        <div>

        </div>     
    </div>
  )
}

export default HomeFooter
