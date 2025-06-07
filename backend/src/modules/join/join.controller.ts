import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { JoinService } from "./join.service";
import { CreateJoinDto } from "./dto/create-join.dto";

@Controller("api/join")
export class JoinController {
  constructor(private readonly joinService: JoinService) {}

  @Post()
  create(@Body() createJoinDto: CreateJoinDto) {
    return this.joinService.create(createJoinDto);
  }

  @Get()
  findAll() {
    return this.joinService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.joinService.findOne(id);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.joinService.remove(id);
  }
}
