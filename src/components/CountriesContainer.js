import { useEffect, useState } from "react";

const CountriesContainer = () => {

  const countriesList = ['México', 'Argentina', 'Australia', 'Colombia', 'Peru', 'Costa Rica', 'Venezuela']

  const [countries, setCountries] = useState([])
  // const [users, setUsers] = useState([])

  useEffect(() => {
    console.log('[CountriesContainer ] Mounting');
    console.log('Lista de paises', countriesList);

    const promesa = new Promise( (resolve, reject) => {
      const rand = Math.random()
      console.log('Random number', rand);

      setTimeout( () => {
        if (rand >= 0.5) {
          resolve(countriesList)
        } else {
          reject('Rechazada!!!')
        }
      }, 5000 )

    })

    promesa
      .then( result => {
        console.log('La promesa fue satisfecha', result);
        setCountries(result)
      })
      .catch( err => {
        console.log('La promesa fue rechazada', err);
      })

    console.log('Se terminó de ejecutar lo del useEffect');
  }, [])
  
  return (
    <div style={{border:'solid green 2px'}}>
      <h1>CountriesContainer</h1>
      {countries.map( (c, i) => <li key={i}>{c}</li>)}
    </div>
  )
}
export default CountriesContainer