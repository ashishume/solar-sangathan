import CRUDTable from "../components/CRUDTable";
import { useBlogPosts } from "../store/blogPosts";

const BlogPosts = () => {
  const { posts, deletePost } = useBlogPosts();

  const handleDelete = (id: string | number) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePost(Number(id));
    }
  };

  const columns = [
    { header: "Title", accessor: "title" },
    { header: "Author", accessor: "author" },
    { header: "Date", accessor: "date" },
    {
      header: "Status",
      accessor: "status",
      render: (value: string) => (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            value === "Published"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {value}
        </span>
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
