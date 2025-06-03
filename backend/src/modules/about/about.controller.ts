import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { AboutService } from "./about.service";
import { CreateMemberDto } from "./dto/create-member.dto";
import { UpdateMemberDto } from "./dto/update-member.dto";

@Controller("api/about")
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Post("members")
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.aboutService.create(createMemberDto);
  }

  @Get("members")
  findAll() {
    return this.aboutService.findAll();
  }

  @Get("members/working-committee")
  findWorkingCommittee() {
    return this.aboutService.findWorkingCommittee();
  }

  @Get("members/other")
  findOtherMembers() {
    return this.aboutService.findOtherMembers();
  }

  @Get("members/:id")
  findOne(@Param("id") id: string) {
    return this.aboutService.findOne(id);
  }

  @Patch("members/:id")
  update(@Param("id") id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.aboutService.update(id, updateMemberDto);
  }

  @Delete("members/:id")
  remove(@Param("id") id: string) {
    return this.aboutService.remove(id);
  }
}
