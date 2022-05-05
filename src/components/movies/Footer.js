import { useContext } from "react"
import { DarkmodeContext } from "../../context/darkmodeContext"
import { FavContext } from "../../context/favContext"

const Footer = () => {

  const darkmode = useContext(DarkmodeContext)

  const { favorites } = useContext(FavContext)

  return (
    <>
      <div>Footer</div>
      <strong>Darkmode: {darkmode ? 'TRUE' : 'FALSE'}</strong>
      { favorites.map( f => <li> {f} </li> ) }
    </>
  )
}

export default Footer