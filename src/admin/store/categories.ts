import { create } from "zustand";

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  parentId?: number;
}

interface CategoriesStore {
  categories: Category[];
  addCategory: (category: Omit<Category, "id">) => void;
  updateCategory: (id: number, category: Partial<Category>) => void;
  deleteCategory: (id: number) => void;
  getCategory: (id: number) => Category | undefined;
}

// Initial mock data
const initialCategories: Category[] = [
  {
    id: 1,
    name: "Solar Technology",
    slug: "solar-technology",
    description: "Latest developments in solar technology",
  },
  {
    id: 2,
    name: "Installation Guides",
    slug: "installation-guides",
    description: "Step-by-step guides for solar installation",
    parentId: 1,
  },
  {
    id: 3,
    name: "Industry News",
    slug: "industry-news",
    description: "Latest news from the solar industry",
  },
];

export const useCategories = create<CategoriesStore>((set, get) => ({
  categories: initialCategories,

  addCategory: (category: Omit<Category, "id">) => {
    const newCategory: Category = {
      ...category,
      id: Math.max(0, ...get().categories.map((c: Category) => c.id)) + 1,
    };
    set((state: CategoriesStore) => ({
      categories: [...state.categories, newCategory],
    }));
  },

  updateCategory: (id: number, updatedCategory: Partial<Category>) => {
    set((state: CategoriesStore) => ({
      categories: state.categories.map((category: Category) =>
        category.id === id ? { ...category, ...updatedCategory } : category
      ),
    }));
  },

  deleteCategory: (id: number) => {
    set((state: CategoriesStore) => ({
      categories: state.categories.filter(
        (category: Category) => category.id !== id
      ),
    }));
  },

  getCategory: (id: number) => {
    return get().categories.find((category: Category) => category.id === id);
  },
}));
