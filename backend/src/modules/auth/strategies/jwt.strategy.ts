import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AdminService } from "../../admin/admin.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private adminService: AdminService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || "solar_sangathan_secret",
    });
  }

  async validate(payload: { id: string; role: string }) {
    const admin = await this.adminService.findById(payload.id);
    if (!admin) {
      throw new UnauthorizedException();
    }
    return { id: payload.id, role: payload.role };
  }
}
