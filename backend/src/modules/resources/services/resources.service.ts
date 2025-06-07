import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Resource } from "../entities/resource.entity";
import { CreateResourceDto } from "../dto/create-resource.dto";

@Injectable()
export class ResourcesService {
  constructor(
    @InjectModel(Resource.name) private resourceModel: Model<Resource>
  ) {}

  async findAll(): Promise<Resource[]> {
    return this.resourceModel.find().exec();
  }

  async findOne(id: string): Promise<Resource> {
    const resource = await this.resourceModel.findById(id).exec();
    if (!resource) {
      throw new NotFoundException(`Resource with ID ${id} not found`);
    }
    return resource;
  }

  async create(createResourceDto: CreateResourceDto): Promise<Resource> {
    const createdResource = new this.resourceModel(createResourceDto);
    return createdResource.save();
  }

  async delete(id: string): Promise<void> {
    await this.resourceModel.findByIdAndDelete(id).exec();
  }

  async update(
    id: string,
    updateResourceDto: CreateResourceDto
  ): Promise<Resource> {
    return this.resourceModel
      .findByIdAndUpdate(id, updateResourceDto, { new: true })
      .exec();
  }
}
