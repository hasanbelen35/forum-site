import axios from 'axios';

export const createNewPost = async (title: string, content: string) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/new-post`, {
            title,
            content,
        }, {
            withCredentials: true
        });

        return response.data;
    } catch (error) {
        console.error("Error creating post:", error);
        throw error;
    }
};

export const getAllPosts = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/get-all-posts`, {
            withCredentials: true
        });
        console.log(response.data.posts);
        return response.data.posts;
    } catch (error) {
        console.error("An error occurred while fetching posts!", error);
        return null;
    }
};

/*
export const getPaginatedPosts = async (cursor = null, pageSize = 5) => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/posts?pageSize=${pageSize}${cursor ? `&cursor=${cursor}` : ""}`
        );
        console.log(response.data);
        return response.data; 
    } catch (error) {
        console.error("An error occurred while fetching paginated posts:", error);
        return { data: [], nextCursor: null }; 
    }
};
*/

// GET POSTS BY USER
export const getPostsByUser = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/getPostsByUserId`, {
            withCredentials: true
        });

        return response.data;
    } catch (error) {
        console.error("An error occurred while fetching user posts!", error);
        return { success: false, data: [] };
    }
};

export const updatePostByUser = async (postId: number, title: string, content: string) => {
    try {
        console.log("Data sent to API:", { postId, title, content });

        const response = await axios.put(
            `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/update-post-by-user/${postId}`,
            { postId, title, content }, 
            { withCredentials: true }
        );
        return response.data;
    } catch (error) {
        console.error("An error occurred while updating the post!", error);
        return { success: false, message: "An error occurred while updating the post!" };
    }
};
