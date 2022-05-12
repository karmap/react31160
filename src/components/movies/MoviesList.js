import { useEffect, useState } from "react";
import { moviesData } from "../../data/moviesData";
import MovieCard from "./MovieCard";

const MoviesList = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies()
  }, [])
  
  const getMovies = () => {
    const getMoviesPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve( moviesData )
      }, 500);
    })

    getMoviesPromise.then( data => {
      setMovies( data )
    })
  }

  return (
    <div>
      {movies.map( m => <MovieCard key={m.id} movie={m}/> )}
    </div>
  )
}
export default MoviesList