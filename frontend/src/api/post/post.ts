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
