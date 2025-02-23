"use client";
import ProtectedLayout from "@/components/ProtectedLayout"; 
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";

export default function ProtectedRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedLayout>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ProtectedLayout>
  );
}
