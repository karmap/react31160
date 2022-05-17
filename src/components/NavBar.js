import { Link } from "react-router-dom"

const NavBar = () => {

  const estilos = {
      border: 'solid red 1px',
      color: 'blue'
  }

  return (
    <div>
        <li style={estilos}><Link to='/'>Inicio</Link></li>
        <li style={{color: 'red'}}><Link to='/contador'>Contador</Link></li>
        <li>Celulares</li>
        <li>Tablets</li>
        <li style={{color: 'green'}}><Link to='/salvar'>Favoritos</Link></li>
    </div>
  )
}
export default NavBar