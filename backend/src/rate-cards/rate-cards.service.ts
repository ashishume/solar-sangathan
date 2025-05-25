import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RateCard, RateCardDocument } from "./schemas/rate-card.schema";
import { CreateRateCardDto } from "./dto/create-rate-card.dto";
import { UpdateRateCardDto } from "./dto/update-rate-card.dto";

@Injectable()
export class RateCardsService {
  constructor(
    @InjectModel(RateCard.name) private rateCardModel: Model<RateCardDocument>
  ) {}

  async create(createRateCardDto: CreateRateCardDto): Promise<RateCard> {
    const createdRateCard = new this.rateCardModel(createRateCardDto);
    return createdRateCard.save();
  }

  async findAll(): Promise<RateCard[]> {
    return this.rateCardModel.find().exec();
  }

  async findOne(id: string): Promise<RateCard> {
    const rateCard = await this.rateCardModel.findById(id).exec();
    if (!rateCard) {
      throw new NotFoundException(`Rate card with ID ${id} not found`);
    }
    return rateCard;
  }

  async update(
    id: string,
    updateRateCardDto: UpdateRateCardDto
  ): Promise<RateCard> {
    const updatedRateCard = await this.rateCardModel
      .findByIdAndUpdate(id, updateRateCardDto, { new: true })
      .exec();
    if (!updatedRateCard) {
      throw new NotFoundException(`Rate card with ID ${id} not found`);
    }
    return updatedRateCard;
  }

  async remove(id: string): Promise<void> {
    const result = await this.rateCardModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Rate card with ID ${id} not found`);
    }
  }
}
