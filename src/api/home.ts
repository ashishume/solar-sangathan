import { mockTestimonials } from "./mockData/testimonials";
import { mockChannels } from "./mockData/channels";
import { mockBrands } from "./mockData/brands";
import { mockVideoData } from "./mockData/video";
import { mockStats } from "./mockData/stats";
import { mockHeroImages } from "./mockData/hero";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getTestimonials = async () => {
  await delay(500);
  // In a real application, this would be an API call
  // return fetch('/api/testimonials').then(res => res.json());
  return mockTestimonials;
};

export const getChannels = async () => {
  await delay(500);
  // In a real application, this would be an API call
  // return fetch('/api/channels').then(res => res.json());
  return mockChannels;
};

export const getBrands = async () => {
  await delay(500);
  // In a real application, this would be an API call
  // return fetch('/api/brands').then(res => res.json());
  return mockBrands;
};

export const getVideoData = async () => {
  await delay(500);
  // In a real application, this would be an API call
  // return fetch('/api/video').then(res => res.json());
  return mockVideoData;
};

export const getStats = async () => {
  await delay(500);
  // In a real application, this would be an API call
  // return fetch('/api/stats').then(res => res.json());
  return mockStats;
};

export const getHeroImages = async () => {
  await delay(500);
  // In a real application, this would be an API call
  // return fetch('/api/hero-images').then(res => res.json());
  return mockHeroImages;
};
