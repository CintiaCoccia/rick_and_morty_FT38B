const axios = require("axios");

// export default function getCharById(res, id) {
//    axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//         const obj = {
//             id: response.data.id,
//             name: response.data.name,
//             gender: response.data.gender,
//             species: response.data.species,
//             origin: response.data.origin,
//             image: response.data.image,
//             status: response.data.status
//         }
//         res.writeHead(200, {"content-type": "application/json"})
//         res.end(JSON.stringify(obj))
//     })
//     .catch((error) => {
//         res.writeHead(500, {"content-type": "text/plain"})
//         res.end(error.message)
//     })
// }

//------------------------- contenido anterior a hw express

module.exports = function getCharById(request, response) {
    const id = request.params.id
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => {
            const obj = {
                id: res.data.id,
                name: res.data.name,
                gender: res.data.gender,
                species: res.data.species,
                origin: res.data.origin,
                image: res.data.image,
                status: res.data.status
            }
            return response.status(200).json(obj)
        })
        .catch((error) => {
            if (error.response.status == 404) {
                return response.status(404).json({ message: "Not found" })
            } else {
                return response.status(500).json({ message: error.response.data.error })
            }
        })
}


