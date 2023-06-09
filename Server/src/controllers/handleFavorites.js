var myFavorites = []

function postFav(request, response) {
    const { id, name, gender, species, origin, image, status } = request.body;

    const obj = {
        id: id,
        name: name,
        gender: gender,
        species: species,
        origin: origin,
        image: image,
        status: status
    }

    myFavorites.push(obj)

    return response.status(200).json(myFavorites)
}

function deleteFav(request, response) {
    const { id } = request.params

    myFavorites = myFavorites.filter((favorite) => {
        return favorite.id != id
    })

    return response.status(200).json(myFavorites)
}

module.exports = {
    postFav: postFav,
    deleteFav: deleteFav
}