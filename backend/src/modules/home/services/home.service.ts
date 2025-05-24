import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Carousel } from "../entities/carousel.entity";
import { Presence } from "../entities/presence.entity";
import { Testimonial } from "../entities/testimonial.entity";
import { CreateCarouselDto } from "../dto/create-carousel.dto";
import { CreatePresenceDto } from "../dto/create-presence.dto";
import { CreateTestimonialDto } from "../dto/create-testimonial.dto";

@Injectable()
export class HomeService {
  constructor(
    @InjectModel(Carousel.name)
    private carouselModel: Model<Carousel>,
    @InjectModel(Presence.name)
    private presenceModel: Model<Presence>,
    @InjectModel(Testimonial.name)
    private testimonialModel: Model<Testimonial>
  ) {}

  // Carousel operations
  async createCarousel(
    createCarouselDto: CreateCarouselDto
  ): Promise<Carousel> {
    const carousel = new this.carouselModel(createCarouselDto);
    return carousel.save();
  }

  async findAllCarousels(): Promise<Carousel[]> {
    return this.carouselModel.find().sort({ order: 1 }).exec();
  }

  async findCarouselById(id: string): Promise<Carousel> {
    return this.carouselModel.findById(id).exec();
  }

  async updateCarousel(
    id: string,
    updateCarouselDto: Partial<CreateCarouselDto>
  ): Promise<Carousel> {
    return this.carouselModel
      .findByIdAndUpdate(id, updateCarouselDto, { new: true })
      .exec();
  }

  async deleteCarousel(id: string): Promise<void> {
    await this.carouselModel.findByIdAndDelete(id).exec();
  }

  // Presence operations
  async createPresence(
    createPresenceDto: CreatePresenceDto
  ): Promise<Presence> {
    const presence = new this.presenceModel(createPresenceDto);
    return presence.save();
  }

  async findAllPresences(): Promise<Presence[]> {
    return this.presenceModel.find().sort({ order: 1 }).exec();
  }

  async findPresenceById(id: string): Promise<Presence> {
    return this.presenceModel.findById(id).exec();
  }

  async updatePresence(
    id: string,
    updatePresenceDto: Partial<CreatePresenceDto>
  ): Promise<Presence> {
    return this.presenceModel
      .findByIdAndUpdate(id, updatePresenceDto, { new: true })
      .exec();
  }

  async deletePresence(id: string): Promise<void> {
    await this.presenceModel.findByIdAndDelete(id).exec();
  }

  // Testimonial operations
  async createTestimonial(
    createTestimonialDto: CreateTestimonialDto
  ): Promise<Testimonial> {
    const testimonial = new this.testimonialModel(createTestimonialDto);
    return testimonial.save();
  }

  async findAllTestimonials(): Promise<Testimonial[]> {
    return this.testimonialModel.find().sort({ order: 1 }).exec();
  }

  async findTestimonialById(id: string): Promise<Testimonial> {
    return this.testimonialModel.findById(id).exec();
  }

  async updateTestimonial(
    id: string,
    updateTestimonialDto: Partial<CreateTestimonialDto>
  ): Promise<Testimonial> {
    return this.testimonialModel
      .findByIdAndUpdate(id, updateTestimonialDto, { new: true })
      .exec();
  }

  async deleteTestimonial(id: string): Promise<void> {
    await this.testimonialModel.findByIdAndDelete(id).exec();
  }
}
