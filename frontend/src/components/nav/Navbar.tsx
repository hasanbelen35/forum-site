"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { LuPenLine } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";
import ThemeSwitcher from "@/components/themeSwitcher/ThemeSwitcher";
import { logoutUser } from "@/api/auth/Auth";
import { useProfileStore } from "@/store/useProfileStore";

const Navbar: React.FC = () => {
    const router = useRouter();
    const [isOpenProfile, setIsOpenProfile] = useState<boolean>(false);
    const profileMenuRef = useRef<HTMLDivElement>(null);
    const { userData} = useProfileStore();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
                setIsOpenProfile(false);
            }
        };

        if (isOpenProfile) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpenProfile]);

    const handleToggleProfile = () => {
        setIsOpenProfile((prev) => !prev);
    };

    const handleLogout = async () => {
        await logoutUser();
        router.push("/auth/login");
    };

    const profilePicture = useMemo(() => userData?.profile?.profilePicture, [userData]);
    return (
        <div>
            {/* Ana Navbar */}
            <div className="w-full border-b-2 flex items-center justify-center pb-3 pt-3 dark:bg-darkerBG dark:border-darkBg">
                <div className="container mx-auto flex justify-between items-center px-4">
                    {/* LOGO */}
                    <div id="logo" className="cursor-pointer" onClick={() => router.push("/dashboard")}>
                        <img src="/logo.jpg" alt="Logo" className="w-24 h-auto mix-blend-multiply" />
                    </div>

                    {/* Arama Çubuğu */}
                    <div className="hidden md:flex items-center p-2 border border-greenBg rounded-lg dark:bg-white">
                        <input
                            type="text"
                            className="w-64 focus:border-none focus:ring-0 dark:bg-white outline-none"
                            placeholder="Gönderi , Yazar , Hashtag ara ..."
                        />
                        <AiOutlineSearch className="ml-2 text-gray-500" />
                    </div>

                    {/* Navbar Butonları */}
                    <div className="flex items-center space-x-4">
                        {/* Tema Değiştirici */}
                        <ThemeSwitcher />

                        {/* Yeni Post Butonu */}
                        <button
                            onClick={() => router.push("/newPost")}
                            className="p-2 font-medium pr-6 pl-6 border dark:border-green-400 text-textGreen border-b-greenBg flex items-center gap-2 rounded-lg hover:bg-greenBg hover:text-white transition"
                        >
                            <LuPenLine />
                            Yeni Gönderi
                        </button>

                        {/* Profil Butonu */}
                        <div className="relative" ref={profileMenuRef}>
                            <div
                                onClick={handleToggleProfile}
                                className="text-4xl text-gray-600 cursor-pointer dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
                            >
                                {profilePicture? (
                                    <img
                                        src={profilePicture}
                                        alt="Profil Resmi"
                                        className="w-10 h-10 object-cover rounded-full border-2 border-white"
                                    />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center text-sm">
                                        <FaRegUserCircle />
                                    </div>
                                )}
                            </div>

                            {/* Açılır Profil Menüsü */}
                            {isOpenProfile && (
                                <div className="absolute right-0 top-full mt-3 w-52 rounded-lg bg-white shadow-lg dark:bg-darkBg border border-gray-200 dark:border-gray-700 animate-fadeIn">
                                    {/* Profile */}
                                    <div
                                        onClick={() => router.push("/profile")}
                                        className="p-3 hover:bg-grayBg dark:hover:bg-darkerBG cursor-pointer"
                                    >
                                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                            Profil
                                        </p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">
                                        Profil Ayarları
                                        </p>
                                    </div>
                                    <hr className="border-gray-200 dark:border-gray-700" />

                                    {/* DATA */}
                                    <div
                                        onClick={() => router.push("/user-data")}
                                        className="p-3 hover:bg-grayBg dark:hover:bg-darkerBG cursor-pointer"
                                    >
                                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                            Gönderiler
                                        </p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">
                                            Gönderiler Ayarları
                                        </p>
                                    </div>
                                    <hr className="border-gray-200 dark:border-gray-700" />

                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left p-3 text-sm text-red-500 hover:bg-red-100 dark:hover:bg-red-900 rounded-b-lg"
                                    >
                                        Çıkış Yap
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* İkincil Navbar */}
            <div className="shadow-2xl dark:bg-darkerBG dark:text-white pb-2 pt-2 flex justify-center items-center">
                SECOND NAV
            </div>
        </div>
    );
};

export default Navbar;
