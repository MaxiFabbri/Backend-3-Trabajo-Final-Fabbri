import {faker} from "@faker-js/faker"; 
import { createHash } from "../utils/index.js";

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

}

export default MockingService; 