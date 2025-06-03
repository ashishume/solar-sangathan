import { categoryService } from "@/admin/services/categoryService";
import { blogApi, tagApi } from "../api/api-calls";

export interface BlogPost {
  _id: string;
  title: string;
  content: string;
  excerpt?: string;
  coverImage?: string;
  author?: {
    _id: string;
    name: string;
    avatar: string;
  };
  publishedAt?: string;
  readTime?: number;
  isPublished?: boolean;
  viewCount?: number;
  category: {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  tags?: Array<{
    _id: string;
    name: string;
    usageCount: number;
    createdAt: string;
    updatedAt: string;
  }>;
  createdAt?: string;
  updatedAt?: string;
  status?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
}

export const blogService = {
  getAllBlogs: async (
    page: number = 1,
    limit: number = 10
  ): Promise<BlogPost[]> => {
    const response = await blogApi.getAllPosts(page, limit);
    return response;
  },

  getRecentBlogs: async (limit: number = 3): Promise<BlogPost[]> => {
    const response = await blogApi.getAllPosts(1, limit);
    return response;
  },

  getBlogById: async (id: string): Promise<BlogPost> => {
    return blogApi.getPostById(id);
  },

  getBlogsByCategory: async (
    categoryId: string,
    page: number = 1,
    limit: number = 10
  ): Promise<PaginatedResponse<BlogPost>> => {
    return blogApi.getPostsByCategory(categoryId, page, limit);
  },

  searchBlogs: async (
    query: string,
    page: number = 1,
    limit: number = 10
  ): Promise<PaginatedResponse<BlogPost>> => {
    return blogApi.searchPosts(query, page, limit);
  },

  getCategories: async () => {
    const response = await categoryService.getAllCategories();
    return response;
  },

  getTags: async () => {
    const response = await tagApi.getAllTags();
    return response;
  },
};
