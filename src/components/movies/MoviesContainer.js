import PreviousMap from "postcss/lib/previous-map"
import { useEffect, useState } from "react"
import { DarkmodeContext } from "../../context/darkmodeContext"
import Spinner from "../Spinner"
import FavsList from "./FavsList"
import Footer from "./Footer"
import MoviesList from "./MoviesList"

const MoviesContainer = () => {

  const [darkmode, setDarkmode] = useState(false)
  const [loader, setloader] = useState(true)

  const styles = {
    dark: 'class1 class3 class2',
    ligth: 'class4 class5 class6',
    btnDark: 'btn',
    btnLigth: 'btn bg-slate-200 text-black',
  }

  const darkmodeHandler = () => {
    setDarkmode( previousValue => {
      return !previousValue
    })
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
      <h1 className="text-3xl">Mi cambio para deploy automático</h1>
      <h1 className={ darkmode ? styles.dark : styles.ligth}>App de películas</h1>
      <button
        className={ darkmode ? styles.btnDark : styles.btnLigth}
        onClick={darkmodeHandler}>Darkmode { darkmode ? 'off' : 'on'}
      </button>
      
      {/* { loader ? <Spinner/> : <MoviesList/>} */}

      <FavsList/>
      <MoviesList/>
 
      <Footer/>
    </DarkmodeContext.Provider>
  )
}
export default MoviesContainer