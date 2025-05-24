import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from "@nestjs/common";
import { HomeService } from "../services/home.service";
import { CreateCarouselDto } from "../dto/create-carousel.dto";
import { CreatePresenceDto } from "../dto/create-presence.dto";
import { CreateTestimonialDto } from "../dto/create-testimonial.dto";

@Controller("home")
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

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

  // Testimonial endpoints
  @Post("testimonials")
  createTestimonial(@Body() createTestimonialDto: CreateTestimonialDto) {
    return this.homeService.createTestimonial(createTestimonialDto);
  }

  @Get("testimonials")
  findAllTestimonials() {
    return this.homeService.findAllTestimonials();
  }

  @Get("testimonials/:id")
  findTestimonialById(@Param("id") id: string) {
    return this.homeService.findTestimonialById(id);
  }

  @Put("testimonials/:id")
  updateTestimonial(
    @Param("id") id: string,
    @Body() updateTestimonialDto: Partial<CreateTestimonialDto>
  ) {
    return this.homeService.updateTestimonial(id, updateTestimonialDto);
  }

  @Delete("testimonials/:id")
  deleteTestimonial(@Param("id") id: string) {
    return this.homeService.deleteTestimonial(id);
  }
}
