import React from 'react'

function Pagination({totalMovies, perPage, currentPage, setCurrentPage}) {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalMovies / perPage); i++){
        pages.push(i)
    }
  return (
    <div className='flex  justify-center mt-2 mb-2'>
  <div className='flex items-center border border-gray-400 drop-shadow-lg w-fit rounded-md'>
    {pages.map((page, index) => {
      return (
        <button
          className={`flex items-center  md:w-[3.2rem] focus:bg-blue-900 active:bg-gray-700 hover:bg-gray-700 text-white font-semibold  border-gray-400 justify-center md:px-4 px-2 ${
            currentPage === page ? 'bg-blue-900 rounded-lg' : ''
          } `}
          key={index}
          onClick={() => {
            setCurrentPage(page);
            window.scrollTo(0, 0);
          }}
          style={index === pages.length - 1 ? { borderRight: 'none' } : {}}
        >
          {page}
        </button>
      );
    })}
  </div>
</div>
  )
}

export default Pagination