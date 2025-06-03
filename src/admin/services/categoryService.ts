import type { Category } from "../types/category";
import axiosInstance from "./axios";

class CategoryService {
  async getAllCategories(): Promise<Category[]> {
    const response = await axiosInstance.get(`categories`);

    return response.data;
  }

  async getCategory(id: string): Promise<Category> {
    const response = await axiosInstance.get(`categories/${id}`);

    return response.data;
  }

  async createCategory(category: Category): Promise<Category> {
    const response = await axiosInstance.post(`categories`, category);

    return response.data;
  }

  async updateCategory(id: string, category: Category): Promise<Category> {
    const response = await axiosInstance.patch(`categories/${id}`, category);

    return response.data;
  }

  async deleteCategory(id: string): Promise<void> {
    await axiosInstance.delete(`categories/${id}`);
  }
}

export const categoryService = new CategoryService();
