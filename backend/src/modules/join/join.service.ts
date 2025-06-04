import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Join, JoinDocument } from "./join.entity";
import { CreateJoinDto } from "./dto/create-join.dto";

@Injectable()
export class JoinService {
  constructor(@InjectModel(Join.name) private joinModel: Model<JoinDocument>) {}

  async create(createJoinDto: CreateJoinDto): Promise<Join> {
    const createdJoin = new this.joinModel(createJoinDto);
    return createdJoin.save();
  }

  async findAll(): Promise<Join[]> {
    return this.joinModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<Join> {
    return this.joinModel.findById(id).exec();
  }

  async remove(id: string): Promise<void> {
    await this.joinModel.findByIdAndDelete(id).exec();
  }
}
