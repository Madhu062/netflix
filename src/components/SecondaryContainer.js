import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movieList = useSelector((store) => store.movies);
  if(!movieList) return;
  return movieList && (
    <div className="">
      <MovieList title={"Now Playing"} movieList={movieList.nowPlayingMovies} />
      <MovieList title={"Trending"} movieList={movieList.nowPlayingMovies} />

      <MovieList title={"Popular"} movieList={movieList.nowPlayingMovies} />

      <MovieList title={"Now Playing"} movieList={movieList.nowPlayingMovies} />

    </div>
  )
}

export default SecondaryContainer