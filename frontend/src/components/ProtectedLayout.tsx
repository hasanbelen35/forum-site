"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = document.cookie.includes("auth_token"); 
    setIsAuthenticated(token);

    if (!token) {
      router.replace("/login"); 
    }
  }, [router]);

  if (isAuthenticated === null) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
}
