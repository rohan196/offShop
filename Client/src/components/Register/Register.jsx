import React, { useState, useEffect } from "react";

import logoBig from "../../assets/OffShop.png";

import { Link, useLocation } from 'react-router-dom';

const Register = () => {
    const location=useLocation();
    const [current,setcurrent]=useState("/");

    const [userData , setUserData] = useState({
        username: "",
        email : "",
        password : "",
    })

    const handleChange = (e, field) => {
      setUserData((prev)=>({
        ...prev , [field]:e.target.value
      }))
    }


    const handleRegister = (e) => {
      console.log(userData)
    }
    
    useEffect(()=>{
        setcurrent(location.pathname);
       //  console.log(current);
       },[location]);
       // };
  return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
          <div className="md:w-1/3 max-w-sm">
            <img
              src={logoBig}
              alt="off Shop" 
              className='h-[350px] rounded-3xl' />
          </div>
          <div className="md:w-1/3 max-w-sm bg-slate-300 rounded-3xl p-6">
            <div className="text-center items-center">
              {/* <h1 className="m-4 text-2xl">Hello</h1> */}
              <h1 className="m-4 mb-6 text-2xl">Sign Up</h1>
              {/* <button
                type="button"
                className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </button>
              <button
                type="button"
                className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button> */}
            </div>
            {/* <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
            </div> */}
            <input onChange={(e)=>{handleChange(e , 'username')}} value={userData.username} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl my-2" type="text" placeholder="Your Name" />
            <input onChange={(e)=>{handleChange(e, 'email')}} value={userData.email} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl my-2" type="text" placeholder="Email Address" />
            <input onChange={(e)=>{handleChange(e, 'password')}} value={userData.password} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl my-2" type="password" placeholder="Phone Number" />
            <input onChange={(e)=>{handleChange(e, 'password')}} value={userData.password} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl my-2" type="password" placeholder="Set Your Password" />
            {/* <div className="mt-4 flex justify-between font-semibold text-sm">
              <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <input className="mr-1" type="checkbox" />
                <span>Remember Me</span>
              </label>
              <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
            </div> */}
            <div className="text-center">
              <button onClick={handleRegister} className="mt-6 mb-6 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase text-xs tracking-wider rounded-xl" type="submit">Register</button>
            </div>
            <div className="font-semibold text-sm text-slate-500 text-center mb-4">
              Already a Member? 
            {/* <a className="text-red-600 hover:underline hover:underline-offset-4" href="#">Login</a> */}
            <Link to = "/Login" className={" "+(current=="/Login"?"text-red-600 hover:underline hover:underline-offset-4":"")}> Login </Link>
            </div>
          </div>
        </section>
      )
};

export default Register;
