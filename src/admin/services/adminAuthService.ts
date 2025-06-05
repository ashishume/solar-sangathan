import axios from "./axios";
import type {
  AdminCreateInput,
  AdminLoginCredentials,
  AdminResponse,
} from "../types/admin";

export const adminAuthService = {
  login: async (
    credentials: AdminLoginCredentials
  ): Promise<{ token: string; admin: AdminResponse }> => {
    const response = await axios.post("/admin/login", credentials);
    return response.data;
  },

  createAdmin: async (adminData: AdminCreateInput): Promise<AdminResponse> => {
    const response = await axios.post("/admin/create", adminData);
    return response.data;
  },

  getCurrentAdmin: async (): Promise<AdminResponse> => {
    const response = await axios.get("/admin/me");
    return response.data;
  },

  logout: async (): Promise<void> => {
    await axios.post("/admin/logout");
  },
};
