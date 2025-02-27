"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
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

interface ProfileStore {
  userData: UserData | null;
  profileData: ProfileData;
  loading: boolean;
  fetchUserData: () => Promise<void>;
  updateProfile: (newData: ProfileData) => Promise<void>;
}

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      userData: null,
      profileData: {
        profilePicture: "",
        birthday: "",
        linkedin: "",
        github: "",
        website: "",
        twitter: "",
        instagram: "",
        facebook: "",
      },
      loading: false,

      // Kullanıcı verisini çek
      fetchUserData: async () => {
        set({ loading: true });
        try {
          const data = await getUserDatas();
          if (data) {
            set({
              userData: data,
              profileData: data.profile || {
                profilePicture: "",
                birthday: "",
                linkedin: "",
                github: "",
                website: "",
                twitter: "",
                instagram: "",
                facebook: "",
              },
            });
          }
        } catch (error) {
          console.error("Kullanıcı verisi alınırken hata oluştu:", error);
        } finally {
          set({ loading: false });
        }
      },

      // Profil güncelle
      updateProfile: async (newData) => {
        set({ loading: true });
        try {
          const updatedUser = await editUserDatas(newData);
          if (updatedUser) {
            set({
              userData: updatedUser,
              profileData: updatedUser.profile || {
                profilePicture: "",
                birthday: "",
                linkedin: "",
                github: "",
                website: "",
                twitter: "",
                instagram: "",
                facebook: "",
              },
            });
          }
        } catch (error) {
          console.error("Profil güncellenirken hata oluştu:", error);
        } finally {
          set({ loading: false });
        }
      },
    }),
    { name: "profile-storage" } 
  )
);
