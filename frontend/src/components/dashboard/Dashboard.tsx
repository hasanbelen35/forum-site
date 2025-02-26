"use client";
import React, { useEffect, useState } from "react";
import { getAllPosts } from "@/api/post/post";
import ProtectedRoute from "@/components/ProtectedRoutes";
import { FaCommentDots } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { IoSaveOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

interface Post {
    id: number;
    title: string;
    content: string;
}

const Dashboard = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const fetchPosts = async () => {
        try {
            const data = await getAllPosts();
            if (data) {
                setPosts(data);
            }
        } catch (error) {
            console.error("An Error ocurrred while fetching posts ", error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <ProtectedRoute>
            <div className="h-screen  bg-grayBg dark:bg-darkBg flex  ">
                <div className="flex-1 ">
                    <div className=" p-4 ml-4 rounded-xl bg-white dark:border-none dark:bg-darkerBG dark:text-white border border-gray-300">
                        <h1 className="text-2xl  ">ALL POSTS</h1>
                    </div>

                    <div className="flex flex-wrap justify-center flex-col ">
                        {posts.length > 0 ? (
                            posts.map((post: Post) => (
                                <div key={post.id} className="bg-white dark:text-white w-3/4  dark:border-none border border-gray-300  dark:bg-darkerBG  p-4 m-4 rounded-lg shadow-md">
                                    {/* PROFİLE BUTTUN
                                     TODO : will ad profile image later */}
                                    <div className="text-4xl cursor-pointer">
                                        <CgProfile />
                                    </div>
                                    {/* TİTLE,DESCRIPTION */}
                                    <div className="pl-14">
                                        <h1 className="text-lg font-semibold cursor-pointer ">{post.title}</h1>
                                        <p className="text-sm mt-2">{post.content}</p>
                                    </div>

                                    {/* BUTTONS, comment , like ,save */}
                                    <div className="w-full flex gap-8 mt-2 pl-14">
                                        <button className="mt-2 rounded-md border flex items-center pr-2 pl-2  ">
                                            <FaCommentDots />
                                            Comment
                                        </button>
                                        <button className="mt-2 rounded-md border flex items-center pr-2 pl-2  ">
                                            <AiFillLike />
                                            Like
                                        </button>
                                        <button className="mt-2 rounded-md border flex  items-center pr-2 pl-2">
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
