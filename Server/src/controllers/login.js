const users = require("./../utils/users")

module.exports = function(request, response) {
    const { email, password } = request.query

    const matchedUsers = users.filter((user) => {
        return user.email == email && user.password == password
    })

    if (matchedUsers.length > 0) {
        return response.status(200).json( { access: true } )
    } else {
        return response.status(200).json( { access: false })
    }

    // return response.status(200).json( { access: matchedUsers.length > 0 } )
}