import { useContext } from "react"
import { DarkmodeContext } from "../../context/darkmodeContext"

const Footer = () => {

  const darkmode = useContext(DarkmodeContext)

  return (
    <>
      <div>Footer</div>
      <strong>Darkmode: {darkmode ? 'TRUE' : 'FALSE'}</strong>
    </>
  )
}

export default Footer