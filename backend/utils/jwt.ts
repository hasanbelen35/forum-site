import jwt from 'jsonwebtoken'



const { JWT_SECRET_KEY, JWT_EXPIRES_IN } = process.env;

// GENERATE TOKEN
export const generateToken = (id: number, email: string) => {

    const jwt_key = jwt.sign({ id: id, email: email }, JWT_SECRET_KEY as string, {
        expiresIn: JWT_EXPIRES_IN
    });
    return jwt_key;
};
// SEND JWT
export const sendJWTtokenToClient = (user: any, res: any) => {
    const token = generateToken(user.id, user.email);
    if (!token) {
        return res.status(500).json({ error: 'Token generation failed' });
    }

    const { JWT_COOKIE_EXPIRES, NODE_ENV } = process.env;

    return res.status(200).cookie('access-token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + parseInt(JWT_COOKIE_EXPIRES) * 1000 * 60),
        secure: NODE_ENV === 'development' ? false : true
    }).json({ success: true, token });
};

export const isTokenIncluded = (req: any) => {
    return req.cookies && req.cookies["access-token"];
};

// VERIFY TOKEN
export const verifyToken = (token: string) => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY as string);
        return decoded;
    } catch (error) {
        throw new Error('Invalid token');
    }

};
