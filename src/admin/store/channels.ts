import { create } from "zustand";
import { getChannels, deleteChannel } from "@/api/api-calls";
import type { Channel } from "../types/channel";

interface ChannelsStore {
  channels: Channel[];
  loading: boolean;
  error: string | null;
  fetchChannels: () => Promise<void>;
  deleteChannel: (id: string) => Promise<void>;
}

export const useChannels = create<ChannelsStore>((set) => ({
  channels: [],
  loading: false,
  error: null,
  fetchChannels: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getChannels();
      set({ channels: data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch channels", loading: false });
    }
  },
  deleteChannel: async (id: string) => {
    set({ loading: true, error: null });
    try {
      await deleteChannel(id);
      const data = await getChannels();
      set({ channels: data, loading: false });
    } catch (error) {
      set({ error: "Failed to delete channel", loading: false });
    }
  },
}));
