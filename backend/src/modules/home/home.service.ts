import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Testimonial } from "./schemas/testimonial.schema";
import { Channel } from "./schemas/channel.schema";
import { Brand } from "./schemas/brand.schema";
import { Video } from "./schemas/video.schema";
import { Stat } from "./schemas/stat.schema";
import { HeroImage } from "./schemas/hero-image.schema";
import { Carousel } from "./entities/carousel.entity";
import { Presence } from "./entities/presence.entity";
import { CreatePresenceDto } from "./dto/create-presence.dto";
import { CreateCarouselDto } from "./dto/create-carousel.dto";

@Injectable()
export class HomeService {
  constructor(
    @InjectModel(Testimonial.name) private testimonialModel: Model<Testimonial>,
    @InjectModel(Channel.name) private channelModel: Model<Channel>,
    @InjectModel(Brand.name) private brandModel: Model<Brand>,
    @InjectModel(Video.name) private videoModel: Model<Video>,
    @InjectModel(Stat.name) private statModel: Model<Stat>,
    @InjectModel(HeroImage.name) private heroImageModel: Model<HeroImage>,
    @InjectModel(Carousel.name)
    private carouselModel: Model<Carousel>,
    @InjectModel(Presence.name)
    private presenceModel: Model<Presence>
  ) {}

  // Testimonials CRUD
  async getTestimonials() {
    return this.testimonialModel.find().exec();
  }

  async getTestimonial(id: string) {
    const testimonial = await this.testimonialModel.findById(id).exec();
    if (!testimonial) {
      throw new NotFoundException(`Testimonial with ID ${id} not found`);
    }
    return testimonial;
  }

  async createTestimonial(createTestimonialDto: Partial<Testimonial>) {
    const newTestimonial = new this.testimonialModel(createTestimonialDto);
    return newTestimonial.save();
  }

  async updateTestimonial(
    id: string,
    updateTestimonialDto: Partial<Testimonial>
  ) {
    const updatedTestimonial = await this.testimonialModel
      .findByIdAndUpdate(id, updateTestimonialDto, { new: true })
      .exec();
    if (!updatedTestimonial) {
      throw new NotFoundException(`Testimonial with ID ${id} not found`);
    }
    return updatedTestimonial;
  }

