import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
// import BlogPost from "./pages/BlogPost";
import Training from "./pages/Training";
import Contact from "./pages/Contact";
import Join from "./pages/Join";
import BlogPost from "./pages/BlogPost";
import Layout from "./components/Layout";
import AdminRouter from "./admin/AdminRouter";
import Login from "./admin/pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminRouter />} />
        <Route path="/admin/login" element={<Login />} />

        {/* Main Website Routes */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="training" element={<Training />} />
          <Route path="contact" element={<Contact />} />
          <Route path="join" element={<Join />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
