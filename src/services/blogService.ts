import { mockBlogService } from "./mockBlogData";

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
}

export const blogService = {
  // Get all blog posts with pagination
  getAllBlogs: async (page: number = 1, limit: number = 10) => {
    try {
      return await mockBlogService.getAllBlogs(page, limit);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  },

  // Get recent blog posts
  getRecentBlogs: async (limit: number = 3) => {
    try {
      return await mockBlogService.getRecentBlogs(limit);
    } catch (error) {
      console.error("Error fetching recent blogs:", error);
      throw error;
    }
  },

  // Get blog post by ID
  getBlogById: async (id: string) => {
    try {
      return await mockBlogService.getBlogById(id);
    } catch (error) {
      console.error("Error fetching blog:", error);
      throw error;
    }
  },

  // Get blogs by category
  getBlogsByCategory: async (
    category: string,
    page: number = 1,
    limit: number = 10
  ) => {
    try {
      return await mockBlogService.getBlogsByCategory(category, page, limit);
    } catch (error) {
      console.error("Error fetching blogs by category:", error);
      throw error;
    }
  },

  // Search blogs
  searchBlogs: async (query: string, page: number = 1, limit: number = 10) => {
    try {
      return await mockBlogService.searchBlogs(query, page, limit);
    } catch (error) {
      console.error("Error searching blogs:", error);
      throw error;
    }
  },
};
