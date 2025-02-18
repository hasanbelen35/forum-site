'use client';
import React, { useState } from 'react';
import { registerUser } from '../../api/auth/Auth';
const Register = () => {
    // STATES
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    // HANDLE-SUBMIT
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        registerUser(email, username, firstName, lastName, password);
        setEmail('');
        setUsername('');
        setFirstName('');
        setLastName('');
        setPassword('');
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md dark:bg-darkerBG">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6 dark:text-white">Register</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-lg text-gray-700 dark:text-gray-400">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="mt-2 p-3 border dark:text-white border-gray-300 dark:bg-darkBg rounded-md focus:outline-none focus:ring-2 "
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="username" className="text-lg text-gray-700 dark:text-gray-400">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="mt-2 p-3 border dark:text-white border-gray-300 dark:bg-darkBg rounded-md focus:outline-none focus:ring-2 "
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="first-name" className="text-lg text-gray-700 dark:text-gray-400">First Name</label>
                    <input
                        type="text"
                        id="first-name"
                        className="mt-2 p-3 border dark:text-white border-gray-300 rounded-md dark:bg-darkBg focus:outline-none focus:ring-2 "
                        placeholder="Enter your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="last-name" className="text-lg text-gray-700 dark:text-gray-400">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        className="mt-2 p-3 border dark:text-white border-gray-300 dark:bg-darkBg rounded-md focus:outline-none focus:ring-2 "
                        placeholder="Enter your last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password" className="text-lg text-gray-700 dark:text-gray-400">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="mt-2 p-3 border dark:text-white border-gray-300 dark:bg-darkBg rounded-md focus:outline-none focus:ring-2 "
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="w-full py-3 bg-greenBg text-white font-semibold rounded-md "
                    >
                        Register
                    </button>
                </div>
            </form>
            <div className='text-black dark:text-white flex flex-col items-center justify-center mt-5'>
                <p> Have you already an acount?</p>
                <span className='text-greenBg'>Sign In</span>
            </div>
        </div>
    );
};

export default Register;
