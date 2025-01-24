import { faker } from "@faker-js/faker";
import { createHash } from "../utils/index.js";
import { petsService, usersService } from "../services/index.js"

class MockingService {
    static async generateMockingUsers(num) {
        const usuarios = [];
        for (let i = 0; i < num; i++) {
            const role = Math.random() > 0.3 ? "user" : "admin";
            usuarios.push({
                _id: faker.database.mongodbObjectId(),
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                password: await createHash("coder123"),
                role,
                pets: []
            })
        }
        return usuarios;
    }

    static async generateMockingPets(num) {
        const mascotas = [];
        for (let i = 0; i < num; i++) {
            mascotas.push({
                _id: faker.database.mongodbObjectId(),
                name: faker.animal.petName(),
                specie: faker.helpers.arrayElement(['dog', 'cat', 'rabbit', 'parrot', 'fish', 'snake']),
                birthDate: faker.date.past(),
                adopted: false,
                image: faker.image.urlPicsumPhotos()
            })
        }
        return mascotas;
    }

    // Genero los metodos para generar usuarios y pets y guardarlos en la base de datos
    static async dbGenerateMockingUsers(num) {
        for (let i = 0; i < num; i++) {
            const role = Math.random() > 0.3 ? "user" : "admin";
            const user = {
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                password: await createHash("coder123"),
                role
            }
            try {
                await usersService.create(user);
            } catch (error) {
                return error;
            }
            
        }
    }

    static async dbGenerateMockingPets(num) {
        for (let i = 0; i < num; i++) {
            const pet = {
                name: faker.animal.petName(),
                specie: faker.helpers.arrayElement(['dog', 'cat', 'rabbit', 'parrot', 'fish', 'snake']),
                birthDate: faker.date.past(),
                adopted: false,
                // adopted: "prueba",
                image: faker.image.urlPicsumPhotos()
            }
            try {
                await petsService.create(pet);
            } catch (error) {
                return error;
            }
            
        }
    }
}

export default MockingService; 