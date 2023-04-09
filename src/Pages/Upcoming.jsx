import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import MovieItem from '../components/MovieItem';
import movies from '../data/movies';
import Pagination from '../components/Pagination';


function Upcoming() {
  const [isLoading, setIsLoading] = useState(true);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
 const [perPage, setPerPage] = useState (12);
 const lastRecordIndex = currentPage * perPage;
 const firstRecordIndex = lastRecordIndex - perPage;

 
  useEffect(() => {
    // Simulate an asynchronous operation to fetch and sort the movie data
    setTimeout(() => {
      const sorted = [...movies]
      .sort((a, b) => new Date(b.Released) - new Date(a.Released))
      .filter(movie => new Date(movie.Released) >= new Date('2021-10-01'));
    setSortedMovies(sorted);
    setIsLoading(false);
    }, 2500);
  }, []);

  
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const currentMovies = sortedMovies && sortedMovies.slice(firstRecordIndex, lastRecordIndex)
  const totalMovies = sortedMovies?.length;
  console.log(totalMovies);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (

        
        <div className="min-h-screen bg-gradient-to-t from-black to-gray-800 overflow-auto mt-[5rem]">
  
          <h1 className="mb-10 font-[Oswald] text-white text-3xl md:text-4xl mt-5">Upcoming Movies</h1>
          <Pagination 
          totalMovies={totalMovies} 
          perPage = {perPage}
          currentPage = {currentPage}
          setCurrentPage = {setCurrentPage}
          />
          <div className='upcoming-movies'>
          <div className="grid-cols-2 md:grid-cols-4 grid w-fit md:gap-12 gap-6 p-4 items-center mx-auto mt-10">
            { currentMovies.
                map((movie) => (
              <div className="text-white " key={movie.Title}>
                 <h2 className="text-lg font-[Roboto] max-w-[15rem] mb-4 px-7 overflow-hidden whitespace-nowrap text-center text-white">{movie.Title}</h2>
             <MovieItem title={movie.Title} poster={movie.Poster} />
              </div>
            ))}


          </div>
        </div>
        <Pagination 
          totalMovies={totalMovies} 
          perPage = {perPage}
          currentPage = {currentPage}
          setCurrentPage = {setCurrentPage}
          />
        </div>
      )}

          
    </>
  );
}

export default Upcoming;
