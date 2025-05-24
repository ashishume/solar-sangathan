import { Link } from "react-router-dom";
import type { BlogPost } from "../services/blogService";

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/blog/${blog.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {blog.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">
                {blog.author.name}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(blog.publishedAt).toLocaleDateString()} •{" "}
                {blog.readTime} min read
              </p>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
