import axios from 'axios';

export const createNewPost = async (title: string, content: string) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/new-post`, {
            title,
            content
        }, {
            withCredentials: true
        });
        console.log(response.data);

    } catch (error) {
        console.log(error, "error in create post");

    }
};