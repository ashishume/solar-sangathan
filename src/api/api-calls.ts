// import { mockTestimonials } from "./mockData/testimonials";
// import { mockChannels } from "./mockData/channels";
// import { mockBrands } from "./mockData/brands";
// import { mockVideoData } from "./mockData/video";
import { mockStats } from "./mockData/stats";
// import { mockHeroImages } from "./mockData/hero";
// import { mockRateCards } from "./mockData/rateCards";
import apiService from "./axios";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getTestimonials = async () => {
  await delay(500);
  // In a real application, this would be an API call
  return apiService.get("/api/testimonials").then((res) => res.data);
  // return mockTestimonials;
};

export const getChannels = async () => {
  await delay(500);
  // In a real application, this would be an API call
  return apiService.get("/api/channels").then((res) => res.data);
  // return mockChannels;
};

export const getBrands = async () => {
  await delay(500);
  // In a real application, this would be an API call
  return apiService.get("/api/brands").then((res) => res.data);
  // return mockBrands;
};

export const getVideoData = async () => {
  await delay(500);
  // In a real application, this would be an API call
  return apiService.get("/api/video").then((res) => res.data);
  // return mockVideoData;
};

export const getStats = async () => {
  await delay(500);
  // In a real application, this would be an API call
  // return fetch('/api/stats').then(res => res.json());
  return mockStats;
};

export const getCarouselImages = async () => {
  await delay(500);
  // In a real application, this would be an API call
  return apiService.get("/api/carousel").then((res) => res.data);
  // return mockHeroImages;
};

export const getRateCards = async () => {
  await delay(500);
  // In a real application, this would be an API call
  return apiService.get("/rate-cards").then((res) => res.data);
  // return mockRateCards;
};
