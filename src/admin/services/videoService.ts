import axios from "./axios";

export interface Video {
  _id?: string;
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export const videoService = {
  getAll: async (): Promise<Video[]> => {
    const response = await axios.get("/video");
    return response.data;
  },

  getById: async (id: string): Promise<Video> => {
    const response = await axios.get(`/video/${id}`);
    return response.data;
  },

  create: async (video: Omit<Video, "_id">): Promise<Video> => {
    const response = await axios.post("/video", video);
    return response.data;
  },

  update: async (id: string, video: Partial<Video>): Promise<Video> => {
    const response = await axios.put(`/video/${id}`, video);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await axios.delete(`/api/video/${id}`);
  },
};
