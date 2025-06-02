import axiosInstance from "./axios";

class CarouselService {
  async getAllImages(): Promise<string[]> {
    const response = await axiosInstance.get(`/carousel`);

    return response.data;
  }

  async updateImages(images: string[]): Promise<string[]> {
    const response = await axiosInstance.post(`/carousel`, {
      urls: images.map((img) => img),
    });
    return response.data.urls.map((url: string) => ({ url }));
  }

  async addImage(image: string): Promise<string[]> {
    const currentImages = await this.getAllImages();
    const updatedImages = [...currentImages, image];
    return this.updateImages(updatedImages);
  }

  async deleteImage(id: string): Promise<string[]> {
    const response = await axiosInstance.delete(`/carousel/${id}`);
    return response.data;
  }
}

export const carouselService = new CarouselService();
