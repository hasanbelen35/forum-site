"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);
    const [checked, setChecked] = useState(false); 

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/me`, {
                    withCredentials: true,
                });
                const data = await res.data;
                setIsAuthenticated(data.authenticated);
            } catch (error) {
                console.error("Auth check failed:", error);
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
                setChecked(true);
            }
        };

        checkAuth();
    }, []);

    return { isAuthenticated, loading, checked };
};

export default useAuth;
