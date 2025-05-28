import { Link } from "react-router-dom";

const Dashboard = () => {
  const sections = [
    {
      title: "Blog Posts",
      description: "Manage blog posts and articles",
      link: "/admin/blog-posts",
      color: "bg-blue-500",
      icon: "📝",
    },
    {
      title: "Categories",
      description: "Manage content categories and hierarchy",
      link: "/admin/categories",
      color: "bg-purple-500",
      icon: "📑",
    },
    {
      title: "Tags",
      description: "Manage tags for categorizing content",
      link: "/admin/tags",
      color: "bg-green-500",
      icon: "🏷️",
    },
    {
      title: "Testimonials",
      description: "Manage testimonials and reviews",
      link: "/admin/testimonials",
      color: "bg-orange-500",
      icon: "💬",
    },
    {
      title: "Channels",
      description: "Manage communication channels",
      link: "/admin/channels",
      color: "bg-pink-500",
      icon: "📢",
    },
    {
      title: "Carousel",
      description: "Manage homepage carousel slides",
      link: "/admin/carousel",
      color: "bg-indigo-500",
      icon: "🖼️",
    },
    {
      title: "Videos",
      description: "Manage video content",
      link: "/admin/video/new",
      color: "bg-red-500",
      icon: "🎥",
    },
    {
      title: "Important Information",
      description: "Manage important announcements and updates",
      link: "/admin/important-information",
      color: "bg-yellow-500",
      icon: "ℹ️",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sections.map((section) => (
          <Link
            key={section.title}
            to={section.link}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div
              className={`${section.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4`}
            >
              {section.icon}
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {section.title}
            </h2>
            <p className="text-gray-600">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
