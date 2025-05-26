import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
  getTestimonials,
  getChannels,
  getBrands,
  getVideoData,
  getStats,
  getCarouselImages,
} from "../api/api-calls";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
  image: string;
}

interface Channel {
  image: string;
  title: string;
  description: string;
  color?: string;
  icon: string;
}

interface Brand {
  name: string;
  logo: string;
}

interface VideoData {
  videoUrl: string;
  title: string;
  thumbnailUrl: string;
}

interface HomeState {
  testimonials: Testimonial[];
  channels: Channel[];
  brands: Brand[];
  videoData: VideoData;
  stats: { label: string }[];
  heroImages: string[];
  loading: {
    testimonials: boolean;
    channels: boolean;
    brands: boolean;
    video: boolean;
    stats: boolean;
    hero: boolean;
  };
  error: {
    testimonials: string | null;
    channels: string | null;
    brands: string | null;
    video: string | null;
    stats: string | null;
    hero: string | null;
  };
  fetchTestimonials: () => Promise<void>;
  fetchChannels: () => Promise<void>;
  fetchBrands: () => Promise<void>;
  fetchVideoData: () => Promise<void>;
  fetchStats: () => Promise<void>;
  fetchHeroImages: () => Promise<void>;
}

export const useHomeStore = create<HomeState>()(
  devtools(
    (set) => ({
      testimonials: [],
      channels: [],
      brands: [],
      videoData: {
        videoUrl: "",
        title: "",
        thumbnailUrl: "",
      },
      stats: [],
      heroImages: [],
      loading: {
        testimonials: false,
        channels: false,
        brands: false,
        video: false,
        stats: false,
        hero: false,
      },
      error: {
        testimonials: null,
        channels: null,
        brands: null,
        video: null,
        stats: null,
        hero: null,
      },
      fetchTestimonials: async () => {
        set((state) => ({ loading: { ...state.loading, testimonials: true } }));
        try {
          const data = await getTestimonials();

          set((state) => ({
            testimonials: data,
            loading: { ...state.loading, testimonials: false },
            error: { ...state.error, testimonials: null },
          }));
        } catch (error) {
          set((state) => ({
            loading: { ...state.loading, testimonials: false },
            error: {
              ...state.error,
              testimonials: "Failed to fetch testimonials",
            },
          }));
        }
      },
      fetchChannels: async () => {
        set((state) => ({ loading: { ...state.loading, channels: true } }));
        try {
          const data = await getChannels();
          set((state) => ({
            channels: data,
            loading: { ...state.loading, channels: false },
            error: { ...state.error, channels: null },
          }));
        } catch (error) {
          set((state) => ({
            loading: { ...state.loading, channels: false },
            error: { ...state.error, channels: "Failed to fetch channels" },
          }));
        }
      },
      fetchBrands: async () => {
        set((state) => ({ loading: { ...state.loading, brands: true } }));
        try {
          const data = await getBrands();
          set((state) => ({
            brands: data,
            loading: { ...state.loading, brands: false },
            error: { ...state.error, brands: null },
          }));
        } catch (error) {
          set((state) => ({
            loading: { ...state.loading, brands: false },
            error: { ...state.error, brands: "Failed to fetch brands" },
          }));
        }
      },
      fetchVideoData: async () => {
        set((state) => ({ loading: { ...state.loading, video: true } }));
        try {
          const data = await getVideoData();
          set((state) => ({
            videoData: data,
            loading: { ...state.loading, video: false },
            error: { ...state.error, video: null },
          }));
        } catch (error) {
          set((state) => ({
            loading: { ...state.loading, video: false },
            error: { ...state.error, video: "Failed to fetch video data" },
          }));
        }
      },
      fetchStats: async () => {
        set((state) => ({ loading: { ...state.loading, stats: true } }));
        try {
          const data = await getStats();
          set((state) => ({
            stats: data,
            loading: { ...state.loading, stats: false },
            error: { ...state.error, stats: null },
          }));
        } catch (error) {
          set((state) => ({
            loading: { ...state.loading, stats: false },
            error: { ...state.error, stats: "Failed to fetch stats" },
          }));
        }
      },
      fetchHeroImages: async () => {
        set((state) => ({ loading: { ...state.loading, hero: true } }));
        try {
          const data = await getCarouselImages();
          set((state) => ({
            heroImages: data,
            loading: { ...state.loading, hero: false },
            error: { ...state.error, hero: null },
          }));
        } catch (error) {
          set((state) => ({
            loading: { ...state.loading, hero: false },
            error: { ...state.error, hero: "Failed to fetch hero images" },
          }));
        }
      },
    }),
    {
      name: "home-store", // Name for the store in Redux DevTools
    }
  )
);
