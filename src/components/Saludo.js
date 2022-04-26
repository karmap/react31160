// const Saludo = (props) => {
const Saludo = ( {name, edad, funcionalidad} ) => {
  return (
    // <h1 className="text-4xl font-bold" style={{color:'red'}}>
    //     Hola {props.name}!
    //     Tienes {props.edad} años
    // </h1>
    <h1 className="text-4xl font-bold" style={{color:'red'}}>
        Hola {name}!
        Tienes {edad} años
    </h1>
  )
}
export default Saludo