import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Toaster } from "./ui/Toast";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
