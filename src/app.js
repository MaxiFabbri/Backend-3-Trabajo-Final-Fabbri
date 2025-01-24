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
import { addLogger } from './utils/logger.js';
import { cpus } from "os";

const app = express();
const PORT = process.env.PORT||8080;
const numeroDeProcesadores = cpus().length;

const ready = () => {
    console.log("Server ready on port: ",PORT);
    console.log("Numero de procesadores: ",numeroDeProcesadores);
    dbConnect()
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