  async deleteTestimonial(id: string) {
    const deletedTestimonial = await this.testimonialModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedTestimonial) {
      throw new NotFoundException(`Testimonial with ID ${id} not found`);
    }
    return deletedTestimonial;
  }

  // Channels CRUD
  async getChannels() {
    return this.channelModel.find().exec();
  }

  async getChannel(id: string) {
    const channel = await this.channelModel.findById(id).exec();
    if (!channel) {
      throw new NotFoundException(`Channel with ID ${id} not found`);
    }
    return channel;
  }

  async createChannel(createChannelDto: Partial<Channel>) {
    const newChannel = new this.channelModel(createChannelDto);
    return newChannel.save();
  }

  async updateChannel(id: string, updateChannelDto: Partial<Channel>) {
    const updatedChannel = await this.channelModel
      .findByIdAndUpdate(id, updateChannelDto, { new: true })
      .exec();
    if (!updatedChannel) {
      throw new NotFoundException(`Channel with ID ${id} not found`);
    }
    return updatedChannel;
  }

  async deleteChannel(id: string) {
    const deletedChannel = await this.channelModel.findByIdAndDelete(id).exec();
    if (!deletedChannel) {
      throw new NotFoundException(`Channel with ID ${id} not found`);
    }
    return deletedChannel;
  }

  // Brands CRUD
  async getBrands() {
    return this.brandModel.find().exec();
  }

  async getBrand(id: string) {
    const brand = await this.brandModel.findById(id).exec();
    if (!brand) {
      throw new NotFoundException(`Brand with ID ${id} not found`);
    }
    return brand;
  }

  async createBrand(createBrandDto: Partial<Brand>) {
    const newBrand = new this.brandModel(createBrandDto);
    return newBrand.save();
  }

  async updateBrand(id: string, updateBrandDto: Partial<Brand>) {
    const updatedBrand = await this.brandModel
      .findByIdAndUpdate(id, updateBrandDto, { new: true })
      .exec();
    if (!updatedBrand) {
      throw new NotFoundException(`Brand with ID ${id} not found`);
    }
    return updatedBrand;
  }

  async deleteBrand(id: string) {
    const deletedBrand = await this.brandModel.findByIdAndDelete(id).exec();
    if (!deletedBrand) {
      throw new NotFoundException(`Brand with ID ${id} not found`);
    }
    return deletedBrand;
  }

  // Video CRUD
  async getVideoData() {
    return this.videoModel.findOne().exec();
  }

  async getVideo(id: string) {
    const video = await this.videoModel.findById(id).exec();
    if (!video) {
      throw new NotFoundException(`Video with ID ${id} not found`);
    }
    return video;
  }

  async createVideo(createVideoDto: Partial<Video>) {
    const newVideo = new this.videoModel(createVideoDto);
    return newVideo.save();
  }

  async updateVideo(id: string, updateVideoDto: Partial<Video>) {
    const updatedVideo = await this.videoModel
      .findByIdAndUpdate(id, updateVideoDto, { new: true })
      .exec();
    if (!updatedVideo) {
      throw new NotFoundException(`Video with ID ${id} not found`);
    }
    return updatedVideo;
  }

  async deleteVideo(id: string) {
    const deletedVideo = await this.videoModel.findByIdAndDelete(id).exec();
    if (!deletedVideo) {
      throw new NotFoundException(`Video with ID ${id} not found`);
    }
    return deletedVideo;
  }

  // Stats CRUD
  async getStats() {
    return this.statModel.find().exec();
  }

  async getStat(id: string) {
    const stat = await this.statModel.findById(id).exec();
    if (!stat) {
      throw new NotFoundException(`Stat with ID ${id} not found`);
    }
    return stat;
  }

  async createStat(createStatDto: Partial<Stat>) {
    const newStat = new this.statModel(createStatDto);
    return newStat.save();
  }

  async updateStat(id: string, updateStatDto: Partial<Stat>) {
    const updatedStat = await this.statModel
      .findByIdAndUpdate(id, updateStatDto, { new: true })
      .exec();
    if (!updatedStat) {
      throw new NotFoundException(`Stat with ID ${id} not found`);
    }
    return updatedStat;
  }

  async deleteStat(id: string) {
    const deletedStat = await this.statModel.findByIdAndDelete(id).exec();
    if (!deletedStat) {
      throw new NotFoundException(`Stat with ID ${id} not found`);
    }
    return deletedStat;
  }

  // Hero Images CRUD
  async getHeroImages() {
    const heroImages = await this.heroImageModel.find().exec();
    return heroImages.map((image) => image.url);
  }

  async getHeroImage(id: string) {
    const heroImage = await this.heroImageModel.findById(id).exec();
    if (!heroImage) {
      throw new NotFoundException(`Hero Image with ID ${id} not found`);
    }
    return heroImage;
  }

  async createHeroImage(createHeroImageDto: Partial<HeroImage>) {
    const newHeroImage = new this.heroImageModel(createHeroImageDto);
    return newHeroImage.save();
  }

  async updateHeroImage(id: string, updateHeroImageDto: Partial<HeroImage>) {
    const updatedHeroImage = await this.heroImageModel
      .findByIdAndUpdate(id, updateHeroImageDto, { new: true })
      .exec();
    if (!updatedHeroImage) {
      throw new NotFoundException(`Hero Image with ID ${id} not found`);
    }
    return updatedHeroImage;
  }

  async deleteHeroImage(id: string) {
    const deletedHeroImage = await this.heroImageModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedHeroImage) {
      throw new NotFoundException(`Hero Image with ID ${id} not found`);
    }
    return deletedHeroImage;
  }

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
}
