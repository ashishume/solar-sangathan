import { create } from "zustand";

export interface Tag {
  id: number;
  name: string;
  slug: string;
  description: string;
}

interface TagsStore {
  tags: Tag[];
  addTag: (tag: Omit<Tag, "id">) => void;
  updateTag: (id: number, tag: Partial<Tag>) => void;
  deleteTag: (id: number) => void;
  getTag: (id: number) => Tag | undefined;
}

// Initial mock data
const initialTags: Tag[] = [
  {
    id: 1,
    name: "Solar Energy",
    slug: "solar-energy",
    description: "Articles about solar energy and its applications",
  },
  {
    id: 2,
    name: "Renewable Energy",
    slug: "renewable-energy",
    description: "Topics related to renewable energy sources",
  },
];

export const useTags = create<TagsStore>((set, get) => ({
  tags: initialTags,

  addTag: (tag: Omit<Tag, "id">) => {
    const newTag: Tag = {
      ...tag,
      id: Math.max(0, ...get().tags.map((t: Tag) => t.id)) + 1,
    };
    set((state: TagsStore) => ({ tags: [...state.tags, newTag] }));
  },

  updateTag: (id: number, updatedTag: Partial<Tag>) => {
    set((state: TagsStore) => ({
      tags: state.tags.map((tag: Tag) =>
        tag.id === id ? { ...tag, ...updatedTag } : tag
      ),
    }));
  },

  deleteTag: (id: number) => {
    set((state: TagsStore) => ({
      tags: state.tags.filter((tag: Tag) => tag.id !== id),
    }));
  },

  getTag: (id: number) => {
    return get().tags.find((tag: Tag) => tag.id === id);
  },
}));
