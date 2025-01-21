import MockingService from "../services/mocking.js"; 


const getMockingPets = async (req, res) => {
    const quantity = req.params.quantity || 100;
    const mascotas = await MockingService.generateMockingPets(quantity);
    res.send({status: "success", payload: mascotas});
}

const getMockingUsers = async (req, res) => {
    const quantity = req.params.quantity || 50;
    const usuarios = await MockingService.generateMockingUsers(quantity); 
    res.send({status:"success", payload: usuarios}); 
}

export default {
    getMockingPets,
    getMockingUsers
}