import Footer from "@/components/footer/Footer";
import Navbar from "@/components/nav/Navbar";

export default function DashboardLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
}
