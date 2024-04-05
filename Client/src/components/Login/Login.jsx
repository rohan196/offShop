import React, { useState, useEffect, useContext } from "react";

import logoBig from "../../assets/OffShop.png";

// import { Link, useLocation } from 'react-router-dom';

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../Context/UserContext";

const backendUrl = "http://localhost:5000";

const Login = () => {
  const navigate = useNavigate();
  // const islogin = useState(false)
  const { updateUser } = useContext(UserContext);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e, field) => {
    setLoginData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

       await axios.post(`${backendUrl}/api/signin`, loginData)
       .then((res)=>{
         console.log(res.data.user);
       })
       .catch((err)=>{
         console.log(err.message)
       })

      console.log("Login successful frorm front end");
      updateUser("working"); // Update user context
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };


  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src={logoBig}
          alt="off Shop"
          className='h-[350px] rounded-3xl' />
      </div>
      <div className="md:w-1/3 max-w-sm bg-slate-300 rounded-3xl p-6 h-[350px]">
        <div className="text-center items-center">
          <h1 className="m-4 text-2xl">Welcome Back !!!</h1>
          <h1 className="m-4 mb-6 text-2xl">Log In</h1>
        </div>


          <input onChange={(e) => { handleChange(e, 'username') }} value={loginData.username} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl" type="text" placeholder="Username" required />
        <input onChange={(e) => { handleChange(e, 'password') }} value={loginData.password} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-4" type="password" placeholder="Password" required />

        <div className="text-center">
          <button onClick={handleLogin} className="mt-6 mb-6 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase text-xs tracking-wider rounded-xl" type="submit">Login</button>
        </div>
        <div className="font-semibold text-sm text-slate-500 text-center mb-4">
          Don't have an account?
            {/* <Link to="/register" className={" " + (current == "/register" ? "text-red-600 hover:underline hover:underline-offset-4" : "")}> Register </Link> */}
            <Link to="/register" className="text-red-600 hover:underline hover:underline-offset-4"> Register </Link>
        </div>
      </div>
    </section>
  )
};

export default Login;
