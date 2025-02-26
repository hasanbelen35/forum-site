import { verifyToken } from '../../utils/jwt.ts';
export const me = async (req: any, res: any, next: any) => {
    const token = req.cookies["access-token"];

    if (!token) {
        return res.status(401).json({ authenticated: false });
    }

    try {
        verifyToken(token);
        return res.status(200).json({ authenticated: true });
    } catch (error) {
        return res.status(401).json({ authenticated: false });
    }
};