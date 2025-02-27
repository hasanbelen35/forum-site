import { create } from "zustand";
import { getAllPosts, getPostsByUser } from "@/api/post/post";

interface Post {
    id: number;
    title: string;
    content: string;
    user: {
        username: string;
        profile: {
            profilePicture: string | null;
        };
    };
}

interface PostStore {
    posts: Post[];
    userPosts: Post[];
    fetchPosts: () => Promise<void>;
    fetchUserPosts: () => Promise<void>;
}

export const usePostStore = create<PostStore>((set) => ({
    posts: [],
    userPosts: [],
    fetchPosts: async () => {
        try {
            const data = await getAllPosts();
            if (data) {
                set({ posts: data });
            }
        } catch (error: any) {
            console.error("An error occurred while fetching posts:", error.message);
            console.error("Server response:", error.response?.data || "No server response");
        }
    },
    fetchUserPosts: async () => {
        try {
            const data = await getPostsByUser();
            if (data.success) {
                set({ userPosts: data.data }); // ✅ Hatalı `data` yerine `data.data` kullanıldı
            } else {
                console.error("API success:false döndü!", data);
            }
        } catch (error: any) {
            console.error("An error occurred while fetching user posts:", error.message);
            console.error("Server response:", error.response?.data || "No server response");
        }
    },
}));
