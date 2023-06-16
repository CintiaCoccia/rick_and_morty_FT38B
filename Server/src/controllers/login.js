const { User } = require("./../DB_connection");

module.exports = async function (request, response) {
    const { email, password } = request.query;
    if( !email || !password || email == "" || password== "") {
        return response.status(400).send("Faltan datos")
    }
    console.log(email)
    try {
        const user = await User.findOne({
            where: { email: email }
        })
        console.log(user)
        if(user == null) {
            return response.status(404).send("Usuario no encontrado")
        }
        if(user.password != password) { //user.p contras de db y password es pass que recibo por query
            return response.status(403).send("Contraseña incorrecta")
        }
        return response.status(200).json({
            access: true
         })
    } catch(error) {
        return response.status(500).json({error: error.message})
    }

}