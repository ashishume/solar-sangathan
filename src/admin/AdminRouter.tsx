import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/Dashboard";
import BlogPostForm from "./pages/Blog/BlogPostForm";
import BlogPosts from "./pages/Blog/BlogPosts";
import Categories from "./pages/Categories/Categories";
import CategoryForm from "./pages/Categories/CategoryForm";
import ChannelForm from "./pages/Channels/ChannelForm";
import Channels from "./pages/Channels/Channels";
import TagForm from "./pages/Tags/TagForm";
import Tags from "./pages/Tags/Tags";
import TestimonialForm from "./pages/Testimonials/TestimonialForm";
import Testimonials from "./pages/Testimonials/Testimonials";
import Carousel from "./pages/Carousel/Carousel";
import NewCarousel from "./pages/Carousel/NewCarousel";
import VideoForm from "./pages/Video/VideoForm";
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
        <Route path="carousel" element={<Carousel />} />
        <Route path="carousel/new" element={<NewCarousel />} />
        <Route path="carousel/:id/edit" element={<NewCarousel />} />
        <Route path="video/new" element={<VideoForm />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
