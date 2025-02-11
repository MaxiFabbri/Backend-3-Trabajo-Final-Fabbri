import MockingService from "../services/mocking.js";
import CustomError from "../services/errors/CustomError.js";
import { generateUserErrorInfo } from "../services/errors/info.js";
import EErrors from "../services/errors/enum.js";


const getMockingPets = async (req, res) => {
    const quantity = req.params.quantity || 100;
    const mascotas = await MockingService.generateMockingPets(quantity);
    res.send({ status: "success", payload: mascotas });
}

const getMockingUsers = async (req, res) => {
    const quantity = req.params.quantity || 50;
    const usuarios = await MockingService.generateMockingUsers(quantity);
    res.send({ status: "success", payload: usuarios });
}

const generateData = async (req, res, next) => {
    const users = req.query.users || 0;
    const pets = req.query.pets || 0;

    // Genero los Pets
    if (pets > 0) {
        await MockingService.dbGenerateMockingPets(pets);
    }

    // Genero los Usuarios
    if (users > 0) {
        await MockingService.dbGenerateMockingUsers(users);
    }
    const data = {
        users,
        pets
    }
    res.send({ status: "success", payload: data });
}

export default {
    getMockingPets,
    getMockingUsers,
    generateData
}