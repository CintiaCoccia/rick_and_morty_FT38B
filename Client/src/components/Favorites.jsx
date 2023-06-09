import {connect} from "react-redux";
import Card from "./card/Card";
import styles from "./searchbar/favorites.module.css"

function Favorites(props) {
    return (
        <div>
            <div className={styles.container}>  
            {
            props.myFavorites.map(char => (
                <Card
                key={char.id}
                id={char.id}
                name= {char.name}
                species={char.species}
                status= {char.status}
                gender= {char.gender}
                image={char.image}
                />
            ))}
            </div>
        </div>
     );
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
 };
 
 export default connect(mapStateToProps, null)(Favorites);
