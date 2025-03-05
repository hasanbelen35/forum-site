"use client"; 

import { usePathname } from "next/navigation";
import Navbar from "@/components/nav/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname() || ""; 

    const isAuthPage = pathname.startsWith("/auth"); 
    const isHomePage = pathname === "/"; 

    return <>{isAuthPage || isHomePage ? children : <MainLayout>{children}</MainLayout>}</>;
}



function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div className="dark:bg-darkBg bg-grayBg flex-grow">
                <main className="container mx-auto pb-4 flex gap-1 px-4 md:px-8 lg:px-16 dark:bg-darkBg pt-4">
                    <aside className="flex md:block">
                        <Sidebar />
                    </aside>
                    <section className="w-full">{children}</section>
                </main>
            </div>
            <Footer />
        </>
    );
}
