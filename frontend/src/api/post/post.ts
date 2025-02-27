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
        console.error("Error in create post:", error);
        throw error;
    }
};

export const getAllPosts = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/get-all-posts`, {
            withCredentials: true
        });
        console.log(response.data.posts)
        return response.data.posts;
    } catch (error) {
        console.error("An error occurred while getting post data!", error);
        return null;
    }
};
/*
export const getPaginatedPosts = async (cursor = null, pageSize = 5) => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/posts?pageSize=${pageSize}${cursor ? `&cursor=${cursor}` : ""}`
        );
        console.log(response.data)
        return response.data; 
    } catch (error) {
        console.error("Postları çekerken hata oluştu:", error);
        return { data: [], nextCursor: null }; 
    }
};
*/

export const getPostsByUser = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/getPostsByUserId`, {
            withCredentials: true
        });

        return response.data;
    } catch (error) {
        console.error("An error ocurred while getting posts!", error);
        return { success: false, data: [] };
    }
};

