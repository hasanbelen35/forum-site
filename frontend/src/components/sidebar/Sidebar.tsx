'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoutes';

interface SidebarINTF {
  name: string;
  route: string;
}

const Sidebar = () => {
  const sidebarItems: SidebarINTF[] = [
    { name: "Anasayfa", route: "/dashboard" },
    { name: "Gündem Haberleri", route: "/gundem" },
    { name: "İletişim", route: "/iletisim" },
    { name: "Kurallar", route: "/kurallar" },
    { name: "Amacımız", route: "/amacimiz" }
  ];

  const router = useRouter();

  return (
    <ProtectedRoute>
    <div id="sidebar" className="flex flex-col justify-center dark:bg-darkerBG border border-gray-300 dark:border-none  items-center p-4 bg-white rounded-xl h-min w-60 h-full">
      {sidebarItems && sidebarItems.map((item, index) => (
        <div key={index} className="w-full mb-4">
          <button
            onClick={() => router.push(item.route)} 
            className="w-full py-2 px-4 text-left text-lg font-semibold dark:hover:bg-darkBg transition-all duration-200 text-black dark:text-gray-300 hover:bg-gray-300 rounded-md"
          >
            {item.name}
          </button>
        </div>
      ))}
    </div>
    </ProtectedRoute>

  );
};

export default Sidebar;
