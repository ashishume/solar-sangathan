import { create } from "zustand";
import { carouselService } from "../services/carouselService";
import type { CarouselImage } from "../types/carousel";

interface CarouselStore {
  carouselImages: CarouselImage[];
  loading: boolean;
  error: string | null;
  fetchCarouselImages: () => Promise<void>;
  deleteCarouselImage: (id: string) => Promise<void>;
}

export const useCarousel = create<CarouselStore>((set) => ({
  carouselImages: [],
  loading: false,
  error: null,
  fetchCarouselImages: async () => {
    set({ loading: true, error: null });
    try {
      const images = await carouselService.getAllImages();
      set({
        carouselImages: images as unknown as CarouselImage[],
        loading: false,
      });
    } catch (error) {
      set({ error: "Failed to fetch carousel images", loading: false });
    }
  },
  deleteCarouselImage: async (id: string) => {
    set({ loading: true, error: null });
    try {
      await carouselService.deleteImage(id);
      const images = await carouselService.getAllImages();
      set({
        carouselImages: images as unknown as CarouselImage[],
        loading: false,
      });
    } catch (error) {
      set({ error: "Failed to delete carousel image", loading: false });
    }
  },
}));
