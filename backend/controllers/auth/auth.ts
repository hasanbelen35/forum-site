import { registerUser, loginUser } from '../../services/auth/authServices.ts';
import { sendJWTtokenToClient } from '../../utils/jwt.ts';

interface RegisterUserInterface {
    email: string;
    password: string;
    username: string;
    firstName: string;
    lastName: string;
};
interface LoginUser {
    email: string;
    password: string;
};

const registerController = async (
    req: RegisterUserInterface,
    res: any
) => {

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

const loginController = async (req: LoginUser, res: any) => {
    try {
        const { email, password } = req.body;
        const login = await loginUser(email, password);

        if (login.error) {
            return res.status(401).json({ error: login.error });
        }

        return sendJWTtokenToClient(login, res);

    } catch (error) {
        res.status(500).json({ error: 'An error occurred while logging in!' });
    }
};



const profileController = async (req: any, res: any) => {
    res.send('Profile page');
}

export {
    registerController, loginController, profileController
};
