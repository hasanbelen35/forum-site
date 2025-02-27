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
/*
// PAGINATED GET POST 
export const getPaginatedPosts = async (cursor = null, pageSize = 5) => {
    const posts = await prisma.post.findMany({
        take: pageSize, 
        skip: cursor ? 1 : 0, 
        cursor: cursor ? { id: cursor } : undefined, 
        orderBy: { createdAt: "desc" }, 
    });

    return {
        data: posts,
        nextCursor: posts.length ? posts[posts.length - 1].id : null, 
    };
};*/

export const getAllPostByUserId = async (userID: number) => {
    try {
        const posts = await prisma.post.findMany({
            where: { userId: userID },
            orderBy: { createdAt: "desc" }
        });

        return posts
    } catch (error) {
        return [];
    }
};