import { create } from "zustand";
import type { AdminResponse } from "../types/admin";
import { adminAuthService } from "../services/adminAuthService";

interface AdminAuthState {
  admin: AdminResponse | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  createAdmin: (adminData: {
    email: string;
    password: string;
    name: string;
    role: "SUPER_ADMIN" | "ADMIN";
  }) => Promise<void>;
  getCurrentAdmin: () => Promise<void>;
}

export const useAdminAuthStore = create<AdminAuthState>((set) => ({
  admin: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (email: string, password: string) => {
    try {
      set({ isLoading: true, error: null });
      const { token, admin } = await adminAuthService.login({
        email,
        password,
      });
      set({ admin, token, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  logout: async () => {
    try {
      set({ isLoading: true, error: null });
      await adminAuthService.logout();
      set({
        admin: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  createAdmin: async (adminData) => {
    try {
      set({ isLoading: true, error: null });
      await adminAuthService.createAdmin(adminData);
      set({ isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  getCurrentAdmin: async () => {
    try {
      set({ isLoading: true, error: null });
      const admin = await adminAuthService.getCurrentAdmin();
      set({ admin, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
}));
