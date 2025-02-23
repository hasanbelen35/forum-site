'use client';
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { getAllPosts } from "@/api/post/post";

const Home = () => {
    const [posts, setPosts] = useState([]); 

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
        <div className="h-screen w-full bg-grayBg dark:bg-darkBg flex">
            <Sidebar />

            <div className="flex-1 p-5">
                <h1 className="text-2xl text-center mt-10">All Posts</h1>

                <div className="flex flex-wrap justify-center ">
                    {posts.length > 0 ? (
                        posts.map((post) => (
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
    );
};

export default Home;
