import React from 'react'
import movies from '../data/movies';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
function MovieDetails() {
    const { title } = useParams();
    const decodedTitle = decodeURIComponent(title);
  
    // find the movie with the decoded title
    const movie = movies.find((movie) => movie.Title === decodedTitle);
  
    // render the movie details
    return (
      <div className="fixed text-white top-0 w-full h-screen bg-gradient-to-t from-black to-gray-800 overflow-auto mt-[5rem]">
        <div className="flex flex-col mt-10 justify-center items-center sm:mx-10 md:mx-20 lg:mx-40 xl:mx-40 text-justify">
          <h1 className="text-4xl font-[Oswald] tracking-wide mb-4">{movie.Title}</h1>
          <div className="flex flex-col md:flex-row justify-center items-center mb-8 gap-y-10 ">
            <img src={movie.Poster} alt={`Poster for ${movie.Title}`} className="max-w-md w-1/2 md:w-auto rounded-lg shadow-lg mb-4 md:mb-0 md:mr-8" />
            <div className="flex flex-col ml-10 px-10 md:-mt-[10rem]">
              <p className="text-base ml-[7.3rem] md:text-start sm:text-lg md:text-xl mb-2"><span className="font-bold">Release Date:</span> {movie.Released}</p>
              <p className="text-lg md:text-xl mb-10">{movie.Plot}</p>
              <p className="text-base sm:text-lg md:text-xl mb-3"><span className="font-bold">Genre:</span> {movie.Genre}</p>
              <p className="text-base sm:text-lg md:text-xl mb-3"><span className="font-bold">Director:</span> {movie.Director}</p>
              <p className="text-base sm:text-lg md:text-xl mb-3"><span className="font-bold">Writers:</span> {movie.Writer}</p>
              <p className="text-base sm:text-lg md:text-xl mb-3"><span className="font-bold">Actors:</span> {movie.Actors}</p>
              <p className="text-base sm:text-lg md:text-xl mb-3"><span className="font-bold">Box Office:</span> {movie.BoxOffice}</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MovieDetails