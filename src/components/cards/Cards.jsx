import Card from "../card/Card.jsx";

export default function Cards(props) {
   const {characters} = props;
   
   return (
      <div style={{display: "flex", justifyContent: "space-between"}}>  
         {characters.map(character => (
            <Card
            key={character.id}
            id={character.id}
            name= {character.name}
            species={character.species}
            status= {character.status}
            gender= {character.gender}
            image={character.image}
            onClose={() => props.onClose(character.id)}
            />
         ))}
      </div>
   );
}


         

