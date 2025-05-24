import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { HomeController } from "./controllers/home.controller";
import { HomeService } from "./services/home.service";
import { Carousel, CarouselSchema } from "./entities/carousel.entity";
import { Presence, PresenceSchema } from "./entities/presence.entity";
import { Testimonial, TestimonialSchema } from "./entities/testimonial.entity";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Carousel.name, schema: CarouselSchema },
      { name: Presence.name, schema: PresenceSchema },
      { name: Testimonial.name, schema: TestimonialSchema },
    ]),
  ],
  controllers: [HomeController],
  providers: [HomeService],
  exports: [HomeService],
})
export class HomeModule {}
