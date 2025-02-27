import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface UpdateData {
    postId: number;
    userId: number;
    title: string;
    content: string;
}

// Create a New Post
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
        throw new Error("An error occurred while creating the post!");
    }
};

// Get All Posts
// TODO: Implement Pagination
export const getAllPosts = async () => {
    try {
        const data = await prisma.post.findMany({
            include: {
                user: {
                    include: {
                        profile: true,
                    },
                },
            },
        });
        return data;
    } catch (error) {
        throw new Error("An error occurred while fetching posts!");
    }
};

/*
// Get Paginated Posts
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
};
*/

// Get All Posts by User ID
export const getAllPostByUserId = async (userID: number) => {
    try {
        const posts = await prisma.post.findMany({
            where: { userId: userID },
            orderBy: { createdAt: "desc" },
        });

        return posts;
    } catch (error) {
        return [];
    }
};

// Update a Post by User
export const updatePostByUser = async (updateData: UpdateData) => {
    try {
        const { postId, userId, title, content } = updateData;

        if (!postId || !userId || !title || !content) {
            throw new Error("All required fields must be provided for the update!");
        }

        const updatedPost = await prisma.post.update({
            where: { id: postId, userId },
            data: { title, content },
        });

        return {
            success: true,
            message: "Post updated successfully.",
            data: updatedPost,
        };
    } catch (error: any) {
        console.error("An error occurred while updating the post:", error.message);
        return {
            success: false,
            message: "An error occurred while updating the post!",
            error: error.message,
        };
    }
};
