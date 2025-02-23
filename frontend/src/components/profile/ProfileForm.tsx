'use client';
import React, { useState, useEffect } from 'react';
import { getUserDatas, editUserDatas } from '@/api/user/user';

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

const Page: React.FC = () => {
    const [userDatas, setUserDatas] = useState<UserData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [profileData, setProfileData] = useState<ProfileData>({
        profilePicture: '',
        birthday: '',
        linkedin: '',
        github: '',
        website: '',
        twitter: '',
        instagram: '',
        facebook: '',
    });

    // FETCH USER DATA WHEN PAGE LOADS
    useEffect(() => {
        handleGetDatas();
    }, []);

    // FETCH USER DATA
    const handleGetDatas = async () => {
        setLoading(true);
        const userDatas = await getUserDatas();
        if (userDatas) {
            setUserDatas(userDatas);
            if (userDatas.profile) {
                setProfileData(userDatas.profile);
            }
        } else {
            setUserDatas(null);
        }
        setLoading(false);
    };

    // UPDATE PROFILE
    const handleEditDatas = async () => {
        setLoading(true);
        const updatedUser = await editUserDatas(profileData);
        if (updatedUser) {
            setUserDatas(updatedUser);
        }
        setLoading(false);
    };

    // HANDLE INPUT CHANGES
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfileData((prev) => ({
            ...prev,
            [name]: name === 'birthday' ? new Date(value).toISOString() : value,
        }));
    };

    // FORMAT DATE
    const formatDate = (dateString: string | null) => {
        if (!dateString) return '';
        return dateString.split('T')[0]; 
    };

    const profileFields: { name: keyof ProfileData; type: string; placeholder: string }[] = [
        { name: 'profilePicture', type: 'text', placeholder: 'Profile Picture URL' },
        { name: 'birthday', type: 'date', placeholder: 'Birthday' },
        { name: 'linkedin', type: 'text', placeholder: 'LinkedIn' },
        { name: 'github', type: 'text', placeholder: 'GitHub' },
        { name: 'website', type: 'text', placeholder: 'Website' },
        { name: 'twitter', type: 'text', placeholder: 'Twitter' },
        { name: 'instagram', type: 'text', placeholder: 'Instagram' },
        { name: 'facebook', type: 'text', placeholder: 'Facebook' },
    ];

    return (
        <div className="p-6 max-w-lg mx-auto h-screen flex flex-col dark:bg-darkBg w-full">
            <h1 className="text-2xl font-bold mb-4">Profile Information</h1>

            {loading ? (
                <p>Loading...</p>
            ) : userDatas ? (
                <div className="space-y-4">
                    <p><strong>First Name:</strong> {userDatas.firstName} {userDatas.lastName}</p>
                    <p><strong>Email:</strong> {userDatas.email}</p>
                    <p><strong>Username:</strong> {userDatas.username}</p>

                    <h2 className="text-xl font-semibold mt-4">Update Profile</h2>

                    {profileFields.map((field) => (
                        <input
                            key={field.name}
                            type={field.type}
                            name={field.name}
                            value={field.name === 'birthday' ? formatDate(profileData[field.name]) : profileData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            className="w-full p-2 border rounded"
                        />
                    ))}

                    <button
                        onClick={handleEditDatas}
                        className="bg-blue-500 text-white p-2 rounded w-full"
                    >
                        Update
                    </button>
                </div>
            ) : (
                <p>User not found.</p>
            )}
        </div>
    );
};

export default Page;
