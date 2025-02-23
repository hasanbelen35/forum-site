'use client';
import React, { useState } from 'react';
import { loginUser } from '../../api/auth/Auth';
import { useRouter } from 'next/navigation'
const Login = () => {
    const router = useRouter();
    // STATES
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // HANDLE SUBMIT
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const login = await loginUser(email, password);

            router.push('/dashboard');
        

    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full h-3/4 max-w-md dark:bg-darkerBG ">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6 dark:text-white">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-lg text-gray-700 dark:text-gray-400">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password" className="text-lg text-gray-700 dark:text-gray-400">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="w-full py-3 bg-greenBg text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </div>
            </form>

            <div className=' text-black dark:text-white font-roboto flex items-center justify-between mt-6'>
                <div className='flex items-center justify-center gap-1'>
                    <input type="checkbox" className='cursor-pointer' />
                    Remember Me
                </div>
                <p className='dark:text-darkTextGreen cursor-pointer'>Forget password</p>
            </div>
            <div className='flex justify-center items-center gap-1 flex-col mt-10'>
                <p className='dark:text-white'>Don't you have an account?</p>
                <p
                    className='text-greenBg cursor-pointer underline'
                    onClick={() => router.push("/")}
                >create account</p>
            </div>
        </div>
    );
};

export default Login;
