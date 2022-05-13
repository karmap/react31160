import { useContext } from "react"
import { DarkmodeContext } from "../../context/darkmodeContext"
import { FavContext } from "../../context/favContext"
import FavsList from "./FavsList"

const Footer = () => {

  const darkmode = useContext(DarkmodeContext)

  const { favorites } = useContext(FavContext)

  return (
    <>
      <div>Footer</div>
      <strong>Darkmode: {darkmode ? 'TRUE' : 'FALSE'}</strong>
      <FavsList/>
    </>
  )
}

export default Footer