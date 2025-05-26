import { useEffect } from "react";
import CRUDTable from "../components/CRUDTable";
import { useBlogPosts } from "../store/blogPosts";

export interface BlogPost {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
    _id: string;
  };
  publishedAt: string;
  readTime: number;
  isPublished: boolean;
  viewCount: number;
  category: {
    _id: string;
    name: string;
  };
  tags: Array<{
    _id: string;
    name: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

const BlogPosts = () => {
  const { posts, deletePost, fetchPosts } = useBlogPosts();

  const handleDelete = (id: string | number) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePost(id as string);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const columns = [
    {
      header: "Title",
      accessor: (item: BlogPost) => (
        <div className="flex items-center space-x-3">
          <img
            src={item.coverImage}
            alt={item.title}
            className="w-12 h-12 object-cover rounded"
          />
          <span className="font-medium">{item.title}</span>
        </div>
      ),
    },
    {
      header: "Author",
      accessor: (item: BlogPost) => (
        <div className="flex items-center space-x-2">
          <img
            src={item.author.avatar}
            alt={item.author.name}
            className="w-8 h-8 rounded-full"
          />
          <span>{item.author.name}</span>
        </div>
      ),
    },
    {
      header: "Category",
      accessor: (item: BlogPost) => (
        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
          {item.category.name}
        </span>
      ),
    },
    {
      header: "Published",
      accessor: (item: BlogPost) => formatDate(item.publishedAt),
    },
    {
      header: "Status",
      accessor: (item: BlogPost) => (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            item.isPublished
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {item.isPublished ? "Published" : "Draft"}
        </span>
      ),
    },
    {
      header: "Views",
      accessor: (item: BlogPost) => (
        <span className="text-gray-600">{item.viewCount}</span>
      ),
    },
    {
      header: "Tags",
      accessor: (item: BlogPost) => (
        <div className="flex flex-wrap gap-1">
          {item.tags.map((tag) => (
            <span
              key={tag._id}
              className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
            >
              {tag.name}
            </span>
          ))}
        </div>
      ),
    },
  ];

  return (
    <CRUDTable
      title="Blog Posts"
      columns={columns}
      data={posts}
      onDelete={handleDelete}
      createLink="/admin/blog-posts/new"
    />
  );
};

export default BlogPosts;
