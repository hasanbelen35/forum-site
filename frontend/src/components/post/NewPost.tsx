"use client";
import React, { useState } from "react";
import { createNewPost } from "@/api/post/post";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoutes";

const NewPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const router = useRouter();

    const handleCreatePost = async () => {
        if (!title.trim() || !content.trim()) {
            return;
        }


        try {
            await createNewPost(title, content);
            // console.log("Post successfully created!");
            router.push("/dashboard");
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCreatePost();
    };

    return (
        <ProtectedRoute>
            <div className="flex flex-col justify-center  items-center h-screen w-full bg-gray-100 dark:bg-darkBg dark:text-white">
                <div className="bg-white dark:bg-darkerBG w-full mb-4 rounded-xl flex items-center pt-4 pl-4 ">
                    <h2 className="text-2xl font-bold pb-5">
                        Yeni Gönderi Oluştur
                    </h2>
                </div>
                <div className="bg-white h-screen w-full   dark:bg-darkerBG p-8 rounded-lg shadow-md ">

                    <div>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            {/* Title input */}
                            <div className="flex flex-col">
                                <label htmlFor="title" className="font-medium">Başlık:</label>
                                <input
                                    type="text"
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Başlık giriniz..."
                                    required
                                    className="dark:bg-darkBg dark:text-white p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            {/* Content input */}
                            <div className="flex flex-col">
                                <label htmlFor="content" className="font-medium">İçerik:</label>
                                <textarea
                                    id="content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="İçerik giriniz..."
                                    required
                                    className="dark:bg-darkBg dark:text-white p-3 h-32 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                                />
                            </div>



                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-3 rounded-md text-lg transition-all duration-300 hover:bg-green-700"
                            >
                                Gönderiyi Kaydet
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </ProtectedRoute>
    );
};

export default NewPost;
