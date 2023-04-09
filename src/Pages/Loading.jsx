import React from 'react'
import { BarLoader } from 'react-spinners'
function Loading() {
  return (
    <div className='flex flex-col w-full  px-4 sm:px-8 items-center justify-center min-h-screen  bg-gradient-to-t from-black to-gray-800 overflow-auto '>
      <BarLoader color="#808080" 
      width={500}
      /><h2 className='mt-10 text-xl md:text-3xl text-white'> Loading
      </h2>
    </div>
  )
}

export default Loading