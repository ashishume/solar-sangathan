import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogPosts } from "../store/blogPosts";
import type { BlogPost } from "../store/blogPosts";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";
import Button from "../../components/ui/Button";

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
        <Input
          label="Title"
          type="text"
          id="title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          required
        />

        <Textarea
          label="Content"
          id="content"
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
          rows={10}
          required
        />

        <Input
          label="Author"
          type="text"
          id="author"
          value={post.author}
          onChange={(e) => setPost({ ...post, author: e.target.value })}
          required
        />

        <div className="space-y-2">
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
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition-colors duration-200 px-4 py-3"
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
          </select>
        </div>

        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/admin/blog-posts")}
          >
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            {isEditing ? "Update Post" : "Create Post"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlogPostForm;
