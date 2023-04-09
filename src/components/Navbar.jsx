import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='fixed top-0 z-10 w-full bg-gray-900 h-[5rem] flex justify-between items-center text-white text-lg drop-shadow-md inset-0'>
      <div className='flex items-center'>
        <Link to='/'>
          <img
            src='src\assets\2-removebg-preview.png'
            className='w-[10rem] md:w-[13rem] md:ml-10 ml-1 sm:ml-1 '
            alt='Logo'
          />
        </Link>
        <Search />
      </div>
      <div className='hidden md:flex flex-row gap-5 mr-10 font-[Nunito] text-white'>
        <Link to='/movies' className='px-7 py-2 font-semibold text-white bg-blue-900  rounded-2xl hover:bg-blue-800 '>
          Movies
        </Link>
        <Link to='/genres' className='px-7 py-2 font-semibold text-white bg-blue-900  rounded-2xl hover:bg-blue-800'>
          Genres
        </Link>
        
      </div>
      <div className='sm:hidden relative '>
        <button
          className='mobile-menu-button mt-2 mr-[2rem] border-gray-500 rounded-md border-[0.15rem] bg-gray-900 hover:bg-gray-700'
          onClick={toggleMobileMenu}
        >
          <svg
            className='w-8 h-6 '
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`sm:hidden ease-in-out mobile-menu mt-4 ${
            isMobileMenuOpen ? 'block dropdown' : 'hidden'
          } bg-gradient-to-r from-gray-900 to-gray-800 ml-2 py-1 px-[2rem] h-fit rounded-md absolute -right-4 animated slide-in-left`}
        >
          <Link
            to='/movies'
            onClick={toggleMobileMenu}
            className='block  px-[3rem] py-1 tracking-wider text-left text-white font-semibold hover:bg-gray-800'
          >
            Movies
          </Link>
          <Link
            to='/genres'
            onClick={toggleMobileMenu}
            className='block px-[3rem] py-1 mt-1 text-left text-white font-semibold hover:bg-gray-800 '
          >
            Genres
          </Link>
        
        </div>
      </div>
    </div>
  );
}

export default Navbar;
