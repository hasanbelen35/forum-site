import { hashPassword } from "../../utils/hash.ts";
import { RegisterUserInterface } from "../../interfaces/authInterface.ts";
import { PrismaClient } from '@prisma/client';
import { Response } from 'express';

const prisma = new PrismaClient();
export const registerUser = async (UserData: RegisterUserInterface, res: Response) => {
    try {
        const { email, password, username, firstName, lastName } = userData;
        const hashedPassword = await hashPassword(password);
        const data = {
            email,
            password: hashedPassword,
            firstName,
            lastName,
            username
        };
        const newUser = await prisma.user.create({ data });
        return newUser;
    } catch (err) {
        res.status(500).json({ error: 'An Error occurred while registering!' });
    }
};