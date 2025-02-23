import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { editUserMeService } from '../../services/user/userService.ts'


export const getUserMeController = async (req: any, res: any) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const user = await prisma.user.findUnique({
            where: { id: req.user.id },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                username: true,
                profile: {
                    select: {
                        profilePicture: true,
                        role: true,
                        birthday: true,
                        linkedin: true,
                        github: true,
                        website: true,
                        twitter: true,
                        instagram: true,
                        facebook: true,
                        verified: true,
                        emailVerified: true,
                    }
                }
            }
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found!' });
        }

        return res.json({ success: true, user });
    } catch (error) {
        console.error('getUserMeController Error:', error);
        return res.status(500).json({ error: 'Server Error!' });
    }
};

export const editUserMeController = async (req: any, res: any) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const userData = req.body;
        userData.id = req.user.id;
        const profile = await editUserMeService(userData);

        return res.json({ success: true, data: profile });
    } catch (error) {
        console.error('editUserMeController Error:', error);
        return res.status(500).json({ error: 'Server Error!' });
    }
};