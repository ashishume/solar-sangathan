import type { Tag } from "../types/tag";
import axiosInstance from "./axios";

class TagService {
  async getAllTags(): Promise<Tag[]> {
    const response = await axiosInstance.get(`/tags`);

    return response.data;
  }

  async getTag(id: string): Promise<Tag> {
    const response = await axiosInstance.get(`/tags/${id}`);

    return response.data;
  }
}

export const tagService = new TagService();
