import { useContext } from "react"
import { Link } from "react-router-dom"
import { DarkmodeContext } from "../../context/darkmodeContext"
import { FavContext } from "../../context/favContext"

const MovieCard = ( props ) => {
  
  const {id, title, director, year, duration, img} = props.movie
  const defaultImg = 'https://previews.123rf.com/images/pavlostv/pavlostv1806/pavlostv180600511/102793693-icono-de-pel%C3%ADcula-vector-de-stock.jpg?fj=1'

  const darkmode = useContext(DarkmodeContext)
  const { addToFavorites } = useContext(FavContext)

  const addHandler = () => { addToFavorites(id) }

  console.log('dark mode', darkmode);

  return (
    <div className="card card-side bg-base-100 shadow-xl">
    <figure><img className="h-80 w-52 m-10" src={img ?? defaultImg} alt="Movie"/></figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      {/* <button className="btn" onClick={ () => { addToFavorites(id) } }>Agregar a favoritos</button> */}
      <button className="btn" onClick={ addHandler }>Agregar a favoritos</button>
      <div>{director}</div>
      <div>{year}</div>
      <div>{duration}</div>
      <div className="card-actions justify-end">
        <Link to={`/pelicula/${id}`} className="btn btn-primary">Ver</Link>
      </div>
      <strong>Darkmode: {darkmode ? 'TRUE' : 'FALSE'}</strong>
    </div>
  </div>
  )
}
export default MovieCard