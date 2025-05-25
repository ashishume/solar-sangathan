import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Testimonial, TestimonialSchema } from "./schemas/testimonial.schema";
import { Channel, ChannelSchema } from "./schemas/channel.schema";
import { Brand, BrandSchema } from "./schemas/brand.schema";
import { Video, VideoSchema } from "./schemas/video.schema";
import { Stat, StatSchema } from "./schemas/stat.schema";
import { HeroImage, HeroImageSchema } from "./schemas/hero-image.schema";
import { HomeService } from "./home.service";
import { HomeController } from "./home.controller";
import { Carousel, CarouselSchema } from "./entities/carousel.entity";
import { Presence, PresenceSchema } from "./entities/presence.entity";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Testimonial.name, schema: TestimonialSchema },
      { name: Channel.name, schema: ChannelSchema },
      { name: Brand.name, schema: BrandSchema },
      { name: Video.name, schema: VideoSchema },
      { name: Stat.name, schema: StatSchema },
      { name: HeroImage.name, schema: HeroImageSchema },
      { name: Carousel.name, schema: CarouselSchema },
      { name: Presence.name, schema: PresenceSchema },
    ]),
  ],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
