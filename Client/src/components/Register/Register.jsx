import React, { useState, useEffect } from "react";

import logoBig from "../../assets/OffShop.png";
import axios from 'axios';
const backendUrl = 'http://localhost:5000';


import { Link, useLocation } from 'react-router-dom';

const Register = () => {
    const location=useLocation();
    const [current,setcurrent]=useState("/");

    const [userData , setUserData] = useState({
      username: "",
        firstname: "",
        middlename: "",
        lastname: "",
        email : "",
        password : "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phoneNo: "",
    })

    const handleChange = (e, field) => {
      setUserData((prev)=>({
        ...prev , [field]:e.target.value
      }))
    }



    const handleRegister = async (e) => {
      console.log(userData)
      try {
        // const url = `${backendUrl}/api/signup`
        // console.log(url)
        const response = await axios.post(`${backendUrl}/api/signup`,{
          userData
        })
        console.log('Registration successful:', response.data);


      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error('Server responded with an error:', error.response.data.message);
          console.error('Status code:', error.response.status);
        } 
      }
      

      console.log(userData)
    }
    
    useEffect(()=>{
        setcurrent(location.pathname);
       //  console.log(current);
       },[location]);
       // };
  return (
    <div>
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
            
          </div>
          
          <div className="flex gap-4">
            <div>
              <label htmlFor="address">User Details</label>
              <input onChange={(e)=>{handleChange(e , 'username')}} value={userData.username} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl my-2" type="text" placeholder="User Name" />
              <input onChange={(e)=>{handleChange(e , 'firstname')}} value={userData.firstname} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl my-2" type="text" placeholder="First Name" />
              <input onChange={(e)=>{handleChange(e , 'middlename')}} value={userData.middlename} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl my-2" type="text" placeholder="Middle Name" />
              <input onChange={(e)=>{handleChange(e , 'lastname')}} value={userData.lastname} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl my-2" type="text" placeholder="Last Name" />
              <input onChange={(e)=>{handleChange(e, 'email')}} value={userData.email} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl my-2" type="text" placeholder="Email Address" />
              <input onChange={(e)=>{handleChange(e, 'password')}} value={userData.password} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl my-2" type="password" placeholder="Password" />
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <input onChange={(e)=>{handleChange(e , 'street')}} value={userData.street} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl my-2" type="text" placeholder="Street" />
                <input onChange={(e)=>{handleChange(e , 'city')}} value={userData.city} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl my-2" type="text" placeholder="City" />
                <input onChange={(e)=>{handleChange(e , 'state')}} value={userData.state} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl my-2" type="text" placeholder="State" />
                <input onChange={(e)=>{handleChange(e , 'zipcode')}} value={userData.zipcode} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl my-2" type="text" placeholder="Zip Code" />
                <input onChange={(e)=>{handleChange(e , 'country')}} value={userData.country} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl my-2" type="text" placeholder="Country" />
              <input onChange={(e)=>{handleChange(e, 'phoneNo')}} value={userData.phoneNo} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl my-2" type="number" placeholder="Phone Number" />
            </div>
          </div>


          
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
    </div>
      )
};

export default Register;
