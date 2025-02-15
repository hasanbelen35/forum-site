'use client';
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    // STATES
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    // REGISTER-USER
    const registerUser = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/register`, {
                email,
                username,
                firstName,
                lastName,
                password
            });
            console.log(response.data);
            alert("basarılı")
        } catch (error) {
            console.error(error);
            alert("basarısız")

        }
    };

    // HANDLE-SUBMIT
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        registerUser();
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 to-teal-600">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="username" className="text-lg text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="first-name" className="text-lg text-gray-700">First Name</label>
                        <input
                            type="text"
                            id="first-name"
                            className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="last-name" className="text-lg text-gray-700">Last Name</label>
                        <input
                            type="text"
                            id="last-name"
                            className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter your last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-lg text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className="w-full py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
