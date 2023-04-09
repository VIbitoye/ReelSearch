import React from 'react'
import { useParams } from 'react-router-dom';
import movies from '../data/movies';
import MovieItem from '../components/MovieItem';

function SearchResults() {
    const { search } = useParams();
    const filteredMovies = movies.filter(movie => {
        const matches =  movie.Title.toLowerCase().includes(search.toLowerCase()) ||  movie.Genre.toLowerCase().includes(search.toLowerCase())
        ||  movie.Actors.toLowerCase().includes(search.toLowerCase()) || movie.Director.toLowerCase().includes(search.toLowerCase())
        console.log(matches);
        return matches;
    });
  return (
    <div className="fixed top-0 w-full h-screen bg-gradient-to-t from-black to-gray-800 overflow-auto mt-[5rem]">
         {filteredMovies.length > 0 ? (
        <>
          <h2 className="text-white text-3xl font-[Oswald] mt-10 mb-4">
            Search results for "{search}"
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-4 w-[34rem] lg:w-[60rem] lg:h-fit h-fit text-2xl mx-auto">
            {filteredMovies.map(movie => (
                <div className="text-white  " key={movie.Title}>
             <h2 className='text-2xl font-[Oswald] mb-4 '>{movie.Title}</h2>
              <MovieItem title={movie.Title} poster={movie.Poster} key={movie.imdbID} />
           </div> ))}
          </div>
        </>
      ) : (
            <div className="flex mt-[10rem] h-screen">
            <div className="text-white text-3xl font-[Oswald] tracking-wider mx-auto">No results found for "{search}"</div>
            </div>
      )}
    </div>
  )
}

export default SearchResults