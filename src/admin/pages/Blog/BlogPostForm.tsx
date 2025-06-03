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

  const [post, setPost] = useState<BlogPost>({
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
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const [isLoading, setIsLoading] = useState(true);

  // First effect to fetch categories and tags
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        await Promise.all([fetchCategories(), fetchTags()]);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };
    fetchInitialData();
  }, [fetchCategories, fetchTags]);

  // Second effect to handle post data
  useEffect(() => {
    const loadPost = async () => {
      if (!isEditing || !id) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const existingPost = await getPost(id);

        if (existingPost) {
          const category = categories.find(
            (cat) => cat._id === existingPost.category._id
          );

          const newPost: BlogPost = {
            _id: existingPost._id || existingPost.id,
            id: existingPost.id || existingPost._id,
            publishedAt: existingPost.publishedAt,
            readTime: existingPost.readTime,
            status: existingPost.status,
            content: existingPost.content,
            excerpt: existingPost.excerpt,
            coverImage: existingPost.coverImage,
            title: existingPost.title,
            author: {
              name: existingPost.author.name,
              avatar: existingPost.author.avatar,
            },
            category: category || {
              _id: existingPost.category._id,
              name: existingPost.category.name,
              createdAt: new Date(existingPost.category.createdAt),
              updatedAt: new Date(existingPost.category.updatedAt),
            },
            tags: existingPost.tags.map((tag) => ({
              _id: tag._id,
              name: tag.name,
              usageCount: tag.usageCount || 0,
              createdAt: new Date(tag.createdAt),
              updatedAt: new Date(tag.updatedAt),
            })),
            createdAt: new Date(existingPost.createdAt),
            updatedAt: new Date(existingPost.updatedAt),
          };
          setPost(newPost);
        }
      } catch (error) {
        console.error("Error loading post:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPost();
  }, [isEditing, id, getPost]);

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

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
