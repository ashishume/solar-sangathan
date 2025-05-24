import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import BlogSidebar from "../components/BlogSidebar";
import { blogService } from "../services/blogService";
import type { BlogPost } from "../services/blogService";

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data for sidebar
  const popularPosts = [
    {
      id: "1",
      title: "The Future of Solar Energy in India",
      excerpt:
        "Exploring the potential of solar energy in India's growing economy...",
      coverImage: "/images/blog/solar-future.jpg",
      author: {
        name: "Dr. Rajesh Kumar",
        avatar: "/images/team/rajesh.jpg",
      },
      publishedAt: "2024-03-15",
      readTime: 5,
      content: "Full content here...",
      category: "Solar Technology",
      tags: ["Solar Energy", "India", "Future"],
    },
    {
      id: "2",
      title: "Understanding Solar Panel Efficiency",
      excerpt:
        "A comprehensive guide to solar panel efficiency and performance...",
      coverImage: "/images/blog/panel-efficiency.jpg",
      author: {
        name: "Priya Sharma",
        avatar: "/images/team/priya.jpg",
      },
      publishedAt: "2024-03-10",
      readTime: 4,
      content: "Full content here...",
      category: "Solar Technology",
      tags: ["Efficiency", "Technology", "Guide"],
    },
    {
      id: "3",
      title: "Solar Installation Best Practices",
      excerpt: "Learn about the best practices for solar panel installation...",
      coverImage: "/images/blog/installation.jpg",
      author: {
        name: "Amit Patel",
        avatar: "/images/team/amit.jpg",
      },
      publishedAt: "2024-03-05",
      readTime: 6,
      content: "Full content here...",
      category: "Installation Guide",
      tags: ["Installation", "Best Practices", "Guide"],
    },
  ] as BlogPost[];

  const categoryCounts = [
    { name: "Solar Technology", count: 12 },
    { name: "Industry News", count: 8 },
    { name: "Installation Guide", count: 15 },
    { name: "Market Trends", count: 10 },
    { name: "Sustainability", count: 7 },
  ];

  const popularTags = [
    { name: "Solar Energy", count: 25 },
    { name: "Renewable Energy", count: 20 },
    { name: "Technology", count: 18 },
    { name: "Sustainability", count: 15 },
    { name: "Green Living", count: 12 },
    { name: "Innovation", count: 10 },
    { name: "India", count: 8 },
    { name: "Market Trends", count: 7 },
  ];

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const data = await blogService.getBlogById(id);
        setBlog(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-red-600">
            {error || "Blog post not found"}
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => navigate("/blog")}
              className="text-red-600 hover:text-red-700"
            >
              ← Back to Blog
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <button
              onClick={() => navigate("/blog")}
              className="text-red-600 hover:text-red-700 mb-8"
            >
              ← Back to Blog
            </button>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {blog.title}
                </h1>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-gray-900">
                      {blog.author.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(blog.publishedAt).toLocaleDateString()} ·{" "}
                      {blog.readTime} min read
                    </p>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none">{blog.content}</div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    <span
                      key={blog.category}
                      className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                    >
                      {blog.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar
              popularPosts={popularPosts}
              categories={categoryCounts}
              tags={popularTags}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
