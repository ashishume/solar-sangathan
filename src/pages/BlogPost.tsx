import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlogSidebar from "../components/BlogSidebar";
import { blogService } from "../services/blogService";
import type { BlogPost } from "../services/blogService";
import type { Category } from "@/admin/types/category";
import type { Tag } from "@/admin/types/tag";

export interface CategoryCount {
  name: string;
  count: number;
}

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [popularPosts, setPopularPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [popularTags, setPopularTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        setLoading(true);
        // Fetch blog post
        const blogData = await blogService.getBlogById(id);
        setBlog(blogData);

        // Fetch recent posts for sidebar
        const recentPosts = await blogService.getRecentBlogs(3);
        setPopularPosts(recentPosts);

        // Fetch categories
        const categories = await blogService.getCategories();
        setCategories(categories);

        // Fetch tags
        const tags = await blogService.getTags();
        setPopularTags(
          tags.map((tag: Tag) => ({
            name: tag.name,
            count: tag.usageCount,
          }))
        );

        setError(null);
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
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
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Cover Image */}
            {blog.coverImage && (
              <div className="relative h-[400px]">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-8">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {blog.title}
                </h1>
                <div className="flex items-center gap-4 text-gray-600">
                  {blog.author && (
                    <>
                      <div className="flex items-center gap-2">
                        <img
                          src={blog.author.avatar}
                          alt={blog.author.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <span>{blog.author.name}</span>
                      </div>
                      <span>•</span>
                    </>
                  )}
                  {blog.publishedAt && (
                    <>
                      <span>
                        {new Date(blog.publishedAt).toLocaleDateString()}
                      </span>
                      <span>•</span>
                    </>
                  )}
                  {blog.readTime && <span>{blog.readTime} min read</span>}
                </div>
              </div>

              {/* Blog Content */}
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <span
                    key={blog.category._id}
                    className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                  >
                    {blog.category.name}
                  </span>
                </div>
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag._id}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                      >
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <BlogSidebar
            popularPosts={popularPosts}
            categories={categories}
            tags={popularTags}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
