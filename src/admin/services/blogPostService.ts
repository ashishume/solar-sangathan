import type { BlogPost } from "../types/blogPost";
import axiosInstance from "./axios";

class BlogPostService {
  async createPost(
    post: Omit<BlogPost, "id" | "createdAt" | "updatedAt">
  ): Promise<BlogPost> {
    const response = await axiosInstance.post(`/blog/posts`, post);

    return response.data;
  }

  async updatePost(id: string, post: Partial<BlogPost>): Promise<BlogPost> {
    const response = await axiosInstance.put(`/blog/posts/${id}`, post);

    return response.data;
  }

  async getPost(id: string): Promise<BlogPost> {
    const response = await axiosInstance.get(`/blog/posts/${id}`);

    return response.data;
  }

  async getAllPosts(): Promise<BlogPost[]> {
    const response = await axiosInstance.get(`/blog/posts`);

    return response.data;
  }

  async deletePost(id: string): Promise<void> {
    const response = await axiosInstance.delete(`/blog/posts/${id}`);

    return response.data;
  }
}

export const blogPostService = new BlogPostService();
