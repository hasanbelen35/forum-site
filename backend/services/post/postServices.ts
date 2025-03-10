import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
//import { LikeDataInterface } from '../../interfaces/postInterface.ts';
interface UpdateData {
    postId: number;
    userId: number;
    title: string;
    content: string;
};
export interface LikeDataInterface {
    postID: number,
    userID: number
};

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

//  DELETE POST BY ID THAT BELONGS USER
export const deletePostByIdService = async (userId: number, postId: number) => {
    try {

        const post = await prisma.post.findFirst({
            where: {
                id: postId,
                userId: userId,
            },
        });

        if (!post) {
            throw new Error("Bu gönderiyi silme yetkiniz yok veya gönderi bulunamadı.");
        }

        await prisma.post.delete({
            where: { id: postId },
        });

        return { success: true, message: "Post deleted succesfully" };
    } catch (error) {


        return { success: false, message: "An error ocurred while post deleting!!" };
    }
};

// LIKE POST BY ID 
export const likePostService = async (likeData: LikeDataInterface) => {
    try {
        const { postID, userID } = likeData;

        const post = await prisma.post.findUnique({
            where: { id: postID }
        });
        

        if (!post) {
            return { success: false, message: "Post bulunamadı." };
        }

        const existingLike = await prisma.postLike.findFirst({
            where: {
                postId: postID,
                userId: userID
            }
        });

        if (existingLike) {
            return { success: false, message: "You already liked this post!" };
        }

        await prisma.postLike.create({
            data: {
                postId: postID,
                userId: userID
            }
        });
        

        return { success: true, message: "POST LIKED" };
    } catch (error) {
        console.error("Beğeni eklenirken hata oluştu:", error);
        return { success: false, message: "Beğeni eklenirken hata oluştu." };
    }
};


