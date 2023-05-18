import './App.css';
// import Card from './components/card/Card.jsx';
import Cards from './components/cards/Cards.jsx';
// import SearchBar from './components/searchbar/SearchBar.jsx';
//import characters, { Rick } from './data.js';
import Nav from './components/Nav/nav';
import { useState } from 'react'; 
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import About from './components/about/About.jsx';
import Detail from './components/card/detail/Detail';


function App() {

const [characters, setCharacters] = useState([]); 

// const example = {
//    id: 1,
//    name: 'Rick Sanchez',
//    status: 'Alive',
//    species: 'Human',
//    gender: 'Male',
//    origin: {
//       name: 'Earth (C-137)',
//       url: 'https://rickandmortyapi.com/api/location/1',
//    },
//    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };

// const onSearch = (id) => {
//    setCharacters((as) => [...as, example]);  //ver setCharacters, qué hace?
// }

const onSearch = (id) => {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

const onClose = id => {
   setCharacters(characters.filter(char => char.id !==id))
}

   return (
      <div className='App' style={{padding: "25px"}}>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path="home" element={<Cards characters ={characters} onClose={onClose}/>} />
            <Route path="about" element={<About />} />
            <Route path="detail/:id" element={<Detail />} />

         </Routes>
        
      </div>
   );
}
//  {/* 
//          <button onClick={}>Home</button> */}
//          <hr />
//          <Cards characters ={characters} onClose={onClose}/>


export default App;
