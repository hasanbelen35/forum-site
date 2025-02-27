import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const checkPostOwner = async (req: any, res: any, next: any) => {
    try {
        const userId: number = req.user.id; 
        const postId: number = Number(req.body.id || req.params.id); 

        if (!postId) {
            return res.status(400).json({
                success: false,
                message: "Post ID is required!"
            });
        }


        const post = await prisma.post.findUnique({ where: { id: postId } });

        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found!"
            });
        }

      
        if (post.userId !== userId) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to modify this post!"
            });
        }

        
        next();
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "An error occurred while checking post ownership!"
        });
    }
};
