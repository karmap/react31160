const NavBar = () => {

  const estilos = {
      border: 'solid red 1px',
      color: 'blue'
  }

  return (
    <div>
        <li style={estilos}>Inicio</li>
        <li style={{color: 'red'}}>Computadoras</li>
        <li>Celulares</li>
        <li>Tablets</li>
    </div>
  )
}
export default NavBar