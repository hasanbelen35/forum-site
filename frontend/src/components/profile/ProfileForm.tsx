"use client";
import React, { useState, useEffect, useCallback } from "react";
import { getUserDatas, editUserDatas } from "@/api/user/user";

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

const ProfilePage: React.FC = () => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [profileData, setProfileData] = useState<ProfileData>({
        profilePicture: "",
        birthday: "",
        linkedin: "",
        github: "",
        website: "",
        twitter: "",
        instagram: "",
        facebook: "",
    });

    // Kullanıcı verisini çek
    const fetchUserData = useCallback(async () => {
        setLoading(true);
        try {
            const data = await getUserDatas();
            if (data) {
                setUserData(data);
                if (data.profile) {
                    setProfileData(data.profile);
                }
            }
        } catch (error) {
            console.error("Kullanıcı verisi alınırken hata oluştu:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUserData();
    }, [fetchUserData]);

    // Kullanıcı profilini güncelle
    const handleEditDatas = async () => {
        setLoading(true);
        try {
            const updatedUser = await editUserDatas(profileData);
            if (updatedUser) {
                setUserData(updatedUser);
            }
        } catch (error) {
            console.error("Profil güncellenirken hata oluştu:", error);
        } finally {
            setLoading(false);
        }
    };

    // Input değişikliklerini yönet
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfileData((prev) => ({
            ...prev,
            [name]: name === "birthday" ? new Date(value).toISOString() : value,
        }));
    };

    // Tarihi formatla (YYYY-MM-DD)
    const formatDate = (dateString: string | null) => {
        return dateString ? dateString.split("T")[0] : "";
    };

    // Profil alanları için yapı
    const profileFields: { name: keyof ProfileData; type: string; placeholder: string }[] = [
        { name: "profilePicture", type: "text", placeholder: "Profil Resmi URL" },
        { name: "birthday", type: "date", placeholder: "Doğum Günü" },
        { name: "linkedin", type: "text", placeholder: "LinkedIn" },
        { name: "github", type: "text", placeholder: "GitHub" },
        { name: "website", type: "text", placeholder: "Web Sitesi" },
        { name: "twitter", type: "text", placeholder: "Twitter" },
        { name: "instagram", type: "text", placeholder: "Instagram" },
        { name: "facebook", type: "text", placeholder: "Facebook" },
    ];

    return (
        <div className="flex justify-center items-center h-screen w-full bg-gray-100 dark:bg-darkBg">
            <div className="bg-white dark:bg-darkerBG p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center text-darkTextGreen mb-4">
                    Profil Bilgileri
                </h1>

                {loading ? (
                    <p className="text-center text-gray-500">Yükleniyor...</p>
                ) : userData ? (
                    <div className="space-y-4">
                        <p>
                            <strong>Ad Soyad:</strong> {userData.firstName} {userData.lastName}
                        </p>
                        <p>
                            <strong>Email:</strong> {userData.email}
                        </p>
                        <p>
                            <strong>Kullanıcı Adı:</strong> {userData.username}
                        </p>

                        <h2 className="text-xl font-semibold mt-4 text-center">Profili Güncelle</h2>

                        {profileFields.map((field) => (
                            <input
                                key={field.name}
                                type={field.type}
                                name={field.name}
                                value={field.name === "birthday" ? formatDate(profileData[field.name]) : profileData[field.name]}
                                onChange={handleChange}
                                placeholder={field.placeholder}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        ))}

                        <button
                            onClick={handleEditDatas}
                            className="w-full bg-green-600 text-white py-3 rounded-md text-lg transition-all duration-300 hover:bg-green-700"
                        >
                            Güncelle
                        </button>
                    </div>
                ) : (
                    <p className="text-center text-red-500">Kullanıcı bulunamadı.</p>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
