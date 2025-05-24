import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/Dashboard";
import BlogPosts from "./pages/BlogPosts";
import BlogPostForm from "./pages/BlogPostForm";
import Tags from "./pages/Tags";
import TagForm from "./pages/TagForm";
import Categories from "./pages/Categories";
import CategoryForm from "./pages/CategoryForm";

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="blog-posts" element={<BlogPosts />} />
        <Route path="blog-posts/new" element={<BlogPostForm />} />
        <Route path="blog-posts/:id/edit" element={<BlogPostForm />} />
        <Route path="tags" element={<Tags />} />
        <Route path="tags/new" element={<TagForm />} />
        <Route path="tags/:id/edit" element={<TagForm />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/new" element={<CategoryForm />} />
        <Route path="categories/:id/edit" element={<CategoryForm />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
