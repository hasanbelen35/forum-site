import express from 'express';
import dotenv from 'dotenv';
import DBconnection from './database/db'; // Dosya uzantısını .js yerine .ts olarak değiştirin
import { PrismaClient } from '@prisma/client';

// dotenv yapılandırmasını başlat
dotenv.config();

// Veritabanı bağlantısını yap
DBconnection.connect();

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

// Kullanıcıları almak için GET isteği
app.get('/users', async (req, res) => {
    const data = {
        name: 'Johassdn',
        email: 'asdssasd@gmai.com'
    };

    try {
        // Prisma ile yeni kullanıcı oluşturma
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
