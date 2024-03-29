import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext.js";

const Signup = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const {signUp} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            signUp(email,password);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/6abbb576-106a-4175-a16e-af91cf881736/IN-en-20230116-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="fixed top-0 left-0 bg-black/60 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form onSubmit={(e)=>{handleSubmit(e)}} className="w-full flex flex-col py-4">
                <input onChange={(e)=>setEmail(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder="Email" autoComplete="email" />
                <input onChange={(e)=>setPassword(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder="Password" autoComplete="current-password" />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign Up</button>
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <p><input className="mr-2" type="checkbox"/>Remember Me</p>
                    <p>Need Help?</p>
                </div>
                    <p className="py-4"><span className="text-gray-500">Already Subscribed to Netflix?</span><Link to="/login"> Sign In</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
