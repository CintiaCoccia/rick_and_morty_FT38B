import Card from "../card/Card.jsx";

export default function Cards(props) {
   const {characters} = props;
   
   return (
      <div style={{display: "flex", justifyContent: "space-between"}}>  
         {characters.map(char => (
            <Card
            key={char.id}
            id={char.id}
            name= {char.name}
            species={char.species}
            status= {char.status}
            gender= {char.gender}
            image={char.image}
            onClose={() => props.onClose(char.id)}
            />
         ))}
      </div>
   );
}


         

