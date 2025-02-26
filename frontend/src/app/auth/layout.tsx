import HomeNav from '@/components/home/HomeNav';  

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return ( 
        <div className=" min-h-screen bg-gray-100 dark:bg-darkBg">
        <HomeNav />
            {children}
        </div>
    );
}
