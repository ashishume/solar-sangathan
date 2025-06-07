import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  Put,
} from "@nestjs/common";
import { ResourcesService } from "../services/resources.service";
import { CreateResourceDto } from "../dto/create-resource.dto";
import { Resource } from "../entities/resource.entity";

@Controller("api/resources")
export class ResourcesController {
  constructor(private readonly resourcesService: ResourcesService) {}

  @Get()
  async findAll(): Promise<Resource[]> {
    return this.resourcesService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Resource> {
    return this.resourcesService.findOne(id);
  }

  @Post()
  async create(
    @Body() createResourceDto: CreateResourceDto
  ): Promise<Resource> {
    return this.resourcesService.create(createResourceDto);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updateResourceDto: CreateResourceDto
  ): Promise<Resource> {
    return this.resourcesService.update(id, updateResourceDto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string): Promise<void> {
    return this.resourcesService.delete(id);
  }
}
