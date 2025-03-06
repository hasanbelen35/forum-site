"use client";
import React, { useEffect } from "react";
import ProtectedRoute from "@/components/ProtectedRoutes";
import { useProfileStore } from "@/store/useProfileStore";

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

const ProfilePage: React.FC = () => {
  const { userData, profileData, loading, fetchUserData, updateProfile } = useProfileStore();

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    useProfileStore.setState((state) => ({
      profileData: {
        ...state.profileData,
        [name]: name === "birthday" ? new Date(value).toISOString() : value,
      },
    }));
  };

  const handleEditDatas = async () => {
    await updateProfile(profileData);
  };

  const formatDate = (dateString: string | null) => {
    return dateString ? dateString.split("T")[0] : "";
  };

  return (
    <ProtectedRoute>
      <div className="bg-white dark:bg-darkerBG w-full dark:text-white rounded-xl flex items-center pt-4 pl-4 ">
        <h2 className="text-2xl font-bold pb-5">
          PROFİL
        </h2>
      </div>
      <div className="flex justify-center items-center pt-4  w-full bg-gray-100 dark:bg-darkBg">
        <div className="bg-white w-full dark:bg-darkerBG p-8 rounded-lg shadow-lg ">
          <h1 className="text-2xl font-bold text-center text-darkTextGreen mb-4">Profil Bilgileri</h1>

          {loading ? (
            <p className="text-center text-gray-500">Yükleniyor...</p>
          ) : userData ? (
            <div className="space-y-4 dark:text-white">
              <p><strong className="dark:text-darkTextGreen">Ad Soyad:</strong> {userData.firstName} {userData.lastName}</p>
              <p><strong className="dark:text-darkTextGreen">Email:</strong> {userData.email}</p>
              <p><strong className="dark:text-darkTextGreen">Kullanıcı Adı:</strong> {userData.username}</p>

              <h2 className="text-xl font-semibold mt-4 text-center">Profili Güncelle</h2>

              {[
                { name: "profilePicture", type: "text", placeholder: "Profil Resmi URL" },
                { name: "birthday", type: "date", placeholder: "Doğum Günü" },
                { name: "linkedin", type: "text", placeholder: "LinkedIn" },
                { name: "github", type: "text", placeholder: "GitHub" },
                { name: "website", type: "text", placeholder: "Web Sitesi" },
                { name: "twitter", type: "text", placeholder: "Twitter" },
                { name: "instagram", type: "text", placeholder: "Instagram" },
                { name: "facebook", type: "text", placeholder: "Facebook" },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  value={field.name === "birthday" ? formatDate(profileData[field.name as keyof ProfileData]) : profileData[field.name as keyof ProfileData]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full dark:bg-darkerBG dark:text-white p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
    </ProtectedRoute>
  );
};

export default ProfilePage;
