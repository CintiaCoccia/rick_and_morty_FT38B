//import styles from "./detail.module.css";
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import { useState } from 'react'; 
import { useEffect } from 'react';
import Card from "../card/Card.jsx"
// revisar CHARACTER de Detail y CHAR de Cards


export default function Detail(props){

    const [character, setCharacter] = useState({});  
    const {id} = useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        
        return setCharacter({});
     }, [id]);

    if(character.name == null) {
       return (<div>Cargando...</div>)
    } 

    return(

        <div> 
            <h1>Detail</h1>
            <Card
            key={character.id}
            id={character.id}
            name= {character.name}
            species={character.species}
            status= {character.status}
            gender= {character.gender}
            image={character.image}
            />
        </div>
    )
}