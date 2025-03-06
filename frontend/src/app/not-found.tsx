"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
const NotFound = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-darkerBG text-center transition-opacity duration-500" style={{ opacity: show ? 1 : 0 }}>
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mt-4">
                Üzgünüz, aradığınız sayfa bulunamadı!
            </p>
            <div className="mt-6">
                <Link href="/dashboard">
                    <button
                        className="px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg hover:bg-blue-600 transition-all">
                        Ana Sayfaya Dön
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
