import { createNewPost, getAllPosts } from "../../services/post/postServices.ts";

export const createPostController = async (req: any, res: any) => {
    try {
        const userId: number = req.user.id;  // Kullanıcı id'si alınır

        const { title, content } = req.body;  // Request body'den post başlığı ve içeriği alınır

        // Gerekli alanlar kontrol ediliyor
        if (!userId || !title || !content) {
            return res.status(400).json({
                success: false,
                message: "userId, title, and content are required!"
            });
        }

        // Yeni post oluşturuluyor
        const post = await createNewPost(userId, title, content);

        // Post oluşturulamazsa hata dönülüyor
        if (!post) {
            return res.status(500).json({
                success: false,
                message: "There is a problem in creating the post!"
            });
        }

        // Başarıyla post oluşturulursa 200 dönülüyor
        return res.status(200).json({
            success: true,
            data: post
        });
    } catch (error) {
        console.error(error);

        // Hata mesajı dönülüyor
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