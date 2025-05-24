import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import BlogCard from "../components/BlogCard";
import BlogSidebar from "../components/BlogSidebar";
import { blogService } from "../services/blogService";
import type { BlogPost } from "../services/blogService";

const categories = [
  "All",
  "Solar Technology",
  "Industry News",
  "Installation Guide",
  "Market Trends",
  "Sustainability",
];

const Blog = () => {
  const [recentBlogs, setRecentBlogs] = useState<BlogPost[]>([]);
  const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data for sidebar
  const popularPosts = recentBlogs;
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
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const [recentData, allData] = await Promise.all([
          blogService.getRecentBlogs(3),
          blogService.getAllBlogs(currentPage),
        ]);
        setRecentBlogs(recentData);
        setAllBlogs(allData);
        setError(null);
      } catch (err) {
        setError("Failed to fetch blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage]);

  const handleCategoryChange = async (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    try {
      setLoading(true);
      if (category === "All") {
        const data = await blogService.getAllBlogs(1);
        setAllBlogs(data);
      } else {
        const data = await blogService.getBlogsByCategory(category, 1);
        setAllBlogs(data);
      }
      setError(null);
    } catch (err) {
      setError("Failed to fetch blogs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      setLoading(true);
      const data = await blogService.searchBlogs(searchQuery);
      setAllBlogs(data);
      setError(null);
    } catch (err) {
      setError("Failed to search blogs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, trends, and insights from the
            solar industry
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blogs..."
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {error && <div className="text-center text-red-600 mb-8">{error}</div>}

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Recent Blogs */}
              {selectedCategory === "All" && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Recent Posts
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {recentBlogs.map((blog) => (
                      <BlogCard key={blog.id} blog={blog} />
                    ))}
                  </div>
                </section>
              )}

              {/* All Blogs */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {selectedCategory === "All"
                    ? "All Posts"
                    : `${selectedCategory} Posts`}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {allBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>
              </section>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-4 py-2 mx-1 rounded-lg bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="px-4 py-2 mx-1 rounded-lg bg-red-600 text-white">
                  {currentPage}
                </span>
                <button
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className="px-4 py-2 mx-1 rounded-lg bg-white text-gray-600 hover:bg-gray-100"
                >
                  Next
                </button>
              </div>
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
        )}
      </div>
      <Footer />
    </main>
  );
};

export default Blog;
