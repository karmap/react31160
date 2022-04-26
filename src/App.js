import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import DaisyNavBar from './components/DaisyNavBar';
import Saludo from './components/Saludo';
import Card from './components/Card';
import ItemListContainer from './components/ItemListContainer';
import CardNew from './components/CardNew';
import Contador from './components/Contador';
import CountriesContainer from './components/CountriesContainer';
import StarshipsContainer from './components/swapi/StarshipsContainer';

function App() {

  const styles = {
    header: 'text-3xl font-bold font-mono text-orange-300'
  }

  const myFuncion = () => { /*logica*/ }

  return (
    <div className="App">
      {/* <DaisyNavBar/> */}
      {/* <NavBar/>
      <h1 className={styles.header}>Hola Mundo con React!</h1>
      
      <Saludo name='Ana' edad='20' funcionalidad={myFuncion}/>
      <Saludo name='Juan' edad='32'/>
      <Saludo name='Maria' edad='27'/>

      <Card>
        <Saludo name='Agustín' edad='34'/>
      </Card>

      <ItemListContainer/> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <CardNew otroComponente={Saludo}></CardNew>
      <Contador></Contador>
      {/* <CountriesContainer></CountriesContainer> */}
      <StarshipsContainer/>
    </div>
  );
}

export default App;
