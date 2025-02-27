import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createNewPost = async (id: number, title: string, content: string,) => {
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
        console.error(error);
        throw new Error("There is a problem when creating post!");
    }
};


// GET ALL POSTS
// TODO : WILL DO PAGINATION 
export const getAllPosts = async () => {
    try {
        const data = await prisma.post.findMany({
            include: {
                user: {
                    include: {
                        profile: true
                    }
                }
            }
        });
        return data
    } catch (error) {
        throw new Error("An error occurred while fetching posts!");
    }
};