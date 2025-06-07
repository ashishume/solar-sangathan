import { create } from "zustand";
import axiosInstance from "../services/axios";

export interface Resource {
  _id: string;
  title: string;
  link: string;
  documentUrl: string;
}

interface ResourcesState {
  resources: Resource[];
  loading: boolean;
  error: string | null;
  fetchResources: () => Promise<void>;
  addResource: (resource: Omit<Resource, "id">) => Promise<void>;
  deleteResource: (id: string) => Promise<void>;
}

export const useResourcesStore = create<ResourcesState>((set) => ({
  resources: [],
  loading: false,
  error: null,

  fetchResources: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get("/resources");
      set({ resources: response.data, loading: false });
    } catch (error) {
      set({
        error: "Failed to fetch resources",
        loading: false,
      });
    }
  },

  addResource: async (resource) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.post("/resources", resource);
      set((state) => ({
        resources: [...state.resources, response.data],
        loading: false,
      }));
    } catch (error) {
      set({
        error: "Failed to add resource",
        loading: false,
      });
    }
  },

  deleteResource: async (id) => {
    set({ loading: true, error: null });
    try {
      await axiosInstance.delete(`/resources/${id}`);
      set((state) => ({
        resources: state.resources.filter((resource) => resource._id !== id),
        loading: false,
      }));
    } catch (error) {
      set({
        error: "Failed to delete resource",
        loading: false,
      });
    }
  },
}));
