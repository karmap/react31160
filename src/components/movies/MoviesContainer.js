import { useState } from "react"
import { DarkmodeContext } from "../../context/darkmodeContext"
import Footer from "./Footer"
import MoviesList from "./MoviesList"

const MoviesContainer = () => {

  const [darkmode, setDarkmode] = useState(false)

  const darkmodeHandler = () => {
    setDarkmode(true)
  }

  return (
    <DarkmodeContext.Provider value={darkmode}>
      <h1>App de películas</h1>
      <button className="btn" onClick={darkmodeHandler}>Darkmode on</button>
      <MoviesList/>
      <Footer/>
    </DarkmodeContext.Provider>
  )
}
export default MoviesContainer