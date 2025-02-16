import { isTokenIncluded } from "../../utils/jwt.ts";
import { verifyToken } from "../../utils/jwt.ts";

export const getAccessToRoute = async (req: any, res: any, next: any) => {
    try {
        if (!isTokenIncluded(req)) {
            return res.status(401).json({ error: 'You are not authorized to access this route' });
        };
        const token = req.cookies["access-token"];
        const decoded = verifyToken(token);
        req.user = {
            id: decoded.id,
            email: decoded.email
        };
        next();
    } catch (error) {
        return res.status(401).json({ error: 'You are not authorized to access this route' });
    }

};