import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movies from '../data/movies';
import MovieItem from '../components/MovieItem';
import Pagination from '../components/Pagination';
import Loading from './Loading';

function GenreMovies() {
  const { slug } = useParams();
  const [sortedMovies, setSortedMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const lastRecordIndex = currentPage * perPage;
  const firstRecordIndex = lastRecordIndex - perPage;
  const [isLoading, setIsLoading] = useState(true);

  const genreMovies = movies.filter((movie) => {
    const genres = movie.Genre.toLowerCase().split(',').map((g) => g.trim());
    return genres.includes(slug.toLowerCase().trim());
  });

  useEffect(() => {
  setIsLoading(true);

  setTimeout(() => {
    const sorted = [...genreMovies].sort(
      (a, b) => new Date(b.Released) - new Date(a.Released)
    );
    setSortedMovies(sorted);
    setIsLoading(false);
  }, 1000);

}, []);

  const currentMovies = sortedMovies.slice(firstRecordIndex, lastRecordIndex);
  const totalMovies = sortedMovies.length;

  return (
    <>
    {isLoading ? (
      <Loading />
    ) : (
    <div className="min-h-screen bg-gradient-to-t from-black to-gray-800 overflow-auto mt-12">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-white text-5xl font-[Oswald] mt-10 mb-7 uppercase">
          {slug} movies
        </h1>
        <Pagination
          totalMovies={totalMovies}
          perPage={perPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 w-[34rem] lg:w-[60rem]  text-2xl">
            {currentMovies.map((movie) => (
              <div className="text-white " key={movie.Title}>
               <h2 className="text-lg font-[Roboto] max-w-[24rem] mb-4 whitespace-nowrap overflow-hidden overflow-ellipsis text-center block text-white">
                  {movie.Title}
                </h2>
                <MovieItem title={movie.Title} poster={movie.Poster} />
              </div>
            ))}
          </div>
        
        <Pagination
          totalMovies={totalMovies}
          perPage={perPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>)} </>
  );
}

export default GenreMovies;