import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Upcoming from './Pages/Upcoming'
import MovieDetails from './Pages/MovieDetails'
import Genres from './Pages/Genres'
import GenreMovies from './Pages/GenreMovies'
import SearchResults from './Pages/SearchResults'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path = '/' element = {<Home/>}/>
       <Route path = '/movies' element = {<Upcoming/>}/>
       <Route path = '/:title' element = {<MovieDetails/>}/>
       <Route path  = '/genres' element = {<Genres/>}/>
       <Route path  = '/genres/:slug' element = {<GenreMovies/>}/>
       <Route path = '/search/:search' element = {<SearchResults/>}/>
      </Routes> 
      </BrowserRouter>
    </div>
   
  )
}

export default App
