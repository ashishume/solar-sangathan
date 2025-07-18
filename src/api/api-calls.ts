// import { mockTestimonials } from "./mockData/testimonials";
// import { mockChannels } from "./mockData/channels";
// import { mockBrands } from "./mockData/brands";
// import { mockVideoData } from "./mockData/video";
import axiosInstance from "@/admin/services/axios";
import { mockStats } from "./mockData/stats";
// import { mockHeroImages } from "./mockData/hero";
// import { mockRateCards } from "./mockData/rateCards";
import axios from "axios";

// Simulate API delay
// new Promise((resolve) => setTimeout(resolve, ms));

const API_BASE_URL = import.meta.env.VITE_API_URL;

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor for authentication if needed
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors here
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Blog API calls
export const blogApi = {
  getAllPosts: async (page: number = 1, limit: number = 10) => {
    const response = await api.get("/blog/posts", {
      params: { page, limit },
    });
    return response.data;
  },

  getPostById: async (id: string) => {
    const response = await api.get(`/blog/posts/${id}`);
    return response.data;
  },

  createPost: async (data: {
    title: string;
    content: string;
    categoryId: string;
    tags: string[];
    featuredImage: string;
    status: "draft" | "published";
  }) => {
    const response = await api.post("/blog/posts", data);
    return response.data;
  },

  updatePost: async (
    id: string,
    data: {
      title?: string;
      content?: string;
      categoryId?: string;
      tags?: string[];
      featuredImage?: string;
      status?: "draft" | "published";
    }
  ) => {
    const response = await api.put(`/blog/posts/${id}`, data);
    return response.data;
  },

  deletePost: async (id: string) => {
    await api.delete(`/blog/posts/${id}`);
  },

  searchPosts: async (query: string) => {
    const response = await api.get("/blog/posts/search", {
      params: { q: query },
    });
    return response.data;
  },

  getPostsByCategory: async (
    categoryId: string,
    page: number = 1,
    limit: number = 10
  ) => {
    const response = await api.get(`/blog/categories/${categoryId}/posts`, {
      params: { page, limit },
    });
    return response.data;
  },
};

// Tag API calls
export const tagApi = {
  getAllTags: async () => {
    const response = await api.get("/tags");
    return response.data;
  },

  getTagById: async (id: string) => {
    const response = await api.get(`/tags/${id}`);
    return response.data;
  },

  createTag: async (data: { name: string; slug: string }) => {
    const response = await api.post("/tags", data);
    return response.data;
  },

  updateTag: async (id: string, data: { name?: string; slug?: string }) => {
    const response = await api.put(`/tags/${id}`, data);
    return response.data;
  },

  deleteTag: async (id: string) => {
    await api.delete(`/blog/tags/${id}`);
  },
};

// Member API calls
export const memberApi = {
  // Working Committee Members
  getWorkingCommitteeMembers: async () => {
    return api.get("/about/members/working-committee").then((res) => res.data);
  },

  // Other Members
  getOtherMembers: async () => {
    return api.get("/about/members/other").then((res) => res.data);
  },

  // Create a new member
  createMember: async (data: {
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
  }) => {
    return api.post("/about/members", data).then((res) => res.data);
  },

  // Update a member
  updateMember: async (
    id: string,
    data: {
      name?: string;
      role?: string;
      image?: string;
      social?: {
        linkedin?: string;
        twitter?: string;
        facebook?: string;
        youtube?: string;
        whatsapp?: string;
        instagram?: string;
        telegram?: string;
      };
      isWorkingCommittee?: boolean;
    }
  ) => {
    return api.patch(`/about/members/${id}`, data).then((res) => res.data);
  },

  // Delete a member
  deleteMember: async (id: string) => {
    return api.delete(`/about/members/${id}`).then((res) => res.data);
  },
};

// Export the api instance for custom calls

export const getTestimonials = async () => {
  // await delay(500);
  // In a real application, this would be an API call
  return api.get("/testimonials").then((res) => res.data);
  // return mockTestimonials;
};

export const updateTestimonial = async (id: string, data: any) => {
  return api.put(`/testimonials/${id}`, data).then((res) => res.data);
};

export const deleteTestimonial = async (id: string) => {
  return api.delete(`/testimonials/${id}`).then((res) => res.data);
};

export const getChannels = async () => {
  // await delay(500);
  // In a real application, this would be an API call
  return api.get("/channels").then((res) => res.data);
  // return mockChannels;
};

export const createTestimonial = async (data: any) => {
  return api.post("/testimonials", data).then((res) => res.data);
};

export const createChannel = async (data: any) => {
  return api.post("/channels", data).then((res) => res.data);
};

export const updateChannel = async (id: string, data: any) => {
  return api.put(`/channels/${id}`, data).then((res) => res.data);
};

export const deleteChannel = async (id: string) => {
  return api.delete(`/channels/${id}`).then((res) => res.data);
};

export const getBrands = async () => {
  // await delay(500);
  // In a real application, this would be an API call
  return api.get("/brands").then((res) => res.data);
  // return mockBrands;
};

export const getVideoData = async () => {
  // await delay(500);
  // In a real application, this would be an API call
  return api.get("/video").then((res) => res.data);
  // return mockVideoData;
};

export const updateVideo = async (id: string, data: any) => {
  return api.put(`/video/${id}`, data).then((res) => res.data);
};

export const deleteVideo = async (id: string) => {
  return api.delete(`/video/${id}`).then((res) => res.data);
};

export const getStats = async () => {
  // await delay(500);
  // In a real application, this would be an API call
  // return fetch('/api/stats').then(res => res.json());
  return mockStats;
};

export const getCarouselImages = async () => {
  // await delay(500);
  // In a real application, this would be an API call
  return api.get("/carousel").then((res) => res.data);
  // return mockHeroImages;
};

export const getRateCards = async () => {
  // await delay(500);
  // In a real application, this would be an API call
  return api.get("/rate-cards").then((res) => res.data);
  // return mockRateCards;
};

export const getImportantInformation = async () => {
  // await delay(500);
  // In a real application, this would be an API call
  return api.get("/important-information").then((res) => res.data);
  // return mockRateCards;
};

export const updateImportantInformation = async (id: string, data: any) => {
  return api.put(`/important-information/${id}`, data).then((res) => res.data);
};

export const deleteImportantInformation = async (id: string) => {
  return api.delete(`/important-information/${id}`).then((res) => res.data);
};

export const submitContactForm = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}) => {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const submitJoinForm = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  occupation: string;
  interests: string;
  selectedRateCard: string;
}) => {
  const response = await axiosInstance.post(`/join`, data);
  return response.data;
};
