import { generateFakeUser } from './utils.js'

function mokingUsers(req, res) {
    // defino el numero de usuarios a generar
    const quantity = req.params.quantity || 50;
    // genero un array vacio
    const mockUsers = []
    // genero la cantidad de usuarios solicitados y los sumo al array
    for (let i = 0; i < quantity; i++) {
        mockUsers.push(generateFakeUser())
    }
    res.json(mockUsers);
}

export default mokingUsers;