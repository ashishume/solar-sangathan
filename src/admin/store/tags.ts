import { create } from "zustand";
import type { Tag } from "../types/tag";
import { tagService } from "../services/tagService";

interface TagsStore {
  tags: Tag[];
  loading: boolean;
  error: string | null;
  fetchTags: () => Promise<void>;
  addTag: (tag: Tag) => Promise<void>;
  editTag: (id: string, tag: Tag) => Promise<void>;
}

export const useTags = create<TagsStore>((set) => ({
  tags: [],
  loading: false,
  error: null,

  fetchTags: async () => {
    set({ loading: true, error: null });
    try {
      const tags = await tagService.getAllTags();
      set({ tags, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  addTag: async (tag: Tag) => {
    const newTag = await tagService.createTag(tag);
    set((state) => ({ tags: [...state.tags, newTag] }));
  },
  editTag: async (id: string, tag: Tag) => {
    const updatedTag = await tagService.updateTag(id, tag);
    set((state) => ({
      tags: state.tags.map((t) => (t._id === id ? updatedTag : t)),
    }));
  },
}));
