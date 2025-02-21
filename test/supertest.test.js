//Importamos Supertest
import supertest from "supertest";

//Importamos chai, recuerden que es una librería de aserciones para Node JS. 
import { expect } from "chai";

import { faker } from "@faker-js/faker";
//Vamos a crear la constante "requester", quien se encarga de hacer las peticiones al servidor. 

const requester = supertest("http://localhost:8080");

describe("Testing de la App Web Adoptame", () => {
    describe("Testeamos las rutas de Adoptions", () => {
        let adoptionId = "";
        it("GET /api/adoptions", async () => {
            const response = await requester.get("/api/adoptions");
            expect(response.status).to.eql(200);
            expect(response.body.payload).to.be.an("array");
        });

        it("POST /api/adoptions/:uid/:pid", async () => {
            const userMock ={
                first_name: "Test User First Name",
                last_name: "Test User Last Name",
                email: faker.internet.email(),
                password: "coder123"
            }
            const pichichoMock = {
                name: "Test Pet Name",
                specie: "Test Pet Specie",
                birthDate: "2021-03-10"
            }

            const userResponse = await requester.post("/api/sessions/register").send(userMock);
            const petResponse = await requester.post("/api/pets").send(pichichoMock);
            const userId = userResponse.body.payload
            const petId = petResponse.body.payload._id
            
            const response = await requester.post(`/api/adoptions/${userId}/${petId}`)
            adoptionId = response.body.payload._id;
            expect(response._body.status).equals("success");
        })

        it("GET /api/adoptions/:aid", async () => {
            const response = await requester.get(`/api/adoptions/${adoptionId}`);
            expect(response.status).to.eql(200);
            expect(response.body.payload).to.have.property("_id");
        });
    });
})
