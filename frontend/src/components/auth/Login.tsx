'use client';
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    // STATES
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // LOGIN USER
    const loginUser = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/login`, {
                email,
                password
            }, {
                withCredentials: true  // Çerezlerin paylaşılması için eklenen özellik
            });
            console.log(response.data);
            alert("Login Successful");
        } catch (error) {
            console.error(error);
            alert("Login Failed");
        }
    };

    // HANDLE SUBMIT
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        loginUser();
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg text-gray-700">Email</label>
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
                        <label htmlFor="password" className="text-lg text-gray-700">Password</label>
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
                            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
