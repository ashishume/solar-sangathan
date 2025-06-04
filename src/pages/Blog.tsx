import { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import BlogSidebar from "../components/BlogSidebar";
import { blogService } from "../services/blogService";
import type { BlogPost } from "../services/blogService";
import type { Category } from "@/admin/types/category";
import type { Tag } from "@/admin/types/tag";

const Blog = () => {
  const [recentBlogs, setRecentBlogs] = useState<BlogPost[]>([]);
  const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // const [, setTotalPages] = useState(1);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await blogService.getCategories();
        setCategories(categoriesData);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    const fetchTags = async () => {
      try {
        const tagsData = await blogService.getTags();
        setTags(tagsData);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
    fetchTags();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const [recentData, allData] = await Promise.all([
          blogService.getRecentBlogs(4),
          blogService.getAllBlogs(currentPage, 10),
        ]);

        setRecentBlogs(recentData);
        setAllBlogs(allData);
        // setTotalPages(allData.pagination.pages);
        setError(null);
      } catch (err) {
        setError("Failed to fetch blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage]);

  useEffect(() => {
    const fetchBlogsByCategory = async () => {
      try {
        setLoading(true);
        if (selectedCategory === "All") {
          const [recentData, allData] = await Promise.all([
            blogService.getRecentBlogs(4),
            blogService.getAllBlogs(currentPage, 10),
          ]);
          setRecentBlogs(recentData);
          setAllBlogs(allData);
        } else {
          const category = categories.find((c) => c.name === selectedCategory);
          if (!category) return;

          const response = await blogService.getBlogsByCategory(
            category._id,
            currentPage,
            10
          );
          setAllBlogs(response.data);
          // setTotalPages(response.pagination.pages);
        }
        setError(null);
      } catch (err) {
        setError("Failed to fetch blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogsByCategory();
  }, [selectedCategory, currentPage, categories]);

  useEffect(() => {
    const searchBlogs = async () => {
      if (!searchQuery.trim()) {
        // If search query is empty, fetch all blogs
        const [recentData, allData] = await Promise.all([
          blogService.getRecentBlogs(4),
          blogService.getAllBlogs(currentPage, 10),
        ]);
        setRecentBlogs(recentData);
        setAllBlogs(allData);
        return;
      }

      try {
        setLoading(true);
        const response = await blogService.searchBlogs(searchQuery);
        setAllBlogs(response);
        setError(null);
      } catch (err) {
        setError("Failed to search blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(searchBlogs, 500);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery, currentPage]);

  // Mock data for sidebar (this should also come from API in a real implementation)
  const popularPosts = recentBlogs;
  // const categoryCounts = categories.map((category) => ({
  //   name: category.name,
  //   count: 0, // This should come from API
  // }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-lg text-gray-600">
          Stay updated with the latest news, trends, and insights from the solar
          energy industry.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="All">All Categories</option>
            {categories.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error ? (
        <div className="text-center text-red-600">{error}</div>
      ) : loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Recent Blogs */}
            {selectedCategory === "All" && !searchQuery && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Recent Posts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recentBlogs.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                  ))}
                </div>
              </section>
            )}

            {/* All Blogs */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {searchQuery
                  ? "Search Results"
                  : selectedCategory === "All"
                  ? "All Posts"
                  : `${selectedCategory} Posts`}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {allBlogs?.map((blog) => (
                  <BlogCard key={blog._id} blog={blog} />
                ))}
              </div>
            </section>

            {/* Pagination */}
            {/* <div className="flex justify-center mt-12">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-1 rounded-lg bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50"
              >
                Previous
              </button>
              <span className="px-4 py-2 mx-1 rounded-lg bg-red-600 text-white">
                {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 rounded-lg bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50"
              >
                Next
              </button>
            </div> */}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar
              popularPosts={popularPosts}
              categories={categories}
              tags={tags}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
