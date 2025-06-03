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
import VideoList from "./pages/Video/VideoList";
import ImportantInfoList from "./pages/Important-Info/ImportantInfoList";
import About from "./pages/About";
import { ImportantInfoForm } from "./pages/Important-Info/ImportantInfoForm";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="blog">
          <Route index element={<BlogPosts />} />
          <Route path="new" element={<BlogPostForm />} />
          <Route path=":id/edit" element={<BlogPostForm />} />
        </Route>
        <Route path="categories">
          <Route index element={<Categories />} />
          <Route path="new" element={<CategoryForm />} />
          <Route path=":id/edit" element={<CategoryForm />} />
        </Route>
        <Route path="channels">
          <Route index element={<Channels />} />
          <Route path="new" element={<ChannelForm />} />
          <Route path=":id/edit" element={<ChannelForm />} />
        </Route>
        <Route path="tags">
          <Route index element={<Tags />} />
          <Route path="new" element={<TagForm />} />
          <Route path=":id/edit" element={<TagForm />} />
        </Route>
        <Route path="testimonials">
          <Route index element={<Testimonials />} />
          <Route path="new" element={<TestimonialForm />} />
          <Route path=":id/edit" element={<TestimonialForm />} />
        </Route>
        <Route path="carousel">
          <Route index element={<Carousel />} />
          <Route path="new" element={<NewCarousel />} />
        </Route>
        <Route path="video">
          <Route index element={<VideoList />} />
          <Route path="new" element={<VideoForm />} />
          <Route path=":id/edit" element={<VideoForm />} />
        </Route>
        <Route path="important-information">
          <Route index element={<ImportantInfoList />} />
          <Route path="new" element={<ImportantInfoForm />} />
          <Route path=":id/edit" element={<ImportantInfoForm />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
