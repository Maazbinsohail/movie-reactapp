
import './App.css';
import Navbar from './components/Navbar';

import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home';
import Movies from './pages/movies/Movies';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MoviesDetail from './pages/movies/MoviesDetail';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/movies/:type" element = {<Movies/>}/>
        <Route path = "/movie/:id" element = {<MoviesDetail/>}/>
      </Routes>
     
    </>
  );
}

export default App;
