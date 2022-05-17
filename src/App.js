import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import DaisyNavBar from './components/DaisyNavBar';
import Saludo from './components/Saludo';
import Card from './components/Card';
import ItemListContainer from './components/ItemListContainer';
import CardNew from './components/CardNew';
import Contador from './components/movies/Contador';
import CountriesContainer from './components/CountriesContainer';
import StarshipsContainer from './components/swapi/StarshipsContainer';
import MoviesContainer from './components/movies/MoviesContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetail from './components/movies/MovieDetail';
import NoVocals from './components/NoVocals';
import ItemDetail from './components/shop/ItemDetail';
import {FavProvider} from './context/favContext';
import ProductDetail from './components/firebase-examples/ProductDetail';
import Products from './components/firebase-examples/Products';
import SaveFavs from './components/movies/SaveFavs';

function App() {

  const styles = {
    header: 'text-3xl font-bold font-mono text-orange-300'
  }

  const myFuncion = () => { /*logica*/ }

  return (
    <FavProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<MoviesContainer/>} />
          <Route path='/contador' element={<Contador/>} />
          <Route path='/pelicula/:movieId' element={<MovieDetail/>} />
          <Route path='/vocales/' element={<NoVocals/>} />
          <Route path='/shop/' element={<ItemDetail/>} />
          <Route path='/producto/' element={<ProductDetail/>} />
          <Route path='/productos/' element={<Products/>} />
          <Route path='/salvar/' element={<SaveFavs/>} />
        </Routes>
      </BrowserRouter>
    </FavProvider>
  );
}

export default App;
