import React from 'react'
import { Link } from 'react-router-dom';
function MovieItem({ title, poster, year, rated, released, runtime, genre, director, actors, plot, language, country, awards, ratings }) {
  
  return (
    <div className=" flex flex-wrap border-4 ml-3 mb-10 sm:mb-10 border-[#063765] rounded-xl drop-shadow-xl transition ease-in duration-200 hover:transform hover:scale-105 hover:opacity-75 max-w-[15rem] mt-7">
      <Link to = {`/${title}`}><img src={poster} className='rounded-lg max-h-[23rem]' alt={`Poster for ${title}`} loading="eager"/></Link> 
    </div>
  );
}

export default MovieItem