import { Link } from "react-router-dom";
import type { BlogPost } from "../services/blogService";
import type { Category } from "@/admin/types/category";
import type { Tag } from "@/admin/types/tag";

interface BlogSidebarProps {
  popularPosts: BlogPost[];
  categories: Category[];
  tags: Tag[];
}

const BlogSidebar = ({ popularPosts, categories, tags }: BlogSidebarProps) => {
  return (
    <aside className="space-y-8">
      {/* Popular Posts */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link
              key={post._id}
              to={`/blog/${post._id}`}
              className="group block"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(post.publishedAt || "").toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/blog?category=${category.name}`}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700">{category.name}</span>
              {/* <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                {category?.count || 0}
              </span> */}
            </Link>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag.name}
              to={`/blog?tag=${tag.name}`}
              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-red-100 hover:text-red-600 transition-colors"
            >
              #{tag.name} ({tag.usageCount})
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-md p-6 text-white">
        <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
        <p className="text-red-100 mb-4">
          Subscribe to our newsletter for the latest solar industry insights.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="w-full bg-white text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-50 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
};

export default BlogSidebar;
