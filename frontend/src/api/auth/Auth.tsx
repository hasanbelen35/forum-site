import axios from 'axios';

export const loginUser = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/login`, {
            email,
            password
        }, {
            withCredentials: true
        });

    } catch (error) {
        console.error(error);
        alert("Login Failed");
    }
};

export const registerUser = async (email: string, username: string, firstName: string, lastName: string, password: string) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/register`, {
            email,
            username,
            firstName,
            lastName,
            password
        });
        if (response.data) {
        };


    } catch (error) {
        console.error(error);

    }
};

export const logoutUser = async () => { 
    try {
         await axios.get(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/logout`, {
            withCredentials: true
        });
    } catch (error) {
        return console.error(error);
    }
};