"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import Loading from "@/components/Loading";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && isAuthenticated === false) {
            router.replace("/auth/login");
        }
    }, [isAuthenticated, loading, router]);

    if (loading) {
        return <Loading />;
    }

    if (!loading && isAuthenticated === false) {
        return null; 
    }

    return <>{children}</>;
};

export default ProtectedRoute;
