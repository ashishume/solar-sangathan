import { useEffect } from "react";
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  const menuItems = [
    {
      title: "Dashboard",
      path: "/admin",
      icon: "📊",
    },
    {
      title: "Blog Posts",
      path: "/admin/blog",
      icon: "📝",
    },
    {
      title: "Categories",
      path: "/admin/categories",
      icon: "📑",
    },
    {
      title: "Tags",
      path: "/admin/tags",
      icon: "🏷️",
    },
    {
      title: "Testimonials",
      path: "/admin/testimonials",
      icon: "💬",
    },
    {
      title: "Channels",
      path: "/admin/channels",
      icon: "📢",
    },
    {
      title: "Carousel",
      path: "/admin/carousel",
      icon: "🖼️",
    },
    {
      title: "Videos",
      path: "/admin/video",
      icon: "🎥",
    },
    {
      title: "Important Info",
      path: "/admin/important-information",
      icon: "ℹ️",
    },
    {
      title: "About",
      path: "/admin/about",
      icon: "👥",
    },
    {
      title: "Contact",
      path: "/admin/contact",
      icon: "📞",
    },
    {
      title: "Join",
      path: "/admin/join",
      icon: "👥",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white min-h-screen shadow-lg flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-gray-800 text-2xl font-bold">Admin Panel</h2>
          </div>
          <nav className="flex-1 py-4 overflow-y-auto max-h-[calc(100vh-10rem)]">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-6 py-3.5 text-gray-600 hover:bg-gray-50 transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                    : ""
                }`}
              >
                <span className="mr-3.5 text-xl">{item.icon}</span>
                <span className="font-medium">{item.title}</span>
              </Link>
            ))}
          </nav>
          <div className="border-t border-gray-200 mt-auto">
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-6 py-3.5 text-gray-600 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="mr-3.5 text-xl">🚪</span>
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
