import express from 'express';
import dotenv from 'dotenv';
import DBconnection from './database/db'; 
import { PrismaClient } from '@prisma/client';

dotenv.config();

DBconnection.connect();

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

app.get('/users', async (req, res) => {
    const data = {
        name: 'Johassdn',
        email: 'asdssasd@gmai.com'
    };

    try {
        const newUser = await prisma.user.create({ data });
        res.json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the user' });
    }
});

// Sunucuyu başlat
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
