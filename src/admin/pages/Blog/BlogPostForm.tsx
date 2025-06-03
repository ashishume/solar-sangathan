import { useBlogPosts } from "@/admin/store/blogPosts";
import { useCategories } from "@/admin/store/categories";
import { useTags } from "@/admin/store/tags";
import type { BlogPost } from "@/admin/types/blogPost";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import MultiSelect from "@/components/ui/MultiSelect";
import RichTextEditor from "@/components/ui/RichTextEditor";
import Textarea from "@/components/ui/Textarea";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogPostForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);
  const {
    addPost,
    updatePost,
    getPost,
    loading: postLoading,
    error: postError,
  } = useBlogPosts();
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
    fetchCategories,
  } = useCategories();
  const { tags, loading: tagsLoading, error: tagsError, fetchTags } = useTags();

  const [post, setPost] = useState<
    Omit<BlogPost, "id" | "createdAt" | "updatedAt">
  >({
    title: "",
    excerpt: "",
    coverImage: "",
    author: {
      name: "",
      avatar: "",
    },
    publishedAt: new Date().toISOString().split("T")[0],
    readTime: 5,
    content: "",
    category: {
      _id: "",
      name: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    tags: [],
    status: "Draft",
  });

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([fetchCategories(), fetchTags()]);
    };
    fetchData();
  }, [fetchCategories, fetchTags]);

  useEffect(() => {
    const loadPost = async () => {
      if (isEditing && id) {
        const existingPost = await getPost(id);
        if (existingPost) {
          const {
            id: _,
            createdAt: __,
            updatedAt: ___,
            ...postData
          } = existingPost;
          setPost(postData);
        }
      }
    };
    loadPost();
  }, [isEditing, id, getPost]);

  // Update category when categories are loaded
  useEffect(() => {
    if (post.category._id && categories.length > 0) {
      const category = categories.find((cat) => cat._id === post.category._id);
      if (category) {
        setPost((prev) => ({ ...prev, category }));
      }
    }
  }, [categories]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing && id) {
        await updatePost(id, post);
      } else {
        await addPost(post);
      }
      navigate("/admin/blog");
    } catch (err) {
      console.error("Failed to save post:", err);
    }
  };

  const loading = postLoading || categoriesLoading || tagsLoading;
  const error = postError || categoriesError || tagsError;

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-8">{error}</div>;
  }

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
          label="Excerpt"
          id="excerpt"
          value={post.excerpt}
          onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
          rows={3}
          required
        />

        <Input
          label="Cover Image URL"
          type="text"
          id="coverImage"
          value={post.coverImage}
          onChange={(e) => setPost({ ...post, coverImage: e.target.value })}
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Author Name"
            type="text"
            id="authorName"
            value={post.author.name}
            onChange={(e) =>
              setPost({
                ...post,
                author: { ...post.author, name: e.target.value },
              })
            }
            required
          />

          <Input
            label="Author Avatar URL"
            type="text"
            id="authorAvatar"
            value={post.author.avatar}
            onChange={(e) =>
              setPost({
                ...post,
                author: { ...post.author, avatar: e.target.value },
              })
            }
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Published Date"
            type="date"
            id="publishedAt"
            value={post.publishedAt}
            onChange={(e) => setPost({ ...post, publishedAt: e.target.value })}
            required
          />

          <Input
            label="Read Time (minutes)"
            type="number"
            id="readTime"
            value={post.readTime}
            onChange={(e) =>
              setPost({ ...post, readTime: parseInt(e.target.value) })
            }
            required
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Content <span className="text-red-600">*</span>
          </label>
          <RichTextEditor
            value={post.content}
            onChange={(value) => setPost({ ...post, content: value })}
            placeholder="Write your blog post content here..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            value={post.category._id}
            onChange={(e) => {
              const selectedCategory = categories.find(
                (cat) => cat._id === e.target.value
              );
              if (selectedCategory) {
                setPost({ ...post, category: selectedCategory });
              }
            }}
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition-colors duration-200 px-4 py-3"
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <MultiSelect
          label="Tags"
          options={tags}
          value={post.tags}
          onChange={(selectedTags) => setPost({ ...post, tags: selectedTags })}
          placeholder="Select tags..."
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
            disabled={loading}
          >
            Cancel
          </Button>
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? "Saving..." : isEditing ? "Update Post" : "Create Post"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlogPostForm;
