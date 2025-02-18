'use client';
import React from 'react'
import { LiaSignInAltSolid } from "react-icons/lia";
import { MdOutlineAccessibilityNew } from "react-icons/md";
import { LuPenLine } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from 'next/navigation';
import ThemeSwitcher from '@/components/themeSwitcher/ThemeSwitcher'
const Navbar: React.FC = () => {
    const router = useRouter();

    return (
        <div>
            <div className='w-full border-b-2 flex items-center justify-center pb-3 pt-3 dark:bg-darkerBG dark:border-darkBg'>
                <div className='container mx-auto flex justify-around  w-full  items-center'>
                    {/* LOGO */}
                    <div id="logo" className='cursor-pointer' >
                        <img src="/logo.jpg" alt="Logo"
                            onClick={() => router.push("/")}
                            className="w-24 h-auto mix-blend-multiply  " />
                    </div>
                    <div id="nav-search" className=' flex justify-center items-center p-2 border border-greenBg rounded-lg dark:bg-white '>
                        <input type="text" className='w-64 focus:border-none focus:ring-0 dark:bg-white ' placeholder='Search post,hashtag,author...' />
                        <div>
                            <AiOutlineSearch />
                        </div>
                    </div>
                    <div id="nav-buttons" className='flex justify-evenly items-center w-auto h-auto gap-3'>
                        {/* THEME SWITCHER */}
                        <ThemeSwitcher />
                        {/* NAV-BUTTONS */}
                        <button id="new-post" className='p-2 pr-6 pl-6 border dark:border-green-400 text-textGreen border-b-greenBg flex items-center justify-center gap-2 font-roboto transition duration-300 rounded-lg hover:bg-greenBg hover:text-white'>
                            <LuPenLine />
                            New Post
                        </button>
                        <button id='sign-in'
                            onClick={() => router.push("/login")}
                            className='p-2 pr-6 pl-6 border border-b-greenBg dark:text-white dark:border-none dark:hover:bg-darkTextGreen flex items-center justify-center gap-2  transition duration-300 rounded-lg text-black font-roboto  hover:text-textGreen hover:border hover:border-b-greenBg '>
                            <MdOutlineAccessibilityNew />
                            SignIn
                        </button>

                        <button id='sign-up'
                            onClick={() => router.push("/register")}
                            className='bg-greenBg   flex items-center justify-center gap-2 text-white p-2 pr-6 pl-6 rounded-lg transition duration-300  hover:bg-white font-bold font-roboto hover:text-textGreen hover:border hover:border-green-500'>
                            <LiaSignInAltSolid />
                            SignUp
                        </button>
                        <div className='text-4xl text-gray-600 cursor-pointer dark:text-gray-400'>
                            <FaRegUserCircle />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
