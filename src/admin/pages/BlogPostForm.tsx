import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogPosts } from "../store/blogPosts";
import type { BlogPost } from "../store/blogPosts";

const BlogPostForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);
  const { addPost, updatePost, getPost } = useBlogPosts();

  const [post, setPost] = useState<Omit<BlogPost, "id" | "date">>({
    title: "",
    content: "",
    author: "",
    status: "Draft",
  });

  useEffect(() => {
    console.log("Edit mode:", isEditing);
    console.log("Post ID:", id);

    if (isEditing && id) {
      const existingPost = getPost(Number(id));
      console.log("Existing post:", existingPost);

      if (existingPost) {
        const { id: _, date: __, ...postData } = existingPost;
        console.log("Post data to set:", postData);
        setPost(postData);
      } else {
        console.log("No post found with ID:", id);
      }
    }
  }, [isEditing, id, getPost]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && id) {
      console.log("Updating post:", { id, post });
      updatePost(Number(id), post);
    } else {
      console.log("Creating new post:", post);
      addPost(post);
    }
    navigate("/admin/blog-posts");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        {isEditing ? "Edit Blog Post" : "Create New Blog Post"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <textarea
            id="content"
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            rows={10}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            value={post.author}
            onChange={(e) => setPost({ ...post, author: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <select
            id="status"
            value={post.status}
            onChange={(e) =>
              setPost({
                ...post,
                status: e.target.value as "Draft" | "Published",
              })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
          </select>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate("/admin/blog-posts")}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            {isEditing ? "Update Post" : "Create Post"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogPostForm;
