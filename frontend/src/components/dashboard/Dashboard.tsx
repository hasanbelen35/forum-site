"use client";
import React, { useEffect } from "react";
import { usePostStore } from "@/store/usePostStore"; 
import ProtectedRoute from "@/components/ProtectedRoutes";
import { FaCommentDots } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { IoSaveOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

// TODO : WILL DO PAGINATION 
// TODO : WILL DO PAGINATION 
// TODO : WILL DO PAGINATION 

const Dashboard = () => {
    const { posts, fetchPosts } = usePostStore();

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <ProtectedRoute>
            <div className="h-screen bg-grayBg dark:bg-darkBg flex overflow-hidden">
                <div className="flex-1 overflow-auto">
                    <div className="p-4 ml-4 rounded-xl bg-white dark:border-none dark:bg-darkerBG dark:text-white border border-gray-300">
                        <h1 className="text-2xl">ALL POSTS</h1>
                    </div>

                    <div className="flex flex-wrap justify-center flex-col">
                        {posts.length > 0 ? (
                            posts.map((post) => (
                                <div key={post.id} className="bg-white dark:text-white w-3/4 dark:border-none border border-gray-300 dark:bg-darkerBG p-4 m-4 rounded-lg shadow-md">
                                    {/* PROFİL RESMİ */}
                                    <div className="text-4xl cursor-pointer">
                                        {post.user?.profile?.profilePicture ? (
                                            <img
                                                src={post.user.profile.profilePicture}
                                                alt="Profil Resmi"
                                                className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600 shadow-md"
                                            />
                                        ) : (
                                            <CgProfile className="text-gray-500 dark:text-gray-300" />
                                        )}

                                    </div>
                                    {/* username */}
                                    <div >
                                        <p className="text-darkTextGreen">{post.user?.username && <span>{post.user.username}</span>}  </p>
                                    </div>

                                    {/* BAŞLIK VE AÇIKLAMA */}
                                    <div className="pl-14 pt-2">
                                        <h1 className="text-2xl font-semibold cursor-pointer">  {post.title}</h1>
                                        <p className="text-sm mt-2">  {post.content}</p>
                                    </div>

                                    {/* BUTONLAR: YORUM, BEĞENİ, KAYDET */}
                                    <div className="w-full flex gap-8 mt-2 pl-14">
                                        <button className="mt-2 rounded-md border flex items-center pr-2 pl-2">
                                            <FaCommentDots />
                                            Comment
                                        </button>
                                        <button className="mt-2 rounded-md border flex items-center pr-2 pl-2">
                                            <AiFillLike />
                                            Like
                                        </button>
                                        <button className="mt-2 rounded-md border flex items-center pr-2 pl-2">
                                            <IoSaveOutline />
                                            Save
                                        </button>
                                    </div>
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

export default Dashboard;
