import { createContext, useContext, useState } from "react";

export const FavContext = createContext({
  favorites: [],
})

export const useFavContext = () => {
  return useContext( FavContext )
}

export const FavProvider = ( {children} ) => {

  const [favorites, setFavorites] = useState([])

  const addToFavorites = ( movie ) => {
    setFavorites( current => {
      return current.concat( movie )
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