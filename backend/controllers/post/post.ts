import { createNewPost, getAllPosts, getAllPostByUserId } from "../../services/post/postServices.ts";

export const createPostController = async (req: any, res: any) => {
    try {
        const userId: number = req.user.id;

        const { title, content } = req.body;

        if (!userId || !title || !content) {
            return res.status(400).json({
                success: false,
                message: "userId, title, and content are required!"
            });
        }

        const post = await createNewPost(userId, title, content);

        if (!post) {
            return res.status(500).json({
                success: false,
                message: "There is a problem in creating the post!"
            });
        }

        return res.status(200).json({
            success: true,
            data: post
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "There is a problem in creating the post!"
        });
    }
};

// GET ALL POSTS

export const getAllPostsController = async (req: any, res: any) => {
    try {
        const data = await getAllPosts();
        if (!data) {
            return res.status(500).json({
                success: false,
                message: "An error occurred while fetching posts!"
            });
        }

        return res.status(200).json({
            success: true,
            posts: data
        });
    } catch (error) {
        // console.error(error);

        return res.status(500).json({
            success: false,
            message: "An error occurred while fetching posts!"
        });
    }
};
/*

export const getPaginatedPostsController = async (req: any, res: any) => {
    try {
        const cursor = req.query.cursor || null;
        const pageSize = parseInt(req.query.pageSize) || 5;

        const result = await getPaginatedPosts(cursor, pageSize);

        res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
*/
export const getPostsByUserController = async (req: any, res: any) => {
    try {
        const userID = req.user?.id;
        if (!userID) {
            return res.status(403).json({
                success: false,
                message: "User ID is required!"
            });
        }

        const data = await getAllPostByUserId(userID);

        return res.status(200).json({
            success: true,
            data: data
        });

    } catch (error) {
        console.error("Error fetching user posts:", error);
        return res.status(500).json({
            success: false,
            message: "Server error occurred while fetching user posts."
        });
    }
};
