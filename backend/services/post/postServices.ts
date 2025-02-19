import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createNewPost = async (id: number, title: string, content: string) => {
    try {
        const newPost = await prisma.post.create({
            data: {
                title,
                content,
                userId: id,
            },
        });

        return newPost;
    } catch (error) {
        throw new Error("there is a problem when creating post!")
    }
};