import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.js";
import {AiOutlineClose} from "react-icons/ai";

const SavedMovies = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const movieRef = doc(db,"users",`${user?.email}`)
  const deleteMovie = async(movieId) => {
    try {
    const result = movies.filter((item)=>item.id!==movieId);
    await updateDoc(movieRef,{
        savedMovies:result
    });
    } catch (err) {
        console.log(err)
    }
  }

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedMovies);
    });
  }, [user?.email]);
  return (
    <>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={() => {
            slideLeft();
          }}
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0"
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies?.map((singleMovie, index) => (
              <div key={index} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                <img
                  className="w-full block"
                  src={`https://image.tmdb.org/t/p/w500/${singleMovie?.img}`}
                  alt={singleMovie.title}
                />
                <div className="absolute hover:bg-black/70 hover:opacity-100 opacity-0 text-white top-0 left-0 w-full h-full">
                  <p className="font-bold flex justify-center items-center text-center h-full text-xs md:text-sm">
                    {singleMovie?.title}
                  </p>
                  <p><AiOutlineClose onClick={()=>{deleteMovie(singleMovie?.id)}} className="absolute top-4 right-4 text-gray-300"/></p>
                </div>
              </div>
          ))}
        </div>
        <MdChevronRight
          onClick={() => {
            slideRight();
          }}
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0"
        />
      </div>
    </>
  );
};

export default SavedMovies;
