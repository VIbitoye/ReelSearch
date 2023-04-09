import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Search() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();



  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (search.trim() === '') {
      return null;
    }
   navigate(`/search/${search}`);
  };

  return (
    <form onSubmit={submitHandler} className="flex justify-center">
      
  <div className="relative w-full md:w-3/4 lg:w-1/2 xl:w-[30rem] mx-auto mt-2">
  <button type="submit" className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-300 hover:text-white focus:outline-none">
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.375 14.272C17.609 12.934 18.25 11.223 18.25 9.375C18.25 4.181 14.069 0 9.375 0C4.681 0 0.5 4.181 0.5 9.375C0.5 14.069 4.681 18.25 9.375 18.25C11.223 18.25 12.934 17.609 14.272 16.375L20.5 22.5L22.5 20.5L16.375 14.272ZM9.375 15.5C5.507 15.5 2.25 12.243 2.25 8.375C2.25 4.507 5.507 1.25 9.375 1.25C13.243 1.25 16.5 4.507 16.5 8.375C16.5 12.243 13.243 15.5 9.375 15.5Z" fill="currentColor"/>
      </svg>
      <span className="sr-only">Search</span>
    </button>
    <input
      onChange={searchHandler}
      value={search}
      type="search"
      className="block w-full px-4 py-2 text-base text-white font-semibold bg-gray-500 bg-clip-padding border border-solid border-gray-900 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      placeholder="Search for movies"
      aria-label="Search"
    />
  
  </div>
</form>
  );
}

export default Search