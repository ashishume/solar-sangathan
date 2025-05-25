import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RateCard, RateCardSchema } from "./schemas/rate-card.schema";
import { RateCardsController } from "./rate-cards.controller";
import { RateCardsService } from "./rate-cards.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RateCard.name, schema: RateCardSchema },
    ]),
  ],
  controllers: [RateCardsController],
  providers: [RateCardsService],
  exports: [RateCardsService],
})
export class RateCardsModule {}
