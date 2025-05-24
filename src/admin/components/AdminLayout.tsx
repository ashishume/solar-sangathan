import { useEffect } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuth");
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 min-h-screen">
          <div className="p-4">
            <h2 className="text-white text-2xl font-bold">Admin Panel</h2>
          </div>
          <nav className="mt-4">
            <Link
              to="/admin"
              className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
            >
              Dashboard
            </Link>
            <Link
              to="blog-posts"
              className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
            >
              Blog Posts
            </Link>
            <Link
              to="tags"
              className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
            >
              Tags
            </Link>
            <Link
              to="categories"
              className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
            >
              Categories
            </Link>
            <Link
              to="home-content"
              className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
            >
              Home Content
            </Link>
            <Link
              to="about-content"
              className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
            >
              About Content
            </Link>
            <Link
              to="training"
              className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
            >
              Training
            </Link>
            <Link
              to="shop"
              className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
            >
              Shop
            </Link>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700"
            >
              Logout
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
