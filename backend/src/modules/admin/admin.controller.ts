import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Request,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { LoginAdminDto } from "./dto/login-admin.dto";
import { JwtAuthGuard } from "../auth/guards/jwt.guard";
import { SuperAdminGuard } from "../auth/guards/super-admin.guard";
import { Roles } from "../auth/decorators/roles.decorator";

@Controller("api/admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post("login")
  async login(@Body() loginAdminDto: LoginAdminDto) {
    return this.adminService.login(loginAdminDto);
  }

  @Post("create")
  @UseGuards(JwtAuthGuard, SuperAdminGuard)
  @Roles("SUPER_ADMIN")
  async create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Get("me")
  @UseGuards(JwtAuthGuard)
  async getProfile(@Request() req) {
    return this.adminService.findById(req.user.id);
  }

  @Get("all")
  @UseGuards(JwtAuthGuard, SuperAdminGuard)
  async getAllAdmins() {
    return this.adminService.findAll();
  }
}
