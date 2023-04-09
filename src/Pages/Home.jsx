import React, { useState } from 'react'
import movies from '../data/movies';
import { Link, useParams } from 'react-router-dom';
import '../Styles/Home.css'
import MovieItem from '../components/MovieItem';
function Home() {

  return (
    <div className="fixed top-0 w-full h-screen bg-gradient-to-t from-black to-gray-800 overflow-auto">
    <div className="flex justify-center py-4 mt-[7rem] md:mt-[7rem] text-white">
      <div className='header'><h1 className="md:mb-10 text-3xl md:text-4xl lg:text-5xl tracking-wider font-[Oswald]">Find your next movie with ReelSearch</h1>
     </div>
    </div>
    <div className='flex flex-wrap xl:gap-10 justify-center mt-10'>
  {movies.slice(0, 5).map((movie) => (
    <div  className='fade-in-image'>
    <MovieItem
      key={movie.imdbID}
      title={movie.Title}
      poster={movie.Poster}
    />
    </div>
  ))}
</div>
      <div className='browse-button'>
      <Link to="/movies" className="sm:mb-10 inline-block  text-xl px-10 py-2 font-semibold text-white bg-blue-900 rounded-2xl hover:bg-blue-700
      transition ease-in duration-200 hover:transform hover:scale-105
      ">Browse Now</Link>
      </div>
  </div>
  )
}

export default Home