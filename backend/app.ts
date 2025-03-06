// server.ts// app.ts
import express from 'express';
import dotenv from 'dotenv';
import DBconnection from './database/db.ts';
import { PrismaClient } from '@prisma/client';
import router from './routes/route.ts';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();
DBconnection.connect();

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
app.use("/api", router);


export default app;
