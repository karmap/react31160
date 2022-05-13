import { useFavContext } from "../../context/favContext"
import FavsListCard from "./FavsListCard"

const FavsList = () => {
  
  const { favorites, clearFavorites } = useFavContext()
  
  return (
    <>
      <div>FavsList</div>
      <button
        className="btn"
        onClick={ () => { clearFavorites() } }>
          Vaciar lista
      </button>
      { favorites.map( f => <FavsListCard key={f.id} movie={f}/> ) }
    </>
  )
}
export default FavsList