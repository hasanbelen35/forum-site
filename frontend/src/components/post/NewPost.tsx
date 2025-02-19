'use client';
import React, { useState } from 'react';
import { createNewPost } from '@/api/post/post';
import Sidebar from '@/components/sidebar/Sidebar'
import { useRouter } from 'next/navigation';
const NewPost = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const router = useRouter();
   
    const handleCreatePost = async () => {
        try {

            await createNewPost(title, content);
            console.log('Post successfully created!');
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCreatePost();
        router.push("/");

    };

    return (
        <div className=' container mx-auto   h-screen w-full dark:bg-darkBg dark:text-white flex  items-start  pt-12 gap-52'>
            <div>
                <Sidebar />
            </div>

            {/** FORM */}
            <div className='flex flex-col justify-center items-center '>
                <h2 className='text-2xl font-bold text-darkTextGreen'>Yeni Gönderi Oluştur</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    {/* Title input */}
                    <div className='flex flex-col justify-center gap-1 '>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Başlık giriniz..."
                            required
                            className='dark:bg-darkerBG dark:text-white w-80  h-12 rounded-xl p-4    '
                        />
                    </div>

                    {/* Content input */}
                    <div className='flex flex-col justify-center gap-1 '>
                        <label htmlFor="content">Content:</label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="İçerik giriniz..."
                            required
                             className='dark:bg-darkerBG dark:text-white w-80  h-full rounded-xl p-4    '
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button type="submit" className='mt-5 text-center w-80 dark:bg-darkTextGreen h-12 rounded-xl text-xl transition-all duration-300 dark:hover:bg-green-700'>Save Post</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default NewPost;
