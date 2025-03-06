import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface UserData {
    id: number;
    profilePicture: string;
    birthday: string; 
    linkedin: string;
    github: string;
    website: string;
    twitter: string;
    instagram: string;
    facebook: string;
}

export const editUserMeService = async (userData: UserData) => {
    try {
        const { id, profilePicture, birthday, linkedin, github, website, twitter, instagram, facebook } = userData;

        const profile = await prisma.profile.upsert({
            where: { userId: id }, 
            update: { 
                profilePicture,
                birthday: birthday ? new Date(birthday) : null,
                linkedin,
                github,
                website,
                twitter,
                instagram,
                facebook,
            },
            create: { 
                userId: id,
                profilePicture,
                birthday: birthday ? new Date(birthday) : null, 
                linkedin,
                github,
                website,
                twitter,
                instagram,
                facebook,
            },
        });

        return profile;
    } catch (error) {
        throw new Error("An error occurred while updating the user profile!");
    }
};