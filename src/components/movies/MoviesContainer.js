import { useEffect, useState } from "react"
import { DarkmodeContext } from "../../context/darkmodeContext"
import Spinner from "../Spinner"
import Footer from "./Footer"
import MoviesList from "./MoviesList"

const MoviesContainer = () => {

  const [darkmode, setDarkmode] = useState(false)
  const [loader, setloader] = useState(true)

  const styles = {
    dark: 'class1 class3 class2',
    ligth: 'class4 class5 class6'
  }

  const darkmodeHandler = () => {
    setDarkmode(true)
  }

  useEffect(() => {
    setTimeout(() => {
      setloader(false)
    }, 2000);
  }, [])

  if (loader) {
    return <Spinner/>
  }

  return (
    <DarkmodeContext.Provider value={darkmode}>
      <h1 className={ darkmode ? styles.dark : styles.ligth}>App de películas</h1>
      <button className="btn" onClick={darkmodeHandler}>Darkmode on</button>
      
      {/* { loader ? <Spinner/> : <MoviesList/>} */}

      <MoviesList/>
 
      <Footer/>
    </DarkmodeContext.Provider>
  )
}
export default MoviesContainer