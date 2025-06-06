import axiosInstance from "./axios";

export interface ImportantInfo {
  header?: {
    _id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    noticeType: string;
  };
  footer?: {
    _id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    noticeType: string;
  };
}

export interface ImportantInfoEditResponse {
  _id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  noticeType: string;
}

export interface CreateImportantInfoDto {
  content: string;
  noticeType: string;
}

export interface UpdateImportantInfoDto {
  content: string;
  noticeType: string;
}

export const importantInfoService = {
  getAll: async (): Promise<ImportantInfo> => {
    const response = await axiosInstance.get(`/important-information`);
    return response.data;
  },

  getById: async (id: string): Promise<ImportantInfoEditResponse> => {
    const response = await axiosInstance.get(`/important-information/${id}`);
    return response.data;
  },

  create: async (data: CreateImportantInfoDto): Promise<ImportantInfo> => {
    const response = await axiosInstance.post(`/important-information`, data);
    return response.data;
  },

  update: async (
    id: string,
    data: UpdateImportantInfoDto
  ): Promise<ImportantInfo> => {
    const response = await axiosInstance.put(
      `/important-information/${id}`,
      data
    );
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await axiosInstance.delete(`/important-information/${id}`);
  },
};
