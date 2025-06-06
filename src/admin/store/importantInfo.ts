import { create } from "zustand";
import { importantInfoService } from "../services/importantInfoService";
import type { ImportantInfo } from "../services/importantInfoService";

interface ImportantInfoStore {
  importantInfo: ImportantInfo;
  loading: boolean;
  error: string | null;
  fetchImportantInfo: () => Promise<void>;
  deleteImportantInfo: (id: string) => Promise<void>;
}

export const useImportantInfo = create<ImportantInfoStore>((set) => ({
  importantInfo: {
    header: undefined,
    footer: undefined,
  },
  loading: false,
  error: null,
  fetchImportantInfo: async () => {
    set({ loading: true, error: null });
    try {
      const data = await importantInfoService.getAll();
      set({
        importantInfo: data,
        loading: false,
      });
    } catch (error) {
      set({ error: "Failed to fetch important information", loading: false });
    }
  },
  deleteImportantInfo: async (id: string) => {
    set({ loading: true, error: null });
    try {
      await importantInfoService.delete(id);
      const data = await importantInfoService.getAll();
      set({
        importantInfo: data,
        loading: false,
      });
    } catch (error) {
      set({ error: "Failed to delete important information", loading: false });
    }
  },
}));
