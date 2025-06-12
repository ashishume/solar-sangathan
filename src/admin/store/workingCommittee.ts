import { create } from "zustand";
import { memberApi } from "@/api/api-calls";

interface Member {
  _id: string;
  name: string;
  role: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    youtube?: string;
    whatsapp?: string;
    instagram?: string;
    telegram?: string;
  };
  isWorkingCommittee: boolean;
  order?: number;
}

interface WorkingCommitteeStore {
  members: Member[];
  loading: boolean;
  error: string | null;
  fetchMembers: () => Promise<void>;
  deleteMember: (id: string) => Promise<void>;
}

export const useWorkingCommittee = create<WorkingCommitteeStore>((set) => ({
  members: [],
  loading: false,
  error: null,
  fetchMembers: async () => {
    set({ loading: true, error: null });
    try {
      const data = await memberApi.getWorkingCommitteeMembers();
      set({ members: data, loading: false });
    } catch (error) {
      set({
        error: "Failed to fetch working committee members",
        loading: false,
      });
    }
  },
  deleteMember: async (id: string) => {
    set({ loading: true, error: null });
    try {
      await memberApi.deleteMember(id);
      const data = await memberApi.getWorkingCommitteeMembers();
      set({ members: data, loading: false });
    } catch (error) {
      set({ error: "Failed to delete member", loading: false });
    }
  },
}));
