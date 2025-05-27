import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { RateCardsService } from "./rate-cards.service";
import { CreateRateCardDto } from "./dto/create-rate-card.dto";
import { UpdateRateCardDto } from "./dto/update-rate-card.dto";

@Controller("api")
export class RateCardsController {
  constructor(private readonly rateCardsService: RateCardsService) {}

  @Post("rate-cards")
  create(@Body() createRateCardDto: CreateRateCardDto) {
    return this.rateCardsService.create(createRateCardDto);
  }

  @Get("rate-cards")
  findAll() {
    return this.rateCardsService.findAll();
  }

  @Get("rate-cards/:id")
  findOne(@Param("id") id: string) {
    return this.rateCardsService.findOne(id);
  }

  @Patch("rate-cards/:id")
  update(
    @Param("id") id: string,
    @Body() updateRateCardDto: UpdateRateCardDto
  ) {
    return this.rateCardsService.update(id, updateRateCardDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.rateCardsService.remove(id);
  }
}
