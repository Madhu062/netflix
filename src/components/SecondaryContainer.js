import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movieList = useSelector((store) => store.movies);
  if(!movieList) return;
  return movieList && (
    <div className=" bg-black">
      <div className=' z-20 pl-12 -mt-52 relative'>
      <MovieList title={"Now Playing"} movieList={movieList.nowPlayingMovies} />
      <MovieList title={"Trending"} movieList={movieList.nowPlayingMovies} />

      <MovieList title={"Popular"} movieList={movieList.popularMovies} />

      <MovieList title={"Now Playing"} movieList={movieList.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer