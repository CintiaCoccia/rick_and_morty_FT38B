// import SearchBar from './components/searchbar/SearchBar.jsx';
//import characters, { Rick } from './data.js';
// import Card from './components/card/Card.jsx';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/Nav/nav';
import { useEffect, useState } from 'react'; 
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Favorites from "./components/Favorites";

function App() {

const [characters, setCharacters] = useState([]); 

const navigate = useNavigate();
const [access, setAccess] = useState(false);
const EMAIL = 'cintia_08@hotmail.com';
const PASSWORD = 'abc1234';

function login(userData) {
   if (userData.password === PASSWORD && userData.username === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
   !access && navigate('/');
}, [access, navigate]);

const onSearch = (id) => {
   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

const onClose = id => {
   setCharacters(characters.filter(char => char.id !== id))
}

const location = useLocation();
   
return (
      <div className='App'>
         {location.pathname !== "/" && <Nav onSearch={onSearch} />}
         <Routes>
            <Route exact path="/" element={<Form login={login}/>} />     
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
         </Routes>
      </div>
   );
}

export default App;