import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { Admin, AdminDocument } from "./admin.model";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { LoginAdminDto } from "./dto/login-admin.dto";

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
    private jwtService: JwtService
  ) {}

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const existingAdmin = await this.adminModel.findOne({
      email: createAdminDto.email,
    });
    if (existingAdmin) {
      throw new ConflictException("Admin with this email already exists");
    }

    const admin = new this.adminModel(createAdminDto);
    return admin.save();
  }

  async login(
    loginAdminDto: LoginAdminDto
  ): Promise<{ token: string; admin: Admin }> {
    const admin = await this.adminModel.findOne({ email: loginAdminDto.email });
    if (!admin) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(
      loginAdminDto.password,
      admin.password
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const token = this.jwtService.sign(
      { id: admin._id, role: admin.role },
      { expiresIn: "1d" }
    );

    return { token, admin };
  }

  async findById(id: string): Promise<Admin> {
    return this.adminModel.findById(id).select("-password");
  }

  async findByEmail(email: string): Promise<Admin> {
    return this.adminModel.findOne({ email }).select("-password");
  }

  async findAll(): Promise<Admin[]> {
    return this.adminModel.find().select("-password");
  }
}
