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

  async createTag(tag: Tag): Promise<Tag> {
    const response = await axiosInstance.post(`/tags`, tag);

    return response.data;
  }

  async updateTag(id: string, tag: Tag): Promise<Tag> {
    const response = await axiosInstance.patch(`/tags/${id}`, tag);

    return response.data;
  }

  async deleteTag(id: string): Promise<void> {
    await axiosInstance.delete(`/tags/${id}`);
  }
}

export const tagService = new TagService();
