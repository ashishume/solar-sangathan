import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from "@nestjs/common";
import { HomeService } from "./home.service";
import { Testimonial } from "./schemas/testimonial.schema";
import { Channel } from "./schemas/channel.schema";
import { Brand } from "./schemas/brand.schema";
import { Video } from "./schemas/video.schema";
import { Stat } from "./schemas/stat.schema";
import { HeroImage } from "./schemas/hero-image.schema";
import { MongoIdPipe } from "./pipes/mongo-id.pipe";
import { CreateCarouselDto } from "./dto/create-carousel.dto";
import { CreatePresenceDto } from "./dto/create-presence.dto";

@Controller("api")
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  // Testimonials endpoints
  @Get("testimonials")
  async getTestimonials() {
    return this.homeService.getTestimonials();
  }

  @Get("testimonials/:id")
  async getTestimonial(@Param("id", MongoIdPipe) id: string) {
    return this.homeService.getTestimonial(id);
  }

  @Post("testimonials")
  async createTestimonial(@Body() createTestimonialDto: Partial<Testimonial>) {
    return this.homeService.createTestimonial(createTestimonialDto);
  }

  @Put("testimonials/:id")
  async updateTestimonial(
    @Param("id", MongoIdPipe) id: string,
    @Body() updateTestimonialDto: Partial<Testimonial>
  ) {
    return this.homeService.updateTestimonial(id, updateTestimonialDto);
  }

  @Delete("testimonials/:id")
  async deleteTestimonial(@Param("id", MongoIdPipe) id: string) {
    return this.homeService.deleteTestimonial(id);
  }

  // Channels endpoints
  @Get("channels")
  async getChannels() {
    return this.homeService.getChannels();
  }

  @Get("channels/:id")
  async getChannel(@Param("id", MongoIdPipe) id: string) {
    return this.homeService.getChannel(id);
  }

  @Post("channels")
  async createChannel(@Body() createChannelDto: Partial<Channel>) {
    return this.homeService.createChannel(createChannelDto);
  }

  @Put("channels/:id")
  async updateChannel(
    @Param("id", MongoIdPipe) id: string,
    @Body() updateChannelDto: Partial<Channel>
  ) {
    return this.homeService.updateChannel(id, updateChannelDto);
  }

  @Delete("channels/:id")
  async deleteChannel(@Param("id", MongoIdPipe) id: string) {
    return this.homeService.deleteChannel(id);
  }

  // Brands endpoints
  @Get("brands")
  async getBrands() {
    return this.homeService.getBrands();
  }

  @Get("brands/:id")
  async getBrand(@Param("id", MongoIdPipe) id: string) {
    return this.homeService.getBrand(id);
  }

  @Post("brands")
  async createBrand(@Body() createBrandDto: Partial<Brand>) {
    return this.homeService.createBrand(createBrandDto);
  }

  @Put("brands/:id")
  async updateBrand(
    @Param("id", MongoIdPipe) id: string,
    @Body() updateBrandDto: Partial<Brand>
  ) {
    return this.homeService.updateBrand(id, updateBrandDto);
  }

  @Delete("brands/:id")
  async deleteBrand(@Param("id", MongoIdPipe) id: string) {
    return this.homeService.deleteBrand(id);
  }

  // Video endpoints
  @Get("video")
  async getVideoData() {
    return this.homeService.getVideoData();
  }

  @Get("video/:id")
  async getVideo(@Param("id", MongoIdPipe) id: string) {
    return this.homeService.getVideo(id);
  }

  @Post("video")
  async createVideo(@Body() createVideoDto: Partial<Video>) {
    return this.homeService.createVideo(createVideoDto);
  }

  @Put("video/:id")
  async updateVideo(
    @Param("id", MongoIdPipe) id: string,
    @Body() updateVideoDto: Partial<Video>
  ) {
    return this.homeService.updateVideo(id, updateVideoDto);
  }

  @Delete("video/:id")
  async deleteVideo(@Param("id", MongoIdPipe) id: string) {
    return this.homeService.deleteVideo(id);
  }

  // Stats endpoints
  @Get("stats")
  async getStats() {
    return this.homeService.getStats();
  }

  @Get("stats/:id")
  async getStat(@Param("id", MongoIdPipe) id: string) {
    return this.homeService.getStat(id);
  }

  @Post("stats")
  async createStat(@Body() createStatDto: Partial<Stat>) {
    return this.homeService.createStat(createStatDto);
  }

  @Put("stats/:id")
  async updateStat(
    @Param("id", MongoIdPipe) id: string,
    @Body() updateStatDto: Partial<Stat>
  ) {
    return this.homeService.updateStat(id, updateStatDto);
  }

  @Delete("stats/:id")
  async deleteStat(@Param("id", MongoIdPipe) id: string) {
    return this.homeService.deleteStat(id);
  }

  // Hero Images endpoints
  @Get("hero-images")
  async getHeroImages() {
    return this.homeService.getHeroImages();
  }

  @Get("hero-images/:id")
  async getHeroImage(@Param("id", MongoIdPipe) id: string) {
    return this.homeService.getHeroImage(id);
  }

  @Post("hero-images")
  async createHeroImage(@Body() createHeroImageDto: { urls: string[] }) {
    const heroImages = await Promise.all(
      createHeroImageDto.urls.map((url) =>
        this.homeService.createHeroImage({ url })
      )
    );
    return heroImages;
  }

  @Put("hero-images/:id")
  async updateHeroImage(
    @Param("id", MongoIdPipe) id: string,
    @Body() updateHeroImageDto: Partial<HeroImage>
  ) {
    return this.homeService.updateHeroImage(id, updateHeroImageDto);
  }

  @Delete("hero-images/:id")
  async deleteHeroImage(@Param("id", MongoIdPipe) id: string) {
    return this.homeService.deleteHeroImage(id);
  }

  // Carousel endpoints
  @Post("carousels")
  createCarousel(@Body() createCarouselDto: CreateCarouselDto) {
    return this.homeService.createCarousel(createCarouselDto);
  }

  @Get("carousels")
  findAllCarousels() {
    return this.homeService.findAllCarousels();
  }

  @Get("carousels/:id")
  findCarouselById(@Param("id") id: string) {
    return this.homeService.findCarouselById(id);
  }

  @Put("carousels/:id")
  updateCarousel(
    @Param("id") id: string,
    @Body() updateCarouselDto: Partial<CreateCarouselDto>
  ) {
    return this.homeService.updateCarousel(id, updateCarouselDto);
  }

  @Delete("carousels/:id")
  deleteCarousel(@Param("id") id: string) {
    return this.homeService.deleteCarousel(id);
  }

  // Presence endpoints
  @Post("presences")
  createPresence(@Body() createPresenceDto: CreatePresenceDto) {
    return this.homeService.createPresence(createPresenceDto);
  }

  @Get("presences")
  findAllPresences() {
    return this.homeService.findAllPresences();
  }

  @Get("presences/:id")
  findPresenceById(@Param("id") id: string) {
    return this.homeService.findPresenceById(id);
  }

  @Put("presences/:id")
  updatePresence(
    @Param("id") id: string,
    @Body() updatePresenceDto: Partial<CreatePresenceDto>
  ) {
    return this.homeService.updatePresence(id, updatePresenceDto);
  }

  @Delete("presences/:id")
  deletePresence(@Param("id") id: string) {
    return this.homeService.deletePresence(id);
  }
}
