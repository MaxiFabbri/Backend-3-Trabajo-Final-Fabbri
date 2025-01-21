import { generateFakePet } from './utils.js'

function mokingPets(req, res) {
    // defino el numero de usuarios a generar
    const quantity = req.params.quantity || 100;
    // genero un array vacio
    const mockPets = []
    // genero la cantidad de usuarios solicitados y los sumo al array
    for (let i = 0; i < quantity; i++) {
        mockPets.push(generateFakePet())
    }
    res.json(mockPets);
}

export default mokingPets;