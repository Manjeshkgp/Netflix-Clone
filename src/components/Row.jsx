import axios from 'axios';
import React,{ useEffect,useState } from 'react';
import Movie from './Movie';
import {MdChevronLeft,MdChevronRight} from "react-icons/md"

const Row = ({title,fetchUrl,rowId}) => {
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        axios.get(fetchUrl).then((result)=>{
            setMovies(result.data.results)
        }).catch(err=>console.log(err))
    },[fetchUrl]);
    console.log(movies)
    const slideRight = () => {
        let slider = document.getElementById("slider"+rowId);
        slider.scrollLeft = slider.scrollLeft + 500
    }
    const slideLeft = () => {
        let slider = document.getElementById("slider"+rowId);
        slider.scrollLeft = slider.scrollLeft - 500
    }

  return (
    <>
    <h2 className='font-bold text-white md:text-xl p-4'>{title}</h2>
    <div className="relative flex items-center group">
        <MdChevronLeft onClick={()=>{slideLeft()}} size={40} className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0"/>
        <div id={"slider"+rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
            {movies.map((singleMovie)=>(<>
            <Movie key={singleMovie?.id} singleMovie={singleMovie}/>
            </>))}
        </div>
        <MdChevronRight onClick={()=>{slideRight()}} size={40} className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0"/>
    </div>
    </>
  )
}

export default Row