import { create } from "zustand";
import {
  getTestimonials,
  deleteTestimonial,
  createTestimonial,
} from "@/api/api-calls";
import type { Testimonial } from "../types/testimonial";

interface TestimonialsStore {
  testimonials: Testimonial[];
  loading: boolean;
  error: string | null;
  fetchTestimonials: () => Promise<void>;
  deleteTestimonial: (id: string) => Promise<void>;
  addTestimonial: (testimonial: Testimonial) => Promise<void>;
}

export const useTestimonials = create<TestimonialsStore>((set) => ({
  testimonials: [],
  loading: false,
  error: null,
  fetchTestimonials: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getTestimonials();
      set({ testimonials: data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch testimonials", loading: false });
    }
  },
  deleteTestimonial: async (id: string) => {
    set({ loading: true, error: null });
    try {
      await deleteTestimonial(id);
      const data = await getTestimonials();
      set({ testimonials: data, loading: false });
    } catch (error) {
      set({ error: "Failed to delete testimonial", loading: false });
    }
  },
  addTestimonial: async (testimonial: Testimonial) => {
    set({ loading: true, error: null });
    try {
      await createTestimonial(testimonial);
      const data = await getTestimonials();
      set({ testimonials: data, loading: false });
    } catch (error) {
      set({ error: "Failed to add testimonial", loading: false });
    }
  },
}));
