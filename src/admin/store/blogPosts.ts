import { create } from "zustand";
import type { BlogPost } from "../types/blogPost";
import { blogPostService } from "../services/blogPostService";

interface BlogPostsStore {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
  addPost: (
    post: Omit<BlogPost, "id" | "createdAt" | "updatedAt">
  ) => Promise<void>;
  updatePost: (id: string, post: Partial<BlogPost>) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  getPost: (id: string) => Promise<BlogPost | null>;
  fetchPosts: () => Promise<void>;
}

export const useBlogPosts = create<BlogPostsStore>((set) => ({
  posts: [],
  loading: false,
  error: null,

  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const posts = await blogPostService.getAllPosts();
      set({ posts, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  addPost: async (post) => {
    set({ loading: true, error: null });
    try {
      const newPost = await blogPostService.createPost(post);
      set((state) => ({
        posts: [...state.posts, newPost],
        loading: false,
      }));
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  updatePost: async (id, updatedPost) => {
    set({ loading: true, error: null });
    try {
      const updated = await blogPostService.updatePost(id, updatedPost);
      if (updated) {
        set((state) => ({
          posts: state.posts.map((post) => (post.id === id ? updated : post)),
          loading: false,
        }));
      }
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  deletePost: async (id) => {
    set({ loading: true, error: null });
    try {
      await blogPostService.deletePost(id);
      set((state) => ({
        posts: state.posts.filter((post) => post.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  getPost: async (id) => {
    set({ loading: true, error: null });
    try {
      const post = await blogPostService.getPost(id);
      set({ loading: false });
      return post;
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
      return null;
    }
  },
}));
