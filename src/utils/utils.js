import { faker } from "@faker-js/faker";

export const generateFakeUser = () => {
    const role = Math.random() > 0.3 ? "user" : "admin";
    return {
        _id: faker.database.mongodbObjectId(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: "coder123",
        role,
        pets: []
    }
}
export const generateFakePet = () => {
    const domesticAnimals = ['dog', 'cat', 'rabbit', 'parrot', 'fish', 'snake'];
    const specie = domesticAnimals[Math.floor(Math.random() * domesticAnimals.length)]; 
    return {
        _id: faker.database.mongodbObjectId(),
        name: faker.animal.petName(),
        specie,
        birthDate: faker.date.past(),
        adopted: false,
        owner: null,
        image: faker.image.urlPicsumPhotos()
    }
}

//export default generateFakeUser;