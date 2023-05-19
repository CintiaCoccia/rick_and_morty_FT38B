import styles from "./card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
   
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick={props.onClose}>X</button>
          </div>
         <div className={styles.dataContainer}>
            <Link to={`/detail/${props.id}`} >
               <h2>{props.name}</h2>
            </Link>
            <h4>{props.status}</h4>
            <h4>{props.species}</h4>
            <h4>{props.gender}</h4>
            <h4>{props.origin}</h4>
            <img className={styles.image} src={props.image} alt={props.name} />
         </div>
      </div>
   );
}
