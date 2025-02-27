import { create } from "zustand";
import { getAllPosts } from "@/api/post/post";

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
    fetchPosts: () => Promise<void>;
}

export const usePostStore = create<PostStore>((set) => ({
    posts: [],
    fetchPosts: async () => {
        try {
            const data = await getAllPosts();
            if (data) {
                set({ posts: data });
            }
        } catch (error) {
            console.error("An error occurred while fetching posts", error);
        }
    },
}));
