"use client";

import ProtectedRoute from "@/components/ProtectedRoutes";
import AllPosts from '@/components/post/AllPosts'
// TODO : WILL DO PAGINATION 
// TODO : WILL DO PAGINATION 
// TODO : WILL DO PAGINATION 

const Dashboard = () => {

    return (
        <ProtectedRoute>
            <div className="h-screen bg-grayBg dark:bg-darkBg flex overflow-hidden">
                <div className="flex-1 overflow-auto">
                    <div className="p-4 ml-4 rounded-xl bg-white dark:border-none dark:bg-darkerBG dark:text-white border border-gray-300">
                        <h1 className="text-2xl font-bold ">Tüm Gönderiler</h1>
                    </div>
                    {/*  POSTS */}
                    <div>
                        <AllPosts />

                    </div>

                </div>
            </div>
        </ProtectedRoute>
    );
};

export default Dashboard;
