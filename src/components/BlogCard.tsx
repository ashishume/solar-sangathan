import { Link } from "react-router-dom";
import type { BlogPost } from "../services/blogService";

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/blog/${blog._id}`}>
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-full">
            {blog.category.name}
          </span>
          <span className="text-sm text-gray-500">
            {new Date(blog.createdAt || "").toLocaleDateString()}
          </span>
        </div>
        <Link to={`/blog/${blog._id}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-red-600">
            {blog.title}
          </h3>
        </Link>
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags?.map((tag) => (
            <span
              key={tag._id}
              className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
            >
              {tag.name}
            </span>
          ))}
        </div>
        <p className="text-gray-600 line-clamp-3">
          {blog.content.replace(/<[^>]*>/g, "").slice(0, 150)}...
        </p>
        <Link
          to={`/blog/${blog._id}`}
          className="inline-block mt-4 text-red-600 hover:text-red-700 font-medium"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
