import axios from 'axios';
interface ProfileData {
    profilePicture: string;
    birthday: string;
    linkedin: string;
    github: string;
    website: string;
    twitter: string;
    instagram: string;
    facebook: string;
}

interface UserData {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    profile?: ProfileData;
}

export const getUserDatas = async () => {

    try {
        const response = await axios.get<{ success: boolean; user: UserData }>(
            `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/getUserMe`,
            { withCredentials: true }
        );

        return response.data.user;  
    } catch (error) {
        console.error('Kullanıcı verileri alınırken hata oluştu:', error);
    }
};

export const editUserDatas = async (profileData: ProfileData) => {
    try {
        const response = await axios.put<{ success: boolean; user: UserData }>(
            `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/editUserMe`,
            profileData,
            { withCredentials: true }
        );
        console.log('response', response.data);
       return response.data.user;
    } catch (error) {
        console.error('Profil güncellenirken hata oluştu:', error);
    }
};