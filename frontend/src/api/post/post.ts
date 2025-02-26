import axios from 'axios';

export const createNewPost = async (title: string, content: string) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/new-post`, {
            title,
            content
        }, {
            withCredentials: true
        });
        (response.data);

    } catch (error) {
        (error, "error in create post");

    }
};

export const getAllPosts = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/get-all-posts`, { 
            withCredentials: true 
        });
        (response.data.posts);
        return response.data.posts;
    } catch (error) {
        console.error("An error occurred while getting post datas!", error);
        return null; 
    }
};
