import { registerUser, loginUser } from '../../services/auth/authServices.ts';
import { sendJWTtokenToClient } from '../../utils/jwt.ts';

// RegisterUserInterface'ı tip tanımlama olarak doğrudan kullanabiliriz
interface RegisterUserInterface {
    email: string;
    password: string;
    username: string;
    firstName: string;
    lastName: string;
};

// LoginUser tipini de doğru şekilde kullanmalıyız
interface LoginUser {
    email: string;
    password: string;
};
const registerController = async (
    req: { body: RegisterUserInterface },
    res: any,

) => {
    try {
        const authData = req.body;
        const newUser = await registerUser(authData);
        return res.status(201).json({
            success: true,
            data: newUser
        });
    } catch (err) {
        return res.status(500).json({ error: err.message || 'Registration failed' });
    }
};

// Login controller fonksiyonu
const loginController = async (req: { body: LoginUser }, res: any) => {
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


const logoutController = async (req: any, res: any) => {
    try {
        res.clearCookie('access-token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });

        return res.status(200).json({
            success: true,
            message: 'Logout successful',
        });
    } catch (error) {
        return res.status(500).json({ error: "An error occurred while logging out!" });
    }
};




export {
    registerController,
    loginController,

    logoutController
};
