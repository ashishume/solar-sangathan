import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { AdminModule } from "../admin/admin.module";

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || "solar_sangathan_secret",
      signOptions: { expiresIn: "1d" },
    }),
    AdminModule,
  ],
  providers: [JwtStrategy],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
