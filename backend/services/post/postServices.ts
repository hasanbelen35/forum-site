import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createNewPost = async (id: number, title: string, content: string) => {
    try {
       

        // Yeni postu oluşturuyoruz
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

export const getAllPosts = async () => {
    try {
        const data = await prisma.post.findMany({});
        return data;
    } catch (error) {
        throw new Error("An error occurred while fetching posts!");
    }
};