"use client";
import React, { useEffect, useState } from "react";
import { getAllPosts } from "@/api/post/post";
import ProtectedRoute from "@/components/ProtectedRoutes";

interface Post {
    id: number;
    title: string;
    content: string;
}

const Home = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const fetchPosts = async () => {
        try {
            const data = await getAllPosts();
            if (data) {
                setPosts(data);
            }
        } catch (error) {
            console.error("Gönderiler alınırken hata oluştu:", error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <ProtectedRoute>
            <div className="h-screen w-full bg-grayBg dark:bg-darkBg flex">
                <div className="flex-1 p-5">
                    <h1 className="text-2xl text-center mt-10">All Posts</h1>

                    <div className="flex flex-wrap justify-center">
                        {posts.length > 0 ? (
                            posts.map((post: Post) => (
                                <div key={post.id} className="bg-white dark:text-white dark:bg-darkerBG w-1/3 p-4 m-4 rounded-lg shadow-md">
                                    <h1 className="text-lg font-semibold">{post.title}</h1>
                                    <p className="text-sm mt-2">{post.content}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center mt-10">Gönderi bulunamadı.</p>
                        )}
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default Home;
