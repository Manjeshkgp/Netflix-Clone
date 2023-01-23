import React from "react";
import SavedMovies from "../components/SavedMovies";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="h-[400px] w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/6abbb576-106a-4175-a16e-af91cf881736/IN-en-20230116-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute p-4 top-[20%] md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedMovies/>
    </>
  );
};

export default Account;
