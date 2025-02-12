import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';

import dbConnect from "./utils/dbConnect.util.js"
import errorHandler from './middlewares/errorHandler.js';
import { cpus } from "os";
import addLogger from "./utils/logger.js";
import cluster from "cluster";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from "swagger-ui-express"; 

const app = express();
const PORT = process.env.PORT||8080;
const numeroDeProcesadores = cpus().length;

const ready = () => {
    console.log("Server ready on port: ",PORT);
    console.log("Numero de procesadores: ",numeroDeProcesadores);
    console.log("Process ID: ",process.pid);
    dbConnect()
    console.log("mongodb connected");
}

// middlewares
app.use(addLogger)
app.use(express.json());
app.use(cookieParser());


// Routes
app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks',mocksRouter);

// Error Handler
app.use(errorHandler)

app.listen(PORT, ready)

// Documentation with swagger
const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Documentación de la App Adoptame", 
            description: "App dedicada a encontrar familias para los perritos de la calle"
        }
    }, 
    apis: ["./src/docs/**/*.yaml"]
}

const specs = swaggerJSDoc(swaggerOptions); 
app.use("/apidocs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs)); 
