import { create } from "zustand";
import { videoService, type Video } from "../services/videoService";

interface VideoStore {
  video: Video | null;
  loading: boolean;
  error: string | null;
  fetchVideo: () => Promise<void>;
  deleteVideo: (id: string) => Promise<void>;
}

export const useVideo = create<VideoStore>((set) => ({
  video: null,
  loading: false,
  error: null,
  fetchVideo: async () => {
    set({ loading: true, error: null });
    try {
      const data = await videoService.getAll();
      set({ video: data as Video, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch video", loading: false });
    }
  },
  deleteVideo: async (id: string) => {
    set({ loading: true, error: null });
    try {
      await videoService.delete(id);
      const data = await videoService.getAll();
      set({ video: data as Video, loading: false });
    } catch (error) {
      set({ error: "Failed to delete video", loading: false });
    }
  },
}));
