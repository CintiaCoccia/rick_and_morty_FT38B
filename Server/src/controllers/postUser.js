const { User } = require("./../DB_connection");

module.exports = async function (request, response) {
    
    const { email, password } = request.body;
    if( !email || !password || email == "" || password== "") {
        return response.status(400).send("Faltan datos")
    }
    try {
        const [user, created] = await User.findOrCreate({ //findOrCreate devuelve un [ ], por lo que [ user, created] es destructuring de un arreglo.
            where: { email: email, password: password } 
        })
        return response.status(200).json(user);
    } catch(error) {
        return response.status(500).json( {error: error.message})
    }
}
