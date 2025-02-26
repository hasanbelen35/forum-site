import { hashPassword } from "../../utils/hash.ts";
import { PrismaClient } from '@prisma/client';
import { comparePassword } from "../../utils/hash.ts";
import { generateToken } from "../../utils/jwt.ts";

interface RegisterUserInterface {
    email: string;
    password: string;
    username: string;
    firstName: string;
    lastName: string;
};

const prisma = new PrismaClient();
export const registerUser = async (userData: RegisterUserInterface) => {
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
        console.log(err)
        throw new Error('An error occurred while registering!');
    }
};


export const loginUser = async (email: string, password: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            return { error: 'User not found' };
        }
        const isPasswordMatch = await comparePassword(password, user.password);
        if (!isPasswordMatch) {
            return { error: 'Invalid credentials' };
        }
        const token = generateToken(user.id, user.email);
        return { id: user.id, email: user.email, token };  

    } catch (error) {
        throw new Error('An error occurred while logging in!');
    }
};
