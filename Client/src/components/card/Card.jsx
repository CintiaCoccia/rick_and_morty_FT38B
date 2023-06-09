import styles from "./card.module.css";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import { addFav, removeFav } from "../../redux/action";
import { useState, useEffect } from "react";
// props no utilizadas=  addFav, removeFav, myFavorites

function Card(props) {

const { id, name, status, species, gender, image, onClose, origin } = props
const [isFav, setisFav] = useState(false);  //VER PROPS como ARGUMENTO.

   const handleFavorite = () => {
      if(isFav){
        setisFav(false);
        props.removeFav(id);
      } else {
         setisFav(true);
         props.addFav(props);
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setisFav(true);
         }
      });
   }, [props.id, props.myFavorites]);

   
   return (
      <div className={styles.container}>

         <div className={styles.buttonContainer}>

            { 
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )}

            <button onClick={onClose}>X</button>

          </div>
         <div className={styles.dataContainer}>
            <Link to={`/detail/${props.id}`} >
               <h2>{name}</h2>
            </Link>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin}</h2>
            <img className={image} src={image} alt={name} />
         </div>
      </div>
   );
}

const mapDispacthToProps = (dispatch) => {
   return {
   addFav: (character)=> {
      dispatch(addFav(character))
   },
   removeFav: (id)=> {
      dispatch(removeFav(id))
   }
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
};

export default connect(mapStateToProps, mapDispacthToProps)(Card);
