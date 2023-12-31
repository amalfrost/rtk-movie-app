import React from 'react'
import {  useSelector } from 'react-redux'
import { getAllMovies ,getAllShows } from '../../features/movies/movieSlice'
import MovieCard from './../MovieCard/MovieCard';

import './MovieListing.scss'

function MovieListing() {
  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)
  // let renderMovies = '';
 

  // renderMovies =  
  // movies.Response === "True" ? (
  //   movies.search.map((movie,index) => (
  //     <MovieCard key ={index} data = {movie}/>
  //   ))
  // ) : (
  // <div className ="movies-error">
  // <h3>{movies.error}</h3> 
  // </div> ) 
  return (
    <div className='movie-wrapper'>
   <div className='movie-list'>
    <h2>Movies</h2>
    <div className='movie-container'>
  {
    movies && Array.isArray(movies) ? (
      movies.map((movie, index) => (
        <MovieCard key={index} data = {movie}></MovieCard>
      ))
    ) :  <div className ="movies-error">
  <h3>{movies.error}</h3> 
   </div> 
  }
</div>

   </div>
   <div className='show-list'>
    <h2>Shows</h2>
    <div className='movie-container'>
  {
    shows && Array.isArray(shows) ? (
      shows.map((show, index) => (
        <MovieCard key={index} data = {show}></MovieCard>
      ))
    ) :  <div className ="movies-error">
  <h3>{shows.error}</h3> 
   </div> 
  }
</div>

   </div>
    </div>
  )
}

export default MovieListing
