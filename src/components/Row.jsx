import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Movie from './Movie';

const Row = ({title,fetchUrl}) => {
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        axios.get(fetchUrl).then((result)=>{
            setMovies(result.data.results)
        }).catch(err=>console.log(err))
    },[fetchUrl]);
    console.log(movies)

  return (
    <>
    <h2 className='font-bold text-white md:text-xl p-4'>{title}</h2>
    <div className="relative flex items-center">
        <div id={"slider"} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            {movies.map((singleMovie)=>(<>
            <Movie key={singleMovie?.id} singleMovie={singleMovie}/>
            </>))}
        </div>
    </div>
    </>
  )
}

export default Row