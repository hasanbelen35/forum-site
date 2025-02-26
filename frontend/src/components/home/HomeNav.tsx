'use client';
import React from 'react'

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

                    <div id="nav-buttons" className='flex justify-evenly items-center w-auto h-auto gap-3'>
                        {/* THEME SWITCHER */}
                        <ThemeSwitcher />


                        <button id='sign-in'
                            onClick={() => router.push("/auth/login")}

                            className='p-2 pr-6 pl-6 border  border-b-greenBg dark:text-white dark:border-none dark:hover:bg-darkTextGreen flex items-center justify-center gap-2  transition duration-300 rounded-lg text-black font-roboto  hover:text-textGreen hover:border hover:border-b-greenBg dark:bg-darkTextGreen '>

                            SignIn
                        </button>
                        <button id='sign-in'
                            onClick={() => router.push("/auth/register")}
                            className='p-2 pr-6 pl-6 border dark:border-green-400 text-textGreen border-b-greenBg flex items-center justify-center gap-2 font-roboto transition duration-300 rounded-lg hover:bg-greenBg hover:text-white'>

                            SignUp
                        </button>
                    </div>
                </div>
            </div>

            {/* UNDER NAV*/}
            <div className='shadow-2xl dark:bg-darkerBG dark:text-white pb-2 pt-2 flex justify-center items-center'>
                SECOND NAV
            </div>
        </div>
    )
}

export default Navbar
