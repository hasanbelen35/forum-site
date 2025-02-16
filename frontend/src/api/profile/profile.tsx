import axios from 'axios';
export const getProfile = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/profile`, {
            withCredentials: true
        }
        );
        const resultData = response.data.data;
        return resultData;

    } catch (error) {
        console.log(error);
    }
};