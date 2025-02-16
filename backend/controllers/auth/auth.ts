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

// Register controller fonksiyonu
const registerController = async (
    req: { body: RegisterUserInterface }, // req.body'yi tipliyoruz
    res: any
) => {
    try {
        const authData = req.body;
        const newUser = await registerUser(authData, res);  // Yeni kullanıcıyı kaydediyoruz
        res.status(201).json({
            success: true,
            data: newUser
        });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
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
        res.clearCookie('access-token').status(200).json({
            success: true,
            message: 'Logout successful'
        });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while logging out!' });
    }
};

const profileController = async (req: any, res: any) => {
    try {
        res.status(200).json({ success: true, data: req.user });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching profile!' });
    }
};

export {
    registerController,
    loginController,
    profileController,
    logoutController
};
