import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { TagsService } from "./tags.service";
import { CreateTagDto } from "./dto/create-tag.dto";
import { UpdateTagDto } from "./dto/update-tag.dto";
import { Tag } from "./entities/tag.entity";

@Controller("api/tags")
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  create(@Body() createTagDto: CreateTagDto): Promise<Tag> {
    return this.tagsService.create(createTagDto);
  }

  @Get()
  findAll(): Promise<Tag[]> {
    return this.tagsService.findAll();
  }

  @Get("popular")
  findPopular(@Query("limit") limit?: number): Promise<Tag[]> {
    return this.tagsService.findPopular(limit);
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Tag> {
    return this.tagsService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateTagDto: UpdateTagDto
  ): Promise<Tag> {
    return this.tagsService.update(id, updateTagDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<void> {
    return this.tagsService.remove(id);
  }
}
