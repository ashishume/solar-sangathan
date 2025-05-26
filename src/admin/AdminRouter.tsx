import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/Dashboard";
import BlogPosts from "./pages/BlogPosts";
import BlogPostForm from "./pages/BlogPostForm";
import Tags from "./pages/Tags";
import TagForm from "./pages/TagForm";
import Categories from "./pages/Categories";
import CategoryForm from "./pages/CategoryForm";
import Testimonials from "./pages/Testimonials";
import TestimonialForm from "./pages/TestimonialForm";
import Channels from "./pages/Channels";
import ChannelForm from "./pages/ChannelForm";

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
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="testimonials/new" element={<TestimonialForm />} />
        <Route path="testimonials/:id/edit" element={<TestimonialForm />} />
        <Route path="channels" element={<Channels />} />
        <Route path="channels/new" element={<ChannelForm />} />
        <Route path="channels/:id/edit" element={<ChannelForm />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
