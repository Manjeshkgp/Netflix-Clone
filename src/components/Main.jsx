import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  const truncateString = (str, maxLength) => {
    if(!movie){return;}
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    } else {
      return str;
    }
  }
  
  console.log(movie);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt={movie?.title}
        />
        <div className="absolute top-[20%] w-full p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl">{movie?.title}</h1>
          <div className="my-4">
            <button className="bg-gray-300 border text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="text-white border border-gray-300 py-2 px-5">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">Launched {movie?.release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-ellipsis">{truncateString(movie?.overview,200)}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
