import { create } from "zustand";
import type { Category } from "../types/category";
import { categoryService } from "../services/categoryService";

interface CategoriesStore {
  categories: Category[];
  loading: boolean;
  error: string | null;
  fetchCategories: () => Promise<void>;
  createCategory: (category: Category) => Promise<void>;
  updateCategory: (id: string, category: Category) => Promise<void>;
}

export const useCategories = create<CategoriesStore>((set) => ({
  categories: [],
  loading: false,
  error: null,

  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const categories = await categoryService.getAllCategories();
      set({ categories, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  createCategory: async (category: Category) => {
    const newCategory = await categoryService.createCategory(category);
    set((state) => ({ categories: [...state.categories, newCategory] }));
  },
  updateCategory: async (id: string, category: Category) => {
    const updatedCategory = await categoryService.updateCategory(id, category);
    set((state) => ({
      categories: state.categories.map((c) =>
        c._id === id ? updatedCategory : c
      ),
    }));
  },
}));
