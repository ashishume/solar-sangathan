import type { Category } from "../types/category";
import axiosInstance from "./axios";

class CategoryService {
  async getAllCategories(): Promise<Category[]> {
    const response = await axiosInstance.get(`/categories`);

    return response.data;
  }

  async getCategory(id: string): Promise<Category> {
    const response = await axiosInstance.get(`/categories/${id}`);

    return response.data;
  }
}

export const categoryService = new CategoryService();
