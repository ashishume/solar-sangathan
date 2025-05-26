import { Link } from "react-router-dom";

const Dashboard = () => {
  const sections = [
    {
      title: "Blog Posts",
      description: "Manage blog posts and articles",
      link: "/admin/blog-posts",
      color: "bg-blue-500",
    },
    {
      title: "Tags",
      description: "Manage tags for categorizing content",
      link: "/admin/tags",
      color: "bg-green-500",
    },
    {
      title: "Categories",
      description: "Manage content categories and hierarchy",
      link: "/admin/categories",
      color: "bg-purple-500",
    },
    {
      title: "New Blog Post",
      description: "Create a new blog post",
      link: "/admin/blog-posts/new",
      color: "bg-red-500",
    },
    {
      title: "New Category",
      description: "Create a new category",
      link: "/admin/categories/new",
      color: "bg-yellow-500",
    },
    {
      title: "New Tag",
      description: "Create a new tag",
      link: "/admin/tags/new",
      color: "bg-indigo-500",
    },
    {
      title: "Testimonials",
      description: "Manage testimonials",
      link: "/admin/testimonials",
      color: "bg-orange-500",
    },
    {
      title: "Channels",
      description: "Manage channels",
      link: "/admin/channels",
      color: "bg-pink-500",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Link
            key={section.title}
            to={section.link}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-600">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
