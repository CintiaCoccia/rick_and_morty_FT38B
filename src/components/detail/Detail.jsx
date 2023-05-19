//import styles from "./detail.module.css";
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import { useState } from 'react'; //crear estado local que se llame character inicializando con obj vacio
import { useEffect } from 'react';


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

    return(
        <div> 
            <h1>DETAIL</h1>
        </div>
    )
}