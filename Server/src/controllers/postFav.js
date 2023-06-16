const { Favorite } = require("../DB_connection")

module.exports = async function (request, response) {
    
    const {name, origin, status, image, species, gender } = request.body;
    if ( !name || !origin || !status || !image || !species || !gender ) {
        return response.status(401).send("Faltan datos")
    }

    try {
        const [ fav, created ] = await Favorite.findOrCreate({ 
            where: { 
                name: name, 
                origin: origin, 
                status: status, 
                image: image, 
                species: species, 
                gender: gender },
        });

    const allFavorites = await Favorite.findAll();
    return res.status(200).json(allFavorites);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}