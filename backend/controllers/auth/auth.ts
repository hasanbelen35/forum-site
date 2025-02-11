import { registerUser } from '../../services/auth/authServices.ts';
import { Request, Response } from 'express';
import { RegisterUserInterface } from '../../interfaces/authInterface.ts';

const registerController = async (req: Request<{}, {}, RegisterUserInterface>, res: Response) => {
    try {
        const authData = req.body;
        const newUser = await registerUser(authData, res);
        res.status(201).json({
            success: true,
            data: newUser
        });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });

    }
};

export {
    registerController
};
