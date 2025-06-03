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
}

interface OtherMembersStore {
  members: Member[];
  loading: boolean;
  error: string | null;
  fetchMembers: () => Promise<void>;
  deleteMember: (id: string) => Promise<void>;
}

export const useOtherMembers = create<OtherMembersStore>((set) => ({
  members: [],
  loading: false,
  error: null,
  fetchMembers: async () => {
    set({ loading: true, error: null });
    try {
      const data = await memberApi.getOtherMembers();
      set({ members: data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch other members", loading: false });
    }
  },
  deleteMember: async (id: string) => {
    set({ loading: true, error: null });
    try {
      await memberApi.deleteMember(id);
      const data = await memberApi.getOtherMembers();
      set({ members: data, loading: false });
    } catch (error) {
      set({ error: "Failed to delete member", loading: false });
    }
  },
}));
