import { createContext, useState } from "react";

export const FavContext = createContext({
  favorites: [],
})

export const FavProvider = ( {children} ) => {

  const [favorites, setFavorites] = useState([])

  const addToFavorites = ( movieId ) => {
    setFavorites( current => {
      return current.concat( movieId )
    })
  }

  const clearFavorites = () => {
    setFavorites( [] )
  }

  const context = {
    favorites,
    addToFavorites,
    clearFavorites,
  }

  return (
    <FavContext.Provider value={ context }>
      {children}
    </FavContext.Provider>
  )
}