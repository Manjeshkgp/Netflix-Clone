import React from "react";
import { FaHeart,FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion,doc,updateDoc } from "firebase/firestore";

const Movie = ({singleMovie}) => {
  const [like,setLike] = React.useState(false);
  const {user} = UserAuth();

  const movieID = doc(db,"users",`${user?.email}`)

  const saveMovie = async ()=>{
    if(user?.email){
      setLike(!like)
      await updateDoc(movieID,{
        savedMovies:arrayUnion({
          id:singleMovie?.id,
          title:singleMovie?.title,
          img:singleMovie?.backdrop_path
        })
      })
    }
    else{
      alert("Please Log In to save a Movie")
    }
  }

  return (
    <>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        <img
          className="w-full block"
          src={`https://image.tmdb.org/t/p/w500/${singleMovie?.backdrop_path}`}
          alt={singleMovie.title}
        />
        <div className="absolute hover:bg-black/70 hover:opacity-100 opacity-0 text-white top-0 left-0 w-full h-full">
          <p className="font-bold flex justify-center items-center text-center h-full text-xs md:text-sm">
            {singleMovie?.title}
          </p>
          <p onClick={()=>{saveMovie()}}>
            {like ? (
              <FaHeart className="absolute top-4 left-4 text-gray-300" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
