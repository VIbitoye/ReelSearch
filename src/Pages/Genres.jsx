import React from 'react'
import { Link } from 'react-router-dom'
import genresData from '../data/genres.js';

function Genres() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-black text-white to-gray-800 overflow-auto mt-[1.3rem]">
      <div className="font-[Oswald] text-5xl mt-20 mb-5">Genres</div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-4 w-[34rem] lg:w-[60rem] lg:h-[50rem] h-[30rem] text-2xl mx-auto">
        {genresData.map((genre) => (
          <Link
            key={genre.slug}
            to={`/genres/${genre.slug}`}
            className="flex items-center justify-center bg-gray-900 rounded-md p-6 shadow-lg transition ease-in duration-200 hover:transform hover:scale-105 hover:opacity-75 h-full"
          >
            {genre.name}
          </Link>
        ))}
      </div>
    </div>
  );
}


export default Genres