import { create } from "zustand";
import type { StateCreator } from "zustand";

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  status: "Draft" | "Published";
  date: string;
}

interface BlogPostsStore {
  posts: BlogPost[];
  addPost: (post: Omit<BlogPost, "id" | "date">) => void;
  updatePost: (id: number, post: Partial<BlogPost>) => void;
  deletePost: (id: number) => void;
  getPost: (id: number) => BlogPost | undefined;
}

// Initial mock data
const initialPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Solar Energy",
    content:
      "This is a comprehensive guide to getting started with solar energy...",
    author: "John Doe",
    status: "Published",
    date: "2024-03-15",
  },
  {
    id: 2,
    title: "Benefits of Renewable Energy",
    content: "Exploring the various benefits of renewable energy sources...",
    author: "Jane Smith",
    status: "Draft",
    date: "2024-03-14",
  },
];

export const useBlogPosts = create<BlogPostsStore>((set, get) => ({
  posts: initialPosts,

  addPost: (post: Omit<BlogPost, "id" | "date">) => {
    const newPost: BlogPost = {
      ...post,
      id: Math.max(0, ...get().posts.map((p: BlogPost) => p.id)) + 1,
      date: new Date().toISOString().split("T")[0],
    };
    set((state: BlogPostsStore) => ({ posts: [...state.posts, newPost] }));
  },

  updatePost: (id: number, updatedPost: Partial<BlogPost>) => {
    set((state: BlogPostsStore) => ({
      posts: state.posts.map((post: BlogPost) =>
        post.id === id ? { ...post, ...updatedPost } : post
      ),
    }));
  },

  deletePost: (id: number) => {
    set((state: BlogPostsStore) => ({
      posts: state.posts.filter((post: BlogPost) => post.id !== id),
    }));
  },

  getPost: (id: number) => {
    return get().posts.find((post: BlogPost) => post.id === id);
  },
}));
