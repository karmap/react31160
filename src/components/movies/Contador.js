import { useEffect, useState } from "react";

const Contador = () => {
  console.log('Aquí hay un render del componente Contador');
  const [count, setCount] = useState(0)

  useEffect( () => {
      console.log('[useEffect] El componente se montó');
      return () => {
        console.log('Se desmontó el componente');
      }
  } , [])
  
  useEffect( () => {
    console.log('[useEffect] El estado cambio ...');
  } , [count])
  

  const addHandler = (event) => { 
    console.log('Se está sumando');
    console.log(event);
    setCount(count + 1)
  }

  const resHandler = () => { 
    console.log('Se está restando');
    setCount(count - 1)
  }

  return (
    <>
      <div>Contador</div>
      <button onClick={resHandler}> - </button>
      <strong> {count} </strong>
      <button onClick={addHandler}> + </button>
    </>
  )
}
export default Contador