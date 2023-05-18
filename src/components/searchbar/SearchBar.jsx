import styles from "./SearchBar.module.css";
import { useState } from "react";

// linea 20 ver y  revisar con cuadernito
export default function SearchBar(props) {
   const [ID, setId ] = useState("")
   const handleChange = (evento) => {
      console.log(evento)
   setId(evento.target.value)
   }
   
   return (
      <div className={styles.container}>
         <input 
         type= "search"
         name= "search"
         id= "search"
         onChange={handleChange}
          />
         <button onClick={() => props.onSearch(ID)}>Agregar</button> 
      </div>
   );
}

